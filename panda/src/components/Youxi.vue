<template>
    <div class="youxi">
        <Yxnav></Yxnav>
        
        <Wzry></Wzry>
    </div>
</template>

<script>
    import Yxnav from './Yxnav.vue'
    import Roomlist from './Roomlist.vue'
    import Wzry from './Wzry.vue'
    export default {
        name:'youxi',
        components:{
            Yxnav,Roomlist,Wzry
        }
    }
    
</script>

<style scoped>
.youxi{
    width: 100%;
    padding: 10vw 0;
}

</style>