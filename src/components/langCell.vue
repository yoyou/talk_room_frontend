<template>
    <div class="langCell">
        <div class="ph" :class=" dir ? 'lang-right': 'lang-left'">
            <img src="../assets/2.png" alt="">
        </div>
        <p v-if="!dir" class="name">{{name}}</p>
        <div class="lang" :class=" dir ? 'lang-right': 'lang-left'"
            :style="{
                'backgroundColor': dir ? 'yellow': 'rgba(0, 0, 0, 0.15)'
            }"
        >
            
            <p class="message">{{ content }}</p>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
        }
    },
    props: {
        dir: {
            type: Boolean ,
            default: false
        },
        content: {
            type: String
        },
        name: {
            type: String
        }
    }
}
</script>

<style scoped>
    .langCell {
        width: 98%;
        text-align: left;
        padding: 10px;
        line-height: 1.7em;
        overflow: hidden;
    }

    .lang {
        background-color: rgba(0, 0, 0, 0.15);
        font-size: 10px;
        box-sizing: border-box;
        padding: 0px 15px;
        border: 0px;
        border-radius: 3px;
        overflow: hidden;
        display: inline-block;
    }

    .lang .message {
        border: 0;
        max-width: 20em;
        word-wrap: break-word;
    }

    .name {
        border: 0;
        font-size: 10px;
        color: rgba(0, 0, 0, 0.35);
        line-height: 1em;
        background-color: #fff
    }

    .ph {
        display: inline-block;
        float: left;
        margin: 0 10px;
    }

    .lang-right {
        float: right;
    }

    .lang-left {
        float: left;
    }

    .ph img {
        width: 26px;
        height: 26px;
    }
</style>
