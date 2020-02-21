<template>
<div>
  <template>
  <v-data-table
    :headers="headers"
    :items="stories"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:item.backend="{ item }">
        <v-chip @click="changeChip(item,'backend')" small label :color="item.backend ? 'green': 'red'" dark>{{ item.backend ? 'Sim' : 'Não' }}</v-chip>
    </template>
    <template v-slot:item.frontend="{ item }">
        <v-chip @click="changeChip(item,'frontend')" small label :color="item.frontend ? 'green': 'red'" dark>{{ item.frontend ? 'Sim' : 'Não' }}</v-chip>
    </template>
    <template v-slot:item.database="{ item }">
        <v-chip @click="changeChip(item, 'database')" small label :color="item.database ? 'green': 'red'" dark>{{ item.database ? 'Sim' : 'Não' }}</v-chip>
    </template>
    <template v-slot:item.valueFinished="{ item }">
      <v-progress-linear
      :color="item.valueFinished <= 45 ? 'red' : (item.valueFinished < 75) ? 'orange' : 'green' "
      height="20"
      :value="item.valueFinished"
      striped
    >
        <strong style="color: black">{{ item.valueFinished }}%</strong>
    </v-progress-linear>
    </template>
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-dialog v-model="dialog" max-width="1200px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field v-model="editedItem.taskNumber" label="N. Task"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="9">
                    <v-text-field v-model="editedItem.description" label="Descrição"></v-text-field>
                  </v-col>
                </v-row>
                <div>
                <v-tabs v-model="tab">
                  <v-tab>Padrão</v-tab>
                  <v-tab>Específico</v-tab>
                </v-tabs>
              <v-container>
                <v-tabs-items v-model="tab">
                  <v-tab-item>
                    <v-card flat class="container">
                        <div class="d-block pa-2 deep-purple accent-4 white--text">Lista padrão</div>
                      <v-row class="mt-4" dense no-gutters>
                          <v-col class="pt-0 ma-0"  cols="12" sm="6">
                            <v-checkbox class="pt-0 ma-0" label="A PO aprovou a atividade na review ?" v-model="editedItem.defaultList.poApproves"></v-checkbox>
                          </v-col>
                          <v-col class="pt-0 ma-0"  cols="12" sm="6">
                            <v-checkbox class="pt-0 ma-0" label="Há TimeBox para deploy?" v-model="editedItem.defaultList.hasTimebox"></v-checkbox>
                          </v-col>
                          <v-col class="pt-0 ma-0"  cols="12" sm="6">
                            <v-checkbox class="pt-0 ma-0" label="Consegue validar em prod a historia?" v-model="editedItem.defaultList.storieValid"></v-checkbox>
                          </v-col>
                          <v-col class="pt-0 ma-0"  cols="12" sm="6">
                            <v-checkbox class="pt-0 ma-0" label="A historia foi validada pelo QA?" v-model="editedItem.defaultList.storieQAValid"></v-checkbox>
                          </v-col>
                          <v-col class="pt-0 ma-0"  cols="12" sm="6">
                            <v-checkbox class="pt-0 ma-0" label="A atividade atende o escopo solicitado?" v-model="editedItem.defaultList.scopeApproves"></v-checkbox>
                          </v-col>
                          <v-col class="pt-0 ma-0"  cols="12" sm="6">
                            <v-checkbox class="pt-0 ma-0" label="Todas as alterações foram validadas com a PO?" v-model="editedItem.defaultList.updatePoApproves"></v-checkbox>
                          </v-col>
                          <v-col class="pt-0 ma-0"  cols="12" sm="6">
                            <v-checkbox class="pt-0 ma-0" label="Foi considerado os requisitos de segurança?" v-model="editedItem.defaultList.securityCheck"></v-checkbox>
                          </v-col>
                          <v-col class="pt-0 ma-0"  cols="12" sm="6">
                            <v-checkbox class="pt-0 ma-0" label="É necessário alguém externo a equipe acompanhar o deploy?" v-model="editedItem.defaultList.externalApproves"></v-checkbox>
                          </v-col>
                          <v-col class="pt-0 ma-0"  cols="12" sm="6">
                            <v-checkbox class="pt-0 ma-0" label="O processo de rollback foi verificado?" v-model="editedItem.defaultList.rollbackVerify"></v-checkbox>
                          </v-col>
                          <v-col class="pt-0 ma-0"  cols="12" sm="6">
                            <v-checkbox class="pt-0 ma-0" label="Existe dependência pra deploy?" v-model="editedItem.defaultList.hasDeploy"></v-checkbox>
                          </v-col>
                          <v-col class="pt-0 ma-0"  cols="12" sm="6">
                            <v-checkbox class="pt-0 ma-0" label="Documentou a historia/feature no confluence ?" v-model="editedItem.defaultList.storieDoc"></v-checkbox>
                          </v-col>
                      </v-row>
                    </v-card>
                  </v-tab-item>
                  
                  <v-tab-item>
                    <v-card class="container" flat> 
                      <v-row dense no-gutters>    
                        <v-col style="background-color: #f0f0f0" cols="12" sm="4" class="pt-0 ma-0">
                          <div class="d-block pa-2 deep-purple accent-4 white--text">Backend</div>

                            <v-col class="pt-0 ma-0" cols="12" sm="12">
                              <v-checkbox
                              v-model="editedItem.backendList.buildCreated"
                              label="O build foi realizado com sucesso?"
                              :disabled="!editedItem.backend"></v-checkbox>
                            </v-col> 
                            
                            <v-col class="pt-0 ma-0" cols="12" sm="12">
                              <v-checkbox
                              v-model="editedItem.backendList.stressTest"
                              label="Fez testes de Stress nas Apis?"
                              :disabled="!editedItem.backend"></v-checkbox>
                            </v-col> 

                            <v-col class="pt-0 ma-0" cols="12" sm="12">
                              <v-checkbox
                              v-model="editedItem.backendList.sameBase"
                              label="A base QA e Prod está igual?"
                              :disabled="!editedItem.backend"></v-checkbox>
                            </v-col> 
                        </v-col>    

                        <v-col cols="12" sm="4" class="pt-0 ma-0">
                          <div class="d-block pa-2 deep-purple accent-4 white--text">Frontend</div>                                                  
                        
                        <v-col class="pt-0 ma-0" cols="12" sm="12">
                              <v-checkbox
                              v-model="editedItem.frontendList.snapshotUpdated"
                              label="Atualizou snapshot do teste unitarios?"
                              :disabled="!editedItem.frontend"></v-checkbox>
                            </v-col> 
                            
                            <v-col class="pt-0 ma-0" cols="12" sm="12">
                              <v-checkbox
                              v-model="editedItem.frontendList.lintValid"
                              label="O teste de lint foi executado?"
                              :disabled="!editedItem.frontend"></v-checkbox>
                            </v-col> 

                            <v-col class="pt-0 ma-0" cols="12" sm="12">
                              <v-checkbox
                              v-model="editedItem.frontendList.invision"
                              label="Validou se as telas estão de acordo com Invision?"
                              :disabled="!editedItem.frontend"></v-checkbox>
                            </v-col> 
                        
                        </v-col> 

                        <v-col style="background-color: #f0f0f0" cols="12" sm="4" class="pt-0 ma-0">
                          <div class="d-block pa-2 deep-purple accent-4 white--text">Database</div>
                          <v-col class="pt-0 ma-0" cols="12" sm="12">
                              <v-checkbox
                              v-model="editedItem.databaseList.adValid"
                              label="Já validou com AD?"
                              :disabled="!editedItem.database"></v-checkbox>
                            </v-col>
                        </v-col>  
                      </v-row>

                    </v-card>
                  </v-tab-item>
                  </v-tabs-items>
                  </v-container>
                </div>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save">Salvar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>
