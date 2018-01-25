<template>
    <div class="nav">
        <transition name="tab">
            <tab v-show="show"  class="tab-1">
                
                <tab-item class="li"  style="font-size: 3.5vw;line-height:10vw;">
                    <router-link :to="/games/+item.ename+'/'+item.cname" 
                    v-for="(item,index) in sortlist" :key="item.ename"
                    >{{item.cname}}</router-link></tab-item>
                
                <div class="icon"><router-link to="/youxi/sort"><span class="fa fa-navicon"></span></router-link></span></div>
            </tab>
            
        </transition>
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import {Tab,TabItem} from 'vux'
    export default {
        name:'youxi',
        data(){
            return {
            show:true,
            animateType:'none',
            sortlist:[]
            }
        },
        components: {
            Tab,TabItem
        },
        mounted () {
            
            this.http.get('/panda/index.php?method=category.list&type=game').then(res=>{
            // console.log(res.data.data[0].items);
            // this.hot0 = res.data.data[0].items;
            console.log(res.data.data);
            console.log(res.data.data[0].extra.slice(9,63));
            this.sortlist = res.data.data;    

            
	
            })
        },
        watch:{
            // 监听路由的变化
            $route(to,from){
            //console.log(to);
            //console.log(from);
            var toLevel = to.path.split('/').length;
            var fromLevel = from.path.split('/').length;
            //console.log('toLevel='+toLevel);
            //console.log('fromLevel='+fromLevel);
            if (toLevel==fromLevel) {
                // 平级切换
                this.animateType = 'level'
            }else if (toLevel>fromLevel) {
                // 进入下一级页面
                this.animateType = 'in'
            }else{
                // 返回上一页
                this.animateType = 'out'
            }
            console.log(this.animateType);
            // 控制tabbar显示
            if (toLevel>2) {
                this.show = false;
            }else{
                this.show = true;
            }
      
            }
        }
    }
</script>

<style scoped>
.nav{
    width: 100%;
}
.tab-1{
    background-color: #f2f2f2;
    width: 100%;
    height: 10vw;
    overflow: hidden;
    
}
.li a{ 
    margin: 0 3.2vw;
}

.icon{
    font-size: 3.5vw;
    line-height:10vw;
    width:9vw;
    color: #7e7a7a;
    margin-left: 3vw;
}
a{
    text-decoration: none;
}
.vux-tab-item{
    line-height: 10vw;
}
</style>