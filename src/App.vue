<template>
  <div id="app">
    <navbar></navbar>
    <div class="content">
      <div class="left">
        <div class="list-header">
            <p>用户列表</p>
        </div>
        <user-list></user-list>
      </div>
      <div class="fix-right">
        <div class="right">
          <talk-window></talk-window>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar'
import userList from './components/user'
import talkWindow from "./components/talkWindow"
export default {
  name: 'app',
  components: {
    navbar,
    userList,
    talkWindow
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
}

.content {
  margin: 3.5em 1em 1em 1em;
  text-align:  left;
  border: 1px solid rgba(0, 0, 0, 0.25);
  height: 32em;
  overflow: hidden;
  background-color: #fff;
}

.right-fix {
  width: 100%;
  float: right;
  margin-right: 20%;
  
}

.right {
  margin-left: 20%;
  background-color: #fff;
  text-align: center;
  vertical-align: middle;
}

.right p {
  width: 100%;
  line-height: 2.5em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  margin: 0;
}


.left {
  height: 32em;
  width: 20%;
  border: 0px solid rgba(0, 0, 0, 0.25);
  border-right-width: 1px;
  background: #f9f7f6;
  float: left;
}
.list-header {
  text-align: center;
  padding: 9.5px 0px;
  border: 0px solid rgba(0, 0, 0, 0.12);
  border-bottom-width: 1px;
  color: rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.12)
}
.list-header p {
    display: inline;
}
</style>
