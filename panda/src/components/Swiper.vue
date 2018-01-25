<template>
        <div class="swiper">
          
            <swiper auto dots-position="center" height="40vw">
                <swiper-item class="black"  v-for="i in swp">
                    <img class="title fadeInUp animated" :src="i.newimg" alt=""></img>
                </swiper-item>     
            </swiper>
        </div>
      </template>
      
      <script>
      import { Swiper, SwiperItem, XButton, Divider } from 'vux'
           
      export default {
        components: {
          Swiper,
          SwiperItem,
          XButton,
          Divider
        },
        ready () {
      
        },
        methods: {
          
          
        },
        data () {
          return {
            swp:[],
             
          }
        },
        mounted () {
            // console.log('轮播');
            this.http.get('/panda/ajax_rmd_ads_get?__plat=h5').then(res=>{
            console.log(res.data.data);
            this.swp = res.data.data;

            })
        }
      }
      </script>
      
      <style scoped>
        .swiper{
          padding-top: 12vw;
        }
      .copyright {
        font-size: 12px;
        color: #ccc;
        text-align: center;
      }
      .text-scroll {
        border: 1px solid #ddd;
        border-left: none;
        border-right: none;
      }
      .text-scroll p{
        font-size: 12px;
        text-align: center;
        line-height: 30px;
      }
      .black {
        background-color: #000;
      }
      .black img{
          width: 100%;
          height: 45vw;
      }
      .title{
        line-height: 100px;
        text-align: center;
        color: #fff;
      }
      .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
      }
      .vux-indicator.custom-bottom {
        bottom: 30px;
      }
      @-webkit-keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translate3d(0, 100%, 0);
        }
        100% {
          opacity: 1;
          transform: none;
        }
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translate3d(0, 100%, 0);
        }
        100% {
          opacity: 1;
          transform: none;
        }
      }
      .fadeInUp {
        animation-name: fadeInUp;
      }
      .swiper-demo-img img {
        width: 100%;
      }
      </style>
      