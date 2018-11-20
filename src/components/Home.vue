<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  metaInfo: {
    title: 'My Page Title',
    titleTemplate: null,
    // Define meta tags here.
    meta: [
      {name: 'description', content: 'First website'},
      // OpenGraph data (Most widely used)
      {property: 'og:title', content: 'My Page Title ← My Site'},
      {property: 'og:site_name', content: 'My Site'},
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
};
</script>
