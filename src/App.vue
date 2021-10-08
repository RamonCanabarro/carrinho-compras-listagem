<template>
  <carrinho />
</template>

<script>
import Carrinho from './components/Carrinho'
export default {
  name: 'App',
  components: { 
    Carrinho
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
  margin-top: 60px;
}
body {
  background-color: #F0F0F0;
}
</style>
