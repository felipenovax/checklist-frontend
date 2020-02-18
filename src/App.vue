<template>
  <v-app id="inspire" class="container">
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-toolbar-title class="text-center">Checklist</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <Content />
          </v-col>
        </v-row>        
      </v-container>
    </v-content>

    
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Content from '@/views/Content.vue'

  export default {
    props: {
      source: String,
    },
    components: {
      Content
    },
    data: () => ({
      // drawer: null,
    }),
    
  }
</script>

<style>
  #inspire {
    background-color: lightgray;
  }
</style>