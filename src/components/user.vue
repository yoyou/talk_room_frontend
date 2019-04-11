<template>
    <div class= "user-list">
        <div class="user-cell">
            <img src="../assets/2.png">
            <p>用户1</p>
            <span class="status"></span>
        </div>
        
        <div class="user-cell">
            <img src="../assets/2.png">
            <p>用户1</p>
            <span class="status"></span>
        </div>
        
        <div class="user-cell">
            <img src="../assets/2.png">
            <p>用户1</p>
            <span class="status"></span>
        </div>
        
        <div class="user-cell">
            <img src="../assets/2.png">
            <p>用户1</p>
            <span class="status"></span>
        </div>
                <div class="user-cell">
            <img src="../assets/2.png">
            <p>用户1</p>
            <span class="status"></span>
        </div>
        
        <div class="user-cell">
            <img src="../assets/2.png">
            <p>用户1</p>
            <span class="status"></span>
        </div>
                <div class="user-cell">
            <img src="../assets/2.png">
            <p>用户1</p>
            <span class="status"></span>
        </div>
        
        <div class="user-cell">
            <img src="../assets/2.png">
            <p>用户1</p>
            <span class="status"></span>
        </div>
    </div>
</template>

<script>
export default {
    
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
