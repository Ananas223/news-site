<template>
  
    <v-main>
      <v-container>
        <v-row no-gutters> 
          <NewsModule v-for="(item, i) in news" v-bind:key="i"
          v-bind:image = "item.urlToImage"
          v-bind:link = "item.url"
          v-bind:title = "item.title"
          v-bind:descr = "item.description"
          >
          </NewsModule>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
import NewsModule from '../components/NewsModule.vue'

export default {
  name: 'UsNews',

  components: {
    NewsModule
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