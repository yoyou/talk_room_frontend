<template>
    <div class="login">
        <div class="login_layout">
            <div class="input-layout">
                <label for="account">账号</label>
                <input id="account" type="text">
                <label for="password">密码</label>
                <input id="password" type="password">
            </div>
            <div class="button-layout">
                <button @click="login">登录</button>
                <button @click="register">注册</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        components: {
        },
        methods: {
            login() {
                alert('登录');
            },
            register() {
                alert('注册');
            }
        }
    }
</script>

<style scoped>
    .login {
        width: 100%;
        height: 100%;
    }

    .login_layout {
        display: inline-block;
        width: 30%;
        position: relative;
        margin: auto;
        top: 50%;
        transform: translateY(-50%);
        background-color: #fff;
        vertical-align: middle;
        padding-top: 20px
    }

    .input-layout {
        display: inline-block;
        width: 40%;
        text-align: left;
    }

    .input-layout label {
        font-size: 0.5em;
        line-height: 2.2em;
    }

    .input-layout input {
        width: 100%;
        box-sizing: border-box;
        display: block;
    }

    .button-layout {
        margin: 1em 0;
    }
    
    .button-layout button {
        border-radius: 5px;
        background: #fff;
        border-style: solid;
    }

    .button-layout button:first-child {
        margin-right: 10px;
    }
    
</style>
