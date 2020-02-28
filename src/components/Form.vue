<template>
  <v-form id="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="1"
        >
          <v-text-field
            v-model="formObject.taskNumber"
            :counter="10"
            prefix="PSCAI-"
            required
            number
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="8"
        >
          <v-text-field
            v-model="formObject.description"
            :counter="999"
            label="Descrição"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="1">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                    <v-checkbox
                    v-on="on"
                    v-model="formObject.backend"
                    label="BE"
                    ></v-checkbox>
            </template>
            <span>Backend</span>
        </v-tooltip>
        </v-col>

        <v-col cols="12" md="1">
          <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-checkbox
               v-on="on"
               v-model="formObject.frontend"
               label="FE"
            ></v-checkbox>
          </template>
          <span>Frontend</span>
          </v-tooltip>            
        </v-col>

        <v-col cols="12" md="1">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-checkbox
                v-on="on"
                v-model="formObject.database"
                label="DB"
                ></v-checkbox>
            </template>
            <span>Database</span>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-row>
          <div>
            <v-col>
              <v-btn @click="clearForm" color="red" small dark>Reset</v-btn>
            </v-col>
          </div>
          <div>
            <v-col>
              <v-btn @click="saveForm" color="green" small dark>Salvar</v-btn>
            </v-col>
          </div>
          {{ola}}
      </v-row>
    </v-container>
    <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        :color="snackbarColor"
        top
        right
      >
        {{ text }}
        <v-btn
          color="white"
          text
          @click="snackbar = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
    </v-snackbar>
  </v-form>  
</template>

<script>
import Axios from 'axios'

  export default {
    name: 'Form',
    data: () => ({
      valid: false,
      baseApiUrl: 'https://checklist-cairo.herokuapp.com',
      snackbar: false,
      snackbarColor: 'success',
      text: '',
      ola: '',
      timeout: 4000,
      formObject: {
          backend: false,
          frontend: false,
          database: false,
          taskNumber: '',
          description: '',
      },   
      initialValues: {
        backend: false,
        frontend: false,
        database: false,
        taskNumber: '',
        description: '',
      }, 
    }),
    methods: {
        saveForm() {
              if(!this.formObject.taskNumber){
                this.snackbar = true;
                this.text = "Numero da Task é obrigatório" 
              }
              else if(!this.formObject.description){
                this.snackbar = true;
                this.text = "Descrição é obrigatório" 
              }

              else{
              this.formObject.taskNumber = `PSCAI-${this.formObject.taskNumber}`
               Axios
                .post(`${this.baseApiUrl}/api/checklists/`, this.formObject)
                .then(async response => {
                  await response ? this.clearForm() : ''
                    this.clearForm()
                    this.text = "Tarefa Cadastrada com sucesso!"
                    this.snackbar = true;
                    console.log(this.$emit)
                    this.getItems()
                })
                .catch( (err)=>{
                  if(err.response.data.code === 11000){
                    this.text = "ERRO: História já havia sido cadastrada"
                    this.snackbarColor = 'error'
                    this.snackbar = true;
                  }
                  
                  this.formObject.taskNumber = this.formObject.taskNumber.substring(6,this.formObject.taskNumber.length)
                })
            }             
        },
        clearForm(){
            this.formObject = this.initialValues         
        },


        async getItems(){

        await Axios
          .get(`${this.baseApiUrl}/api/checklists/`)
          .then(res =>{
            this.$store.state.stories = res.data
            this.$store.state.stories.forEach(items => {
              let divisor = 11;
              const target = {};

              items.backend ? divisor = divisor + 3 : ''
              items.frontend ? divisor = divisor + 3 : ''
              items.database ? divisor = divisor + 1 : ''

              let fraction = (100/divisor); 
              
              let returnedTarget = (target, itemsObject) =>{
                  let j = Object.assign(target, itemsObject)
                  j = Object.values(j).filter(item => item === true)
                  return j
              }
              
              if(items.backend) items.valueFinished = fraction * (returnedTarget(target, items.backendList).length)
              if(items.frontend) items.valueFinished = fraction * (returnedTarget(target, items.frontendList).length)
              if(items.database) items.valueFinished = fraction * (returnedTarget(target, items.databaseList).length)

              items.valueFinished = fraction * (returnedTarget(target, items.defaultList).length) 

            });
          })
          .catch(error =>{
            console.log(error)
          })
      },
    },
    mounted: function () {
  this.$nextTick(function () {
    // Código que irá rodar apenas após toda
    // a árvore do componente ter sido renderizada
  })
}
  }
</script>

<style>
    #form {
        background-color: white;
    }
</style>