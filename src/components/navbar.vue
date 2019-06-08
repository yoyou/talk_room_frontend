<template>
    <div class="navbar">
        <p class="title">聊天室</p>
        <p class="subtitle">
            <slot name="login"></slot>
            <slot name="room"></slot>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    .navbar {
        display: block;
        position: fixed;
        width: 100%;
        top: 0%;
        background-color: #fff;
        border-bottom: 1px;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
        text-align:  left;
        background: #6D7ADA;
        box-sizing: border-box;
        padding-right: 4em;
    }
    .title {
        display: inline-block;
        font-size: 20px;
        margin: 0.5em 0.5em 0.5em 2em;
        color:#fff;
    }

    .subtitle {
        display: inline-block;
        float: right;
    }
</style>
