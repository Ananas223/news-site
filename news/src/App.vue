<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon v-on:click="navigation = !navigation"></v-app-bar-nav-icon>
      <v-toolbar-title>Новости</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="navigation"></v-navigation-drawer>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    navigation: false,
    news: []
  }),
  methods:{
    getNews(){
      this.axios({
        method: 'GET',
        url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=d7f41a32c26b4bbfb596d58b1a54c766"
      }).then((response)=>{
        this.news = response.data.articles;
      })
    }
  },
  mounted(){
    this.getNews();
  }
};
</script>
