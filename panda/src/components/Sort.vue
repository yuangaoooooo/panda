<template>
    <div class="sort">
       
        <nav class="sortnav">
            <span class="fa fa-chevron-left left" @click="$router.back()"></span>
            游戏分类
        </nav>
        <div class="yxlist" v-for="(item,index) in sortlist" :key="item.ename">
            <router-link :to="/games/+item.ename+'/'+item.cname"
             >
                <img :src="item.extra.slice(9,63)" alt="" class="yximg">
                <p class="yxname">{{item.cname}}</p>
            </router-link>
            
        </div>
    </div>
</template>

<script>
    export default {
        name:'sort',
        data () {
          return {
            sortlist:[],
            
             
          }
        },
        methods:{
            
        },
        mounted () {
            
            this.http.get('/panda/index.php?method=category.list&type=game').then(res=>{
            // console.log(res.data.data[0].items);
            // this.hot0 = res.data.data[0].items;
            console.log(res.data.data);
            console.log(res.data.data[0].extra.slice(9,63));
            this.sortlist = res.data.data;    

            
	
            })
        }
    }
</script>

<style scoped>
a{
    text-decoration: none;
}
.sortnav{
    height: 12vw;
    text-align: center;
    font-size: 4vw;
    line-height: 12vw;
    border-bottom: 1px solid #ebebeb; 
    z-index: 999;
}
.left{
    float:left;
    padding-left: 4vw;
    line-height: 12vw;
    
}
.ge{
    width: 100%;
    height: 4vw;
    background-color: #f2f2f2;
}
.yxlist{
    text-align: center;
    float: left;
}
.yximg{
    width: 18vw;
    height: 18vw;
    margin: 3vw;
    border-radius: 3vw;
}
.yxname{
    padding: 0;
    margin: 0;
    font-size: 4vw;
}
</style>