<template>
    <div class="side-menu" @click="hideSideMenu">
        <!-- 遮罩层 -->
        <div class="overlay"></div>
        <div class="user">
            <div class="img"></div>
            <div class="xx">
                <p><a href="#">登录</a></p>
                <p><a href="">注册</a></p>
            </div>
        </div>
        <ul>
            <li>
                <router-link to="/index">首页<i class="fa fa-angle-right"></i></router-link>
                
            </li>
            <li>
                <router-link to="/youxi/sort">全部分类<i class="fa fa-angle-right"></i></router-link>
            </li>
            
            
        </ul>
        
    </div>
</template>

<script>
    import bus from '../bus.js'
    export default {
        name :'side-menu',
        methods:{
            hideSideMenu(){
                bus.$emit('hidemenu');
            }
        }
    }
</script>

<style scoped>
.overlay{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
}
.side-menu{
    width: 100vw;
    height:100%;
    position: fixed;
    top: 12vw;
    left: 0;
    z-index: 999;
    font-size: 4vw;
}
.user{
    width: 50%;
    height: 24vw;
    background-color: white;
    position: absolute;
    top: 1vw;
}
.user .img{
    width: 45%;
    background-color: green;
    height: 100%;
    float: left;
    border-radius: 50%;
}
.user .xx{
    width: 55%;
    height: 100%;
    float: left;
    

}
.xx p {
    border: 2px solid green;
    font-size: 3vw;
    width: 60%;
    text-align: center;
    margin-left: 20%;
    height: 5vw;
    line-height: 5vw;
}
ul{
    width: 50%;
    height: 100%;
    background-color: white;
    position: absolute;
    top: 25vw;
    list-style: none;
    padding: 0;
    
}
li{
    height: 12vw;
    line-height:12vw;
    border-bottom:1px solid #999;
    padding-left: 5vw;
}
a{
    text-decoration: none;
}
i{
    float: right;
    line-height:12vw;
    padding-right: 5vw;
}
</style>