<template>
    <div id="app">
      <el-container>
        <el-aside width="250px">
          <div class="center-log">
            <img class="logo" src="./assets/logo.png" alt="">
            <span>管理后台</span>
          </div>
          <el-collapse v-model="activeNames" @change="handleChange">
            <div class="icon-top">
              <i class="icon-xitong"></i>
              <el-collapse-item title="系统说明&权限管理" name="1">
              </el-collapse-item>
            </div>

            <div class="icon-top">
              <i class="icon-guanjia"></i>
              <el-collapse-item title="专属管家" name="2" class="collapse">
                  <ul class="paging">
                    <li @click="route('Slideshow')">轮播管理</li>
                    <li @click="route('Omnibus')">本周精选</li>
                    <li @click="route('Administrator')">视频管理</li>
                    <li @click="route('Special')">知识专题</li>
                    <li @click="route('Test')">项目提测</li>
                  </ul>
                </el-collapse-item>
            </div>

          </el-collapse>
        </el-aside>
          <el-main>
            <router-view/>
          </el-main>
      </el-container>
    </div>
</template>

<script>

import Slideshow from './views/Slideshow';
import Omnibus from './views/Omnibus';
import Administrator from './views/Administrator';
import Special from './views/Special';
import Test from './views/Test';
export default {
  name: 'App',
  components: {
    Omnibus,
    Slideshow,
    Administrator,
    Special,
    Test,
  },
   data() {
      return {
        activeNames: [''],
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      route(val) {
        switch (val) {
          case 'Omnibus':
              // 本周精选
              this.$router.push('Omnibus');
              break;
          case 'Slideshow':
              // 轮播管理
              this.$router.push('Slideshow');
              break;
          case 'Administrator':
              // 视频管理
              this.$router.push('Administrator');
              break;
          case 'Special':
              // 知识专题
              this.$router.push('Special');
              break;
          case 'Test':
              // 项目提测
              this.$router.push('Test');
              break;
        }
      }
    }
}
</script>

<style>
  html,body {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration:none; 
  }
  li {
    list-style:none;
  }
  #app,.el-container {
    height: 100%;

  }
  .el-aside {
    background-color: #002140;
  }
  .el-main {
    margin: 10px 70px 0 70px;
    /* line-height: 160px; */

  }
  .paging {
    padding: 0;
  }
  .paging >li {
    line-height: 50px;
    color:rgb(117, 117, 117); 
    padding: 0 0 0 20px;
  }
  .center-log {
    line-height: 30px;
    height: 65px;
    padding-left: 30px;
    color: #D3DCE6;
    background-color: #002140;
    display: flex;
  }
  .logo {
    width: 40px;
    margin: 10px;
    border-radius: 50%;
  }
  .center-log > span {
    align-self: center;
  }
  .el-collapse-item__header {
    background-color: rgb(2, 25, 46)!important;
    color: #999!important;
    border: 0px solid #000!important;
    padding: 0 0 0 43px;
  }
  .el-collapse-item__header:hover {
    background-color: rgb(25, 144, 255)!important;
  }
  .el-collapse {
    border: 0px solid #000!important;
  }
  .icon-top {
    position: relative;
  }
  .icon-xitong {
    position: absolute;
    left: 20px;
    top: 16px;
    color: #999;
  }
  .icon-guanjia {
    position: absolute;
    left: 20px;
    top: 16px;
    color: #999;

  }
  .el-collapse-item__wrap {
    background-color: rgb(0, 12, 23)!important;
    border-bottom: 0px!important;
  }
  .el-collapse-item__content >.paging> li:hover {
    background-color: rgb(25, 144, 255)!important;

  }
</style>
