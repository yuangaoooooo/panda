<template>
        <div>
            
            <nav class="sortnav">
                    <span class="fa fa-chevron-left left" @click="$router.back()"></span>
                    {{this.$route.params.cname}}
            </nav>
            
            <div class="roomlist" v-for="item in roomlist">
                <img :src="item.pictures.img" alt="">
                <p class="jianjie">{{item.name}}</p>
                <p>{{item.userinfo.nickName}}
                    <span class="right">
                        <span class="fa fa-user-o"></span> 
                        <span>{{item.person_num | number}}</span>
                    </span>
                </p>
            </div>
            <div  class="load-more">
                    <span class="fa fa-spinner fa-pulse fa-2x fa-fw"></span>
                    正在加载更多
            </div>
        </div>
    </template>
    
    <script>
        import Yxnav from './Yxnav.vue'
        import Vue from 'vue'
        Vue.filter('number',value=>{
            if (value > 10000) {
                return (value/10000).toFixed(2)+"万";
            }else{
                return value;

            }
        })
        export default {
            name:'roomlist',
            components: {
                Yxnav
            },
            data () {
              return {
                roomlist:[],
                isLoading: false
                 
              }
            },
            methods: {
                // 当页面发生滚动时调用的函数
                didScroll(){
                    var bodyH = document.body.clientHeight;//页面的总高度
                    var scrollTop = document.scrollingElement.scrollTop;//页面滚动时被卷去的高度
                    var windowH = document.documentElement.clientHeight;//可视页面的高度
                    if (windowH+scrollTop >= bodyH-10) {
                        console.log('加载更多');
                        if (!this.isLoading) {
                            console.log('123');
                            
                            this.loadMore();
                        }
                    }
                },
                loadMore(){
                    console.log('4');
                    
                    this.isLoading = true;
                    this.http.get('panda/ajax_get_live_list_by_cate?pageno=1&pagenum=10&__plat=h5&cate='+this.$route.params.ename,{
                        params:{offset:this.roomlist.length/10}

                    })
                    .then(res=>{
                        // if (res.data.error == 0) {
                            console.log('5');
                            
                            this.roomlist = this.roomlist.concat(res.data.data.items);
                            console.log(this.roomlist);
                            
                        // }
                        this.isLoading = false;
                    },err=>{
                        this.isLoading = false;   
                    }) 
                }
            },
            mounted () {
                window.onscroll = this.didScroll;
                this.http.get('/panda/ajax_get_live_list_by_cate?pageno=1&pagenum=10&__plat=h5&cate='+this.$route.params.ename).then(res=>{
                console.log(res.data.data.items);
                this.roomlist = res.data.data.items;
    
                })
            }
        }
    </script>
    
    <style scoped>
    
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
    .load-more{
    width: 100%;
    text-align: center;
    font-size: 3vw;
    }
    </style>