<v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        top
        right
        :color="snackbarColor"
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
</div>
</template>

<script>
import axios from 'axios'

  export default {
    data: () => ({
      dialog: false,
      tab: null,
      snackbar: false,
      text: '',
      snackbarColor: 'success',
      timeout: 4000,
      numero: 0,
      numero2: '',
      headers: [
        {
          text: 'Número Task',
          align: 'left',
          sortable: false,
          value: 'taskNumber',
        },
        { text: 'Descrição', value: 'description' },
        { text: 'Backend', value: 'backend', align: 'center' },
        { text: 'Frontend', value: 'frontend', align: 'center' },
        { text: 'Database', value: 'database', align: 'center' },
        { text: '%Conclusão', value: 'valueFinished', align: 'center' },
        { text: 'Ações', value: 'action', sortable: false },
      ],
      defaultList: [
        { text: 'A PO aprovou a atividade na review ?', value: 'poApproves'},
        { text: 'Há TimeBox para deploy?', value: 'hasTimebox'},
        { text: 'Consegue validar em prod a historia?', value: 'storieValid'},
        { text: 'A historia foi validada pelo QA?', value: 'storieQAValid'},
        { text: 'A atividade atende o escopo solicitado?', value: 'scopeApproves'},
        { text: 'Todas as alterações foram validadas com a PO?', value: 'updatePoApproves'},
        { text: 'Foi considerado os requisitos de segurança?', value: 'securityCheck'},
        { text: 'É necessário alguém externo a equipe acompanhar o deploy?', value: 'externalApproves'},
        { text: 'O processo de rollback foi verificado?', value: 'rollbackVerify'},
        { text: 'Existe dependência pra deploy?', value: 'hasDeploy'},
        { text: 'Documentou a historia/feature no confluence ?', value: 'storieDoc'},
      ],
      stories: [],
      editedIndex: -1,
      editedItem: {
        taskNumber: '',
        description: '',
        backend: false,
        frontend: false,
        database: false,
        valueFinished: 0,
        backendList: {
          sameBase: false,
          stressTest: false,
          buildCreated: false
        },
        databaseList: {
          adValid: false
        },
        frontendList: {
          snapshotUpdated: false,
          lintValid: false,
          invision: false
        },  
        defaultList: {
          poApproves: false,
          hasTimebox: false,
          storieValid: false,
          storieQAValid: false,
          scopeApproves: false,
          updatePoApproves: false,
          securityCheck: false,
          externalApproves: false,
          rollbackVerify: false,
          hasDeploy: false,
          storieDoc: false
        }      
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Editar História'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    methods: {
       async changeChip(item, value){

        switch(value){
          case 'backend':
            item.backend = !item.backend
          break;

          case 'frontend':
            item.frontend = !item.frontend
          break;

          case 'database':
            item.database = !item.database
          break;
        }
        await axios
          .put(`http://localhost:3003/api/checklists/${item._id}`, item)
          .then( () => {
            this.text = "Atualizado banco de dados"
            this.snackbar = true;
            this.getItems()
          })
          .catch(error =>{
            this.text = "Houve um erro ao atualizar banco de dados"
            this.snackbarColor = "error"
            this.snackbar = true;
            console.log(error)
          })
      },

      async getItems(){
        await axios
          .get(`http://localhost:3003/api/checklists/`)
          .then(res =>{
            this.stories = res.data
            console.log(res.data)
            this.stories.forEach(element => {
              element.valueFinished = '75'              
            });
          })
      },

      editItem (item) {
        this.editedIndex = this.stories.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
        console.log(this.editedItem)
      },

      async deleteItem (item) {
        const index = 'id:'+this.stories.indexOf(item)
        confirm('Tem certeza que deseja deletar este item?') && 
        (await axios
          .delete(`http://localhost:3003/api/checklists/`,index)
          .then( res =>{
            this.text = "História deletada com sucesso"
            this.snackbar = true;
            res ? this.getItems() : ''
          })
          .catch(error => {
            this.text = "Houve um erro ao atualizar banco de dados"
            this.snackbarColor = "error"
            this.snackbar = true;
            console.log(error)
          })
        )
      },

      close () {
        this.dialog = false
      },

      async save () {
        console.log(this.editedItem)

           await axios
          .put(`http://localhost:3003/api/checklists/${this.editedItem._id}`, this.editedItem)
          .then( () => {
            this.text = "Atualizado banco de dados"
            this.snackbar = true;
            this.getItems()
          })
          .catch(error =>{
            console.log(error)
          })
        this.close()
      },
    },
    mounted() {
      this.getItems()
    }
  }
</script>

<style>
  .checkboxvue {
      font-size: 10px;
      line-height: 1.5;
  }
</style>