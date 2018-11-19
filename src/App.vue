<template>
  <div id="app">
    <TopNavbar></TopNavbar>
    <img src="./assets/logo.png">
    <Navbar></Navbar>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import TopNavbar from '@/components/TopNavbar.vue'
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    'TopNavbar': TopNavbar,
    'Navbar': Navbar,
    'Header': Header,
    'Footer': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
