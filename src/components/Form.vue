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
      snackbar: false,
      snackbarColor: 'success',
      text: '',
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
                .post(`http://localhost:3003/api/checklists/`, this.formObject)
                .then(async response => {
                  await response ? this.clearForm() : ''
                    this.clearForm()
                    this.text = "Tarefa Cadastrada com sucesso!"
                    this.snackbar = true;
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
        }
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