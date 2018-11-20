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
    errors: [],
    title: null
  }),
  created() {
    axios.get('https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=f3acff39c60649b499910e073986817e')
    .then(response => {
      this.items = response.data.articles
      this.title = 'My Blog'
      console.log(this.items)
    })
    .catch(e => {
      this.errors.push(e)
      console.log(this.errors)
    })
  },
  metaInfo () {
    return {
      title: this.title,
      titleTemplate: null,
      // Define meta tags here.
      meta: [
        {name: 'description', content: 'GoodTech, Blog about technologies'},
        // OpenGraph data (Most widely used)
        {property: 'og:title', content: 'Blog ← GoodTech'},
        {property: 'og:site_name', content: 'GoodTech'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://www.mydomain.com'},
        {property: 'og:image', content: 'https://www.mydomain.com/image.jpg'},
        {property: 'og:description', content: 'I have things here on my site.'},
        // Twitter card
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: 'https://www.mydomain.com/page'},
        {name: 'twitter:title', content: 'My Page Title ← My Site'},
        {name: 'twitter:description', content: 'I have things here on my site.'},
        {name: 'twitter:creator', content: '@Wixys'},
        {name: 'twitter:image:src', content: 'https://www.mydomain.com/image.jpg'},
        // Google / Schema.org markup:
        {itemprop: 'name', content: 'My Page Title ← My Site'},
        {itemprop: 'description', content: 'I have things here on my site.'},
        {itemprop: 'image', content: 'https://www.mydomain.com/image.jpg'},
      ]
    }
  }
};
</script>
