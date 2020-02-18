<template>
    <div>
        <template >
            <v-toolbar color="green" dark>
                <v-toolbar-title>Cadastro de História</v-toolbar-title>                
            </v-toolbar>
        </template>
         <Form />
        <template>
            <v-toolbar color="orange" dark>
                <v-toolbar-title>Histórias Cadastradas</v-toolbar-title>                
            </v-toolbar>
        </template>
         <CheckListTable />
    </div>
</template>

<script>
import CheckListTable from '@/components/CheckListTable.vue'
import Form from '@/components/Form.vue'

export default {

  name: 'Content',
  components: {
      CheckListTable,
      Form
  }
}
</script>