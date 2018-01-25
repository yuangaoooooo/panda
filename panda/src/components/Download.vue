<template>
    <div>
        <img src="../assets/padan-download.png" alt="">
        <p class="p1"><a href="#">点击下载</a></p>
        <p class="p2"><a href="#">查看更多</a></p>
    </div>
</template>

<script>
    export default{

    }
</script>
<style scoped>
    div{
        border-bottom: 1px solid #f2f2f2;
    }
img{
    width: 100%;
    height: 80%;
}
p{
    text-align: center;
    font-size: 4vw;
}
.p1{
    margin: 0 auto;
    color: white;
    
    width: 80%;
    height: 10vw;
    line-height: 10vw;
    border: 1px green solid;
    border-radius: 5vw;
}
a{
    text-decoration: none;
}
</style>