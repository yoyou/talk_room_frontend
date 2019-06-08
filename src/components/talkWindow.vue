<template>
    <div class="board">
        <p>社区发言板</p>
          <div class="talkLog">
              <div class="logwin">
                  <lang-cell v-for="(o, index) in history" 
                  :dir="o.dir"
                  :name='o.name'
                  :content="o.str"
                  :key="index"></lang-cell>
              </div>
          </div>
          <div class="toolbar"></div>
          <div class="writeBoard">
            <textarea name="" id="text" cols="30" rows="10" ref="text" v-model="content" @keyup.enter="sendMessage"></textarea>
          </div>
          <div class="button" @click="sendMessage" >
              <p>发送</p>
          </div>
    </div>
</template>

<script>
    import langCell from "./langCell.vue"
    export default {
        data () {
            return {
                content: "",
                history: [
                ]
            }
        },
        components: {
            langCell
        },
        created () {
            this.$store.getters.on ('message', (o) => {
                this.$set(this.history, this.history.length, 
                {
                  dir: false,
                  str: o.message,
                  name: o.name
                })
            })
        },
        methods: {
          sendMessage() {
              if(this.content == '\n') {
                  alert("发送消息不能为空");
                  this.content = '';
                  return;
              }
              this.$set(this.history, this.history.length, 
              {
                  dir: true,
                  str: this.content
              })
              this.$store.getters.emit('send', {
                  message: this.content
              })
              this.content = "";
          }
        },
    }
</script>

<style scoped>
    .board {
        overflow:hidden
    }

    .toolbar {
        height: 4vh;
        border-width: 1px 0px;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.25);
    }
    .talkLog {
        height: 50vh;
    }

    .talkLog .logwin {
        border: 1px;
        height: 48vh;
        margin: 10px auto;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        width: 98%;
        overflow-y: scroll;
        overflow-x: hidden
    }

    .writeBoard {
        width: 100%;
    }

    .writeBoard textarea {
        box-sizing: border-box;
        width: 100%;
        height: 15vh;
    }

    .button {
        background: #6D7ADA;
        display: inline-block;
        box-sizing: border-box;
        padding: 5px 10px;
        float: right;
        margin-right: 1em;
    }

    .button p {
        display: inline-block;
        box-sizing: border-box;
        line-height: 1em;
        font-size: 13px;
        color: #fff;
    }
</style>
