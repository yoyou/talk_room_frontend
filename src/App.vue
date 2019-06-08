<template>
  <div id= "app">
    <navbar>
      <router-link to="/login" slot="login" class="route">登录</router-link>
      <router-link to="/room" slot="room" class="route">聊天室</router-link>
    </navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import navbar from './components/navbar.vue'
  export default {
    name: 'app',
    components: {
      navbar       
    }
  }
</script>

<style scoped>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%
  }
  .route {
    color: #fff;
    margin: 4px;
    text-decoration: none
  }
</style>
