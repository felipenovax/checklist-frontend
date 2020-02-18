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
            :rules="taskRules"
            :counter="10"
            label="Task"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="8"
        >
          <v-text-field
            v-model="formObject.description"
            :rules="formObject.descriptionRules"
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
  </v-form>
</template>

<script>
import Axios from 'axios'

  export default {
    name: 'Form',
    data: () => ({
      valid: false,
      formObject: {
          backend: false,
          frontend: false,
          database: false,
          taskNumber: '',
          description: '',
      },    
      taskRules: [
        v => !!v || 'O Numero é obrigatorio'
      ],
      descriptionRules: [
        v => !!v || 'Descrição obrigatória'
      ],
    }),
    methods: {
        saveForm() {
            console.log(this.formObject)
            Axios
                .post(`http://localhost:3009/checklist/`, this.formObject)
                .then(response => {
                    response ? this.clearForm() : ''
                })
                .catch( (err)=>{
                    console.log(err)
                })
            
        },
        clearForm(){

            for(let value in this.formObject) {
                console.log(typeof value)
                console.log(value)
            switch (typeof this.formObject[value]) {
            case 'string':
                this.formObject[value] = '';
                break;
            case 'number':
                this.formObject[value] = 0
                break;
            case 'boolean':
                this.object[value] = false
                break;
            case 'object':
                  Array.isArray(this.formObject[value]) ? this.formObject[value] = [] : this.formObject[value] = {}
                break;
            default:

        }
    }
                // this.formObject.frontend = false;
                // this.formObject.backend = false;
                // this.formObject.database = false;
                // this.formObject.taskNumber = '';
                // this.formObject.description = '';                
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