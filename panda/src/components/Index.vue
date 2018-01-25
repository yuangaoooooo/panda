<template>
    <div class="index">
        <!-- 轮播图 -->
        <Swiper></Swiper>
        <!-- 热门 -->
        <div class="ge"></div>
        <Hot></Hot>
      
    </div>
</template>

<script>
    
    import Swiper from './Swiper.vue'
    import Hot from './Hot.vue'
    
    export default {
        name:'index',
        components:{
            Swiper,
            Hot
        },
        data(){
            return {
                
            }
        },
        methods:{
            
        },
        mounted () {
            
           

        }

    }
</script>

<style scoped>
.ge{
    width: 100%;
    height: 3vw;
    background-color: #f2f2f2;
}

</style>