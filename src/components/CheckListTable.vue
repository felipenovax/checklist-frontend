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
        <v-chip small label :color="item.backend ? 'green': 'red'" dark>{{ item.backend ? 'Sim' : 'Não' }}</v-chip>
    </template>
    <template v-slot:item.frontend="{ item }">
        <v-chip small label :color="item.frontend ? 'green': 'red'" dark>{{ item.frontend ? 'Sim' : 'Não' }}</v-chip>
    </template>
    <template v-slot:item.database="{ item }">
        <v-chip small label :color="item.database ? 'green': 'red'" dark>{{ item.database ? 'Sim' : 'Não' }}</v-chip>
    </template>
    <template v-slot:item.valueFinished="{ item }">
      <v-progress-linear
      :color="item.valueFinished < 75 ? 'red' : 'light-green'"
      height="20"
      :value="item.valueFinished"
      striped
    >
        <strong style="color: black">{{ item.valueFinished }}%</strong>
    </v-progress-linear>
    </template>
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-dialog hide-overlay="true"  v-model="dialog" max-width="1200px">
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
                      <v-row align-content-sm dense no-gutters>
                          <v-col class="pt-0 ma-0"  cols="12" sm="6" v-for="(item,index) in defaultList" :key="index">
                            <v-checkbox class="pt-0 ma-0" :label="item.text"></v-checkbox>
                          </v-col>
                      </v-row>
                    </v-card>
                  </v-tab-item>

                  <v-tab-item>
                    <v-card class="container" flat> 
                      <v-row align-content-sm dense no-gutters>    
                        <v-col style="background-color: #f0f0f0" cols="12" sm="4" class="pt-0 ma-0">
                          <div class="d-block pa-2 deep-purple accent-4 white--text">Backend</div>
                          <v-col class="pt-0 ma-0"  v-for="(item,index) in backendList" :key="index" cols="12" sm="12">
                            <v-checkbox class="pt-0 ma-0" :label="item.text"></v-checkbox>
                          </v-col>
                        </v-col>    

                        <v-col cols="12" sm="4" class="pt-0 ma-0">
                          <div class="d-block pa-2 deep-purple accent-4 white--text">Frontend</div>
                          <v-col class="pt-0 ma-0"  v-for="(item,index) in frontendList" :key="index" cols="12" sm="12">
                            <v-checkbox class="pt-0 ma-0" :label="item.text"></v-checkbox>
                          </v-col>
                        </v-col> 

                        <v-col style="background-color: #f0f0f0" cols="12" sm="4" class="pt-0 ma-0">
                          <div class="d-block pa-2 deep-purple accent-4 white--text">Database</div>
                          <v-col class="pt-0 ma-0"  v-for="(item,index) in databaseList" :key="index" cols="12" sm="12">
                            <v-checkbox class="pt-0 ma-0" :label="item.text"></v-checkbox>
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
</div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      tab: null,
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
      backendList: [
        { text: 'O build foi realizado com sucesso?', value: 'buildCreated' },
        { text: 'Fez testes de Stress nas Apis?', value: 'stressTest' },
        { text: 'A base QA e Prod está igual?', value: 'sameBase' }
      ],
      frontendList: [
        { text: 'Atualizou snapshot do teste unitarios?', value: 'snapshotUpdated' },
        { text: 'O teste de lint foi executado?', value: 'lintValid' },
        { text: 'Validou se as telas estão de acordo com Invision?', value: 'invision' }
      ],
      databaseList: [
        { text: 'Já validou com AD?', value: 'adValid'}
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
      stories: [
        {
            taskNumber: 'PSCAI-38',
            description: 'provident explicabo commodi impedit placeat ducimus, fuga asperiores debitis optio iste illo?',
            backend: true,
            frontend: false,
            database: true,
            valueFinished: '75'
        },
        {
            taskNumber: 'PSCAI-1',
            description: 'provident explicabo commodi impedit placeat ducimus, fuga asperiores debitis optio iste illo?',
            backend: false,
            frontend: true,
            database: false,
            valueFinished: '49'
        }
      ],
      editedIndex: -1,
      editedItem: {
        taskNumber: '',
        description: '',
        backend: false,
        frontend: false,
        database: false,
        valueFinished: 0,
      },
      defaultItem: {
        taskNumber: '',
        description: '',
        backend: false,
        frontend: false,
        valueFinished: 0,
      },
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
      editItem (item) {
        this.editedIndex = this.stories.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.stories.indexOf(item)
        confirm('Tem certeza que deseja deletar este item?') && this.stories.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.stories[this.editedIndex], this.editedItem)
        } else {
          this.stories.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style>
  .checkboxvue {
      font-size: 10px;
      line-height: 1.5;
  }
</style>