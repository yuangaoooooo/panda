<template>
  <tab-item id="app">
    <!-- 侧滑菜单 -->
    <side-menu v-show="show1" ></side-menu>
    
    <transition name="side-menu">
        <tab v-show="show"  class="tab" custom-bar-width="15vw">
          <tab-item disabled class="img"><img class="logo" @click="showSideMenu" src="./assets/panda-logo.png" alt=""></tab-item >
          <tab-item  selected style="font-size: 4vw;line-height:12vw;"><router-link to="/index">首页</router-link></tab-item>
          <tab-item  style="font-size: 4vw; line-height:12vw;"><router-link to="/youxi">游戏</router-link></tab-item>
          <tab-item  style="font-size: 4vw;line-height:12vw;"><router-link to="/yule">娱乐</router-link></tab-item>
          <tab-item disabled style="font-size: 4vw;line-height:12vw;" class="sarch"><router-link to="/index/download"><span class="fa fa-search"></span></router-link></tab-item >
        </tab>
    </transition>
    
    <transition :name="animateType">
      <router-view></router-view>
    </transition>
  </tab-item>
</template>

<script>
  import {Tab,TabItem} from 'vux'
  import bus from './bus.js'
  import SideMenu from './components/SideMenu.vue'
export default {
  name: 'app',
  data(){
    return {
      show:true,
      show1:false,
      animateType:'none'
    }
  },
 
  methods:{
      showSideMenu(){
          console.log('展示侧滑菜单');
          this.show1 = true;
      },
      
  },
  created(){
    
    bus.$on('hidemenu',()=>{
      this.show1 = false;
    })
  },
  components: {
    Tab,TabItem,SideMenu
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

<style lang="less" scoped>
@import '~vux/src/styles/reset.less';
#app{
  width: 100%;
  
}
body {
  background-color: #ffffff;
  
}
.tab{
  z-index: 888;
}
.img{
  width: 15%;
  padding: 1vw;
  float: left;
  height: 12vw;
  border-bottom: 1px solid #ebebeb; 
  box-sizing: border-box;
}
.logo{
  width: 100%;
  height: 90%;
}
.tab{
  width: 100%;
  float: left;
  height: 12vw;
}

.sarch{
  width: 15%;
  font-size: 4vw;
  float: left;
  height: 12vw;
  text-align: center;
  line-height: 12vw;
  color: 7e7a7a;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
  border-bottom: 1px solid #ebebeb; 
  box-sizing: border-box;

}

/* 平级切换 */
.level-enter, .level-leave{
  position: absolute;
}
/* 出去 */
.out-enter{
  transform: translateX(-100%);
}
.out-leave-to{
  transform: translateX(100%)
}
.out-enter-active, .out-leave-active{
  transition: all 1s;
  position: absolute;
}
/* 进入 */
.in-enter{
  transform: translateX(100%);
}
.in-leave-to{
  transform: translateX(-100%);
}
.in-enter-active, .in-leave-active{
  transition: all 1s;
  position: absolute;
}
/* tabbar 动画 */
.tabbar-enter, .tabbar-leave-to{
  transform: translateX(-100%);
}
.tabbar-enter-active, .tabbar-leave-active{
  transition: all 1s;
  /* position: absolute; */
}

/* 侧边栏的过渡 */
.side-menu-enter,
.side-menu-leave-to{
  transform: translateX(-100vw);
}
.side-menu-enter-active,
.side-menu-leave-active{
  transition: all 0.5s;
}
</style>
