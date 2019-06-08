<template>
    <div class= "user-list">
        <div class="user-cell" v-for="(o, index) in userList" :key='index'>
            <img src="../assets/2.png">
            <p>{{o.name}}</p>
            <span class="status" :style="{
                'border-color': o.online? '#00B570': '#555'
                }"></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userList: [
            ]
        }
    },
    created () {
        this.$store.getters.on('online', (user) => {
            /*eslint-disable*/
            console.log('上线： ' + user.name, user.id);
            var index = this.userList.findIndex((cur, index) => {
                if (cur.name == user.name) {
                    return true;
                }
                return false;
            })
            if (index == -1) {
                this.$set(this.userList, this.userList.length, {
                    id: user.id,
                    ph: '../assets/2.png',
                    name: user.name,
                    online: true
                })
            }else {
                this.userList[index].online = true;
            }
        })
        this.$store.getters.on('offLine', (socket) => {
            this.userList.find((o) => {
                if (o.id == socket.id){
                    /*eslint-disable*/
                    console.log(o.name + '下线')
                    o.online = false;
                }
            })
        })
    },

    props: {
    },
    methods: {
        add(o) {
            if (o.name != undefined) {
                this.$set(this.userList, this.userList.length, o);
            }
        }
    }
}
</script>

<style scoped>
    .user-list {
        width: 100%;
        height: 28em;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .user-cell {
        color: #404d5b;
        padding: 15px;
        vertical-align: middle;
        overflow: hidden;
        position: relative;
    }

    .user-cell img,p {
        display: inline-block;
    }

    .user-cell img {
        width: 32px;
        height:32px;
        float: left;
    }

    .user-cell p {
        margin: 0;
        padding-left: 1.2em;
        line-height: 32px;
        float: left;
    }

    .user-cell .status {
        width: 4px;
        height: 4px;
        vertical-align: middle;
        border-radius: 50%;
        display: table-cell;
        border: 2px solid #00B570;
        float: right;
        position: relative;
        top: 0.7em;
    }
</style>
