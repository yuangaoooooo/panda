<template>
    <div class="hots" >
        <div v-for="(h,index) in hot" class="hot">
            <h2>- <span class="name">{{h.type.cname}}</span> -</h2>
            <div class="roomlists">
                    <div class="roomlist" v-for="i in hot[index].items">
                            <img :src="i.pictures.img" alt="">
                            <span class="cname">{{i.classification.cname}}</span>
                            <p class="jianjie">{{i.name}}</p>
                            <p>{{i.userinfo.nickName}}
                                <span class="right">
                                    <span class="fa fa-user-o"></span> 
                                    <span>{{i.person_num | number}}</span>
                                </span>
                            </p>
                        </div>
            </div>
            <p class="total">查看全部{{h.total}}个主播>></p>
            <div class="ge"></div>
        </div>
        
    </div>
</template>

<script>
    import Vue from 'vue'
    Vue.filter('number',value=>{
        if (value > 10000) {
            return (value/10000).toFixed(2)+"万";
        }else{
            return value;
        }
    })
    export default {
        name:'hot',
        methods: {
          
          
        },
        data () {
          return {
            hot:[],
            hot0:[],
             
          }
        },
        mounted () {
            // console.log('热门');
            this.http.get('/panda/ajax_get_live_list_by_multicate?hotroom=1&__plat=h5').then(res=>{
            // console.log(res.data.data[0].items);
            // this.hot0 = res.data.data[0].items;
            console.log(res.data.data);
            this.hot = res.data.data;    
            })
        }
    }

</script>

<style scoped>
.hot{
    margin-top: 3vw;
    width: 100%;
    
}
.hot h2{
    text-align: center;
    color: gray;
    margin: 0;
}
.name{
    font-size: 5vw;
}
.roomlists{
    width: 100%;
    height: 50vw;
}
.roomlist{
    width: 45%;
    height:25vw;
    float: left;
    margin: 2vw;
    position: relative;
    font-size: 3vw;
}
.roomlist img{
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
.roomlist p{
    margin: 0;
    padding: 0;
    
}
.right{
    float:right;
}
.total{
    width:100%;
    font-size: 3vw;
    text-align: center;
    color: rgb(28, 211, 155);
    clear:both;
    
}
.ge{
    width: 100%;
    height: 3vw;
    background-color: #f2f2f2;
}
</style>