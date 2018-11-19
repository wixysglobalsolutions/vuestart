<template>
  <div>
    <h1>Blog</h1>
    <div v-for="item in items">
      <h3><a :href="item.url" :title="item.title">{{ item.title }}</a></h3>
      <p>
        <span>{{ item.publishedAt }}</span><br>
        <span v-if=item.author>Author: {{ item.author }}</span><br>
        <span>Source: {{ item.source.name }}</span>
      </p>
      <img :src="item.urlToImage" width="300">
      <p v-if="item.description" v-html="item.description"></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'blog',
  data: () => ({
    items: [],
    errors: []
  }),
  created() {
    axios.get('https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=f3acff39c60649b499910e073986817e')
    .then(response => {
      this.items = response.data.articles
      //console.log(this.items)
    })
    .catch(e => {
      this.errors.push(e)
      console.log(this.errors.push(e))
    })
  }
};
</script>
