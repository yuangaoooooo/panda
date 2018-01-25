<template>
    <div>
       
        
        <div class="xmxxlist" v-for="i in xmxxlist">
            <img :src="i.pictures.img" alt="">
            <p class="jianjie">{{i.name}}</p>
            <p>{{i.userinfo.nickName}}
                <span class="right">
                    <span class="fa fa-user-o"></span> 
                    <span>{{i.person_num | number}}</span>
                </span>
            </p>
        </div>
        
    </div>
</template>

<script>
    import Ylnav from './Ylnav.vue'
    import Vue from 'vue'
    Vue.filter('number',value=>{
        if (value > 10000) {
            return (value/10000).toFixed(2)+"万";
        }else{
            return value;
        }
    })
    export default {
        name:'wzry',
        components: {
            Ylnav
        },
        data () {
          return {
            xmxxlist:[],
             
          }
        },
        mounted () {
            
            this.http.get('/panda/ajax_get_live_list_by_cate?pageno=1&pagenum=10&__plat=h5&cate=yzdr').then(res=>{
            console.log(res.data.data.items);
            this.xmxxlist = res.data.data.items;

            })
        }
    }
</script>

<style scoped>

.xmxxlist{
    width: 45%;
    height:25vw;
    float: left;
    margin: 2vw;
    position: relative;
    font-size: 3vw;
}
.xmxxlist img{
    width: 100%;
    height:20vw;
    border-radius: 1vw;
    
}
.cname{
    position: absolute;
    top:0;
    left:17vw;
    background-color: rgb(28, 211, 155);
    color: white;
}
.jianjie{
    position: absolute;
    left: 0;
    bottom: 5vw;
    background-color: rgba(0, 0, 0, 0.815);
    opacity: 0.5;
    color: rgb(255, 255, 255);
    height: 5.5vw;
    line-height: 5.5vw;
    width: 100%;
    overflow: hidden;
}
.xmxxlist p{
    margin: 0;
    padding: 0;
    
}
.right{
    float:right;
}
</style>