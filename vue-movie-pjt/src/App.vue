<!--
  view 의 요소들이 합쳐지는 곳
-->
<template>
  <div>
    <Header /> 
    <router-view/> 
    <Footer />
  </div>
  
  
</template>
<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      Header,
      Footer
    }
  }

</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

table { border-collapse: collapse; border:1px solid #2c3e50; display: inline-block;}
th,td { border:1px solid #2c3e50; padding:10px 15px;}
</style>
