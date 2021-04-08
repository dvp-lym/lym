<template>
     <div class="top_ion">
        <span class="top_lunb">本周精选</span>
        <div class="top_show">
          <span>模块状态:</span>
          <el-radio v-model="radio" label="1">显示</el-radio>
          <el-radio v-model="radio" label="2">隐藏</el-radio>
        </div>
        <div class="history_to" @click="route(history())">历史数据></div>
        <div class="top-module">模块标题:XXX</div>
        <div class="pdt">生产数据:</div>
        <div>
          <el-row class="el-rows" :gutter="20">
            <el-col :span="2"><div class="grid-content">编号</div></el-col>
            <el-col :span="4"><div class="grid-content">活动标题</div></el-col>
            <el-col :span="4"><div class="grid-content">图片</div></el-col>
            <el-col :span="2"><div class="grid-content">格式</div></el-col>
            <el-col :span="4"><div class="grid-content">连接地址</div></el-col>
            <el-col :span="4"><div class="grid-content">生效时间</div></el-col>
            <el-col :span="4"><div class="grid-content">操作</div></el-col>
          </el-row>
          <el-row :gutter="20"  class="mde">
            <el-col :span="2"><div class="g-purple">1</div></el-col>
            <el-col :span="4"><div class="g-purple">专属管家，阳刚惠生活</div></el-col>
            <el-col :span="4">
              <div class="g-purple">
                <img src="../assets/好图.jpeg" alt="" class="picture">
              </div>
            </el-col>
            <el-col :span="2"><div class="g-purple">JPG</div></el-col>
            <el-col :span="4"><div class="g-purple g-purple-URL">http://www.baidu.com?id=1$type=on1233212111111124</div></el-col>
            <el-col :span="4"><div class="g-purple">2021.2.28~2021.2.28</div></el-col>
            <el-col :span="4">
              <div class="g-purple">
                <el-button  @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button  @click="handleClick(scope.row)" type="text" size="small">排期</el-button>
                <el-button class="g-but" @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20"  class="mde">
            <el-col :span="2"><div class="g-purple">2</div></el-col>
            <el-col :span="4"><div class="g-purple">专属管家，阳刚惠生活</div></el-col>
            <el-col :span="4">
              <div class="g-purple">
                <img src="../assets/好图.jpeg" alt="" class="picture">
              </div>
            </el-col>
            <el-col :span="2"><div class="g-purple">JPG</div></el-col>
            <el-col :span="4"><div class="g-purple g-purple-URL">http://www.baidu.com?id=1$type=on1233212111111124</div></el-col>
            <el-col :span="4"><div class="g-purple">2021.2.28~2021.2.28</div></el-col>
            <el-col :span="4">
              <div class="g-purple">
                <el-button  @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button  @click="handleClick(scope.row)" type="text" size="small">排期</el-button>
                <el-button class="g-but" @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20"  class="mde">
            <el-col :span="2"><div class="g-purple">3</div></el-col>
            <el-col :span="4"><div class="g-purple">专属管家，阳刚惠生活</div></el-col>
            <el-col :span="4">
              <div class="g-purple">
                <img src="../assets/好图.jpeg" alt="" class="picture">
              </div>
            </el-col>
            <el-col :span="2"><div class="g-purple">JPG</div></el-col>
            <el-col :span="4"><div class="g-purple g-purple-URL">http://www.baidu.com?id=1$type=on1233212111111124</div></el-col>
            <el-col :span="4"><div class="g-purple">2021.2.28~2021.2.28</div></el-col>
            <el-col :span="4">
              <div class="g-purple">
                <el-button  @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button  @click="handleClick(scope.row)" type="text" size="small">排期</el-button>
                <el-button class="g-but" @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
              </div>
            </el-col>
          </el-row>
        </div>






<div class="pdf">测试数据:</div>
        <div>
          <el-row :gutter="20"  class="mde">
            <el-col :span="2"><div class="g-purple">1</div></el-col>
            <el-col :span="4"><div class="g-purple">专属管家，阳刚惠生活</div></el-col>
            <el-col :span="4">
              <div class="g-purple">
                <img src="../assets/好图.jpeg" alt="" class="picture">
              </div>
            </el-col>
            <el-col :span="2"><div class="g-purple">JPG</div></el-col>
            <el-col :span="4"><div class="g-purple g-purple-URL">http://www.baidu.com?id=1$type=on1233212111111124</div></el-col>
            <el-col :span="4"><div class="g-purple">2021.2.28~2021.2.28</div></el-col>
            <el-col :span="4">
              <div class="g-purple">
                <el-button  @click="handleClick(scope.row)" type="text" size="small">生产同步</el-button>
                <el-button class="g-but" @click="handleClick(scope.row)" type="text" size="small">测试状态</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20"  class="mde">
            <el-col :span="2"><div class="g-purple">2</div></el-col>
            <el-col :span="4"><div class="g-purple">专属管家，阳刚惠生活</div></el-col>
            <el-col :span="4">
              <div class="g-purple">
                <img src="../assets/好图.jpeg" alt="" class="picture">
              </div>
            </el-col>
            <el-col :span="2"><div class="g-purple">JPG</div></el-col>
            <el-col :span="4"><div class="g-purple g-purple-URL">http://www.baidu.com?id=1$type=on1233212111111124</div></el-col>
            <el-col :span="4"><div class="g-purple">2021.2.28~2021.2.28</div></el-col>
            <el-col :span="4">
              <div class="g-purple">
                <el-button  @click="handleClick(scope.row)" type="text" size="small">生产同步</el-button>
                <el-button class="g-but" @click="handleClick(scope.row)" type="text" size="small">测试状态</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20"  class="mde">
            <el-col :span="2"><div class="g-purple">3</div></el-col>
            <el-col :span="4"><div class="g-purple">专属管家，阳刚惠生活</div></el-col>
            <el-col :span="4">
              <div class="g-purple">
                <img src="../assets/好图.jpeg" alt="" class="picture">
              </div>
            </el-col>
            <el-col :span="2"><div class="g-purple">JPG</div></el-col>
            <el-col :span="4"><div class="g-purple g-purple-URL">http://www.baidu.com?id=1$type=on1233212111111124</div></el-col>
            <el-col :span="4"><div class="g-purple">2021.2.28~2021.2.28</div></el-col>
            <el-col :span="4">
              <div class="g-purple">
                <el-button  @click="handleClick(scope.row)" type="text" size="small">生产同步</el-button>
                <el-button class="g-but" @click="handleClick(scope.row)" type="text" size="small">测试状态</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <el-row class="button--primary">
          <el-button height="20px" type="primary">撤回</el-button>
          <el-button height="20px" type="primary">提交</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Omnibus',
  components: {
  },
  data () {
    return {
      radio: '1'
    }
  },
  methods: {
    history() {
    }
  },
}
</script>

<style scoped>
body {
  background-color: #f0f2f5;
}
.el-button--primary {
  width: 90px;
  margin: 205px 130px 0 130px!important;
}
</style>
