<template>
     <div class="top_ion">
        <span class="top_lunb" >顶部轮播</span>
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
                <el-button  @click="QualityClick" type="text" size="small">编辑</el-button>
                <el-button   type="text" size="small">排期</el-button>
                <el-button class="g-but"  type="text" size="small">删除</el-button>
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
                <el-button   type="text" size="small">编辑</el-button>
                <el-button   type="text" size="small">排期</el-button>
                <el-button class="g-but"  type="text" size="small">删除</el-button>
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
                <el-button   type="text" size="small">编辑</el-button>
                <el-button   type="text" size="small">排期</el-button>
                <el-button class="g-but"  type="text" size="small">删除</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20"  class="mde">
            <el-col :span="2"><div class="g-purple">4</div></el-col>
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
                <el-button   type="text" size="small">编辑</el-button>
                <el-button   type="text" size="small">排期</el-button>
                <el-button class="g-but"  type="text" size="small">删除</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20"  class="mde">
            <el-col :span="2"><div class="g-purple">5</div></el-col>
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
                <el-button   type="text" size="small">编辑</el-button>
                <el-button   type="text" size="small">排期</el-button>
                <el-button class="g-but"  type="text" size="small">删除</el-button>
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
                <el-button   type="text" size="small">生产同步</el-button>
                <el-button class="g-but"  type="text" size="small">测试状态</el-button>
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
                <el-button   type="text" size="small">生产同步</el-button>
                <el-button class="g-but"  type="text" size="small">测试状态</el-button>
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
                <el-button   type="text" size="small">生产同步</el-button>
                <el-button class="g-but"  type="text" size="small">测试状态</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20"  class="mde">
            <el-col :span="2"><div class="g-purple">4</div></el-col>
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
                <el-button   type="text" size="small">生产同步</el-button>
                <el-button class="g-but"  type="text" size="small">测试状态</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20"  class="mde">
            <el-col :span="2"><div class="g-purple">5</div></el-col>
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
                <el-button   type="text" size="small">生产同步</el-button>
                <el-button class="g-but"  type="text" size="small">测试状态</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <el-row class="button--primary">
          <el-button height="20px" type="primary">撤回</el-button>
          <el-button height="20px" type="primary">提交</el-button>
        </el-row>
        <QualityDialog :QualityDialogFlag.sync="QualityDialogFlag" :text.sync="text"/>
    </div> 
</template>

<script>
import Omnibus from './Omnibus';

export default {
  name: 'Slideshow',
  components: {
    Omnibus,
    QualityDialog: ()=> import("../components/QualityDialog"),
  },
  data () {
    return {
      radio: '1',
      QualityDialogFlag: false,
      text:'顶部轮播',
    }
  },
  methods: {
    history() {
      this.$router.push('Omnibus');
    },
    QualityClick() {
      this.QualityDialogFlag = true;
      this.text = '顶部轮播';
    }
  },
}
</script>

<style >
  .top-module {
    font-size: 14px;
    font-weight: 600;
    position: absolute;
    top: 45px;
    left: 3px;
  }
  .top_lunb {
    text-align: center;
    width: 100%;
    display: block;
    font-weight: 600;
    font-size: 22px;
  }
  .top_ion {
    position: relative;
    
  }
  .top_ion > .top_show {
    position: absolute;
    top: 10px;
    right: 20px;
  }
  .top_ion > .top_show > span {
    margin-right: 10px;
  }
  .history_to {
    position: absolute;
    top:50px;
    right: 25px;
    font-size: 14px;
    cursor:pointer;
  }
  .pdt {
    position: absolute;
    top: 82px;
    font-size: 12px;
    font-weight: 600;
    margin-left:5px;
  }
  .pdf {
    margin:10px 0 0 5px;
    font-size: 12px;
    font-weight: 600;

  }
  .el-rows {
    margin:80px 0 0px 0;
    font-size: 14px;
  }
  .el-col {
    border-radius: 4px;
  }
  .g-purple {
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    height: 45px;
    line-height: 45px;
    overflow-y: hidden;
    word-wrap:break-word;
    box-sizing: content-box;
  }
  .g-purples {
    box-sizing: content-box;
    height: 45px;
  }
  .g-purple-URL {
    line-height: 20px;
  }
  .g-but {
    color: red!important;
    height: 40px!important;
  }
  .el-button--text {
    color: #555;
    font-size:13px;
    font-weight: 600;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
    line-height: 18px;
    font-weight: 600;
  }
  .row-bg {
    padding: 10px 0;
  }
  .mde {
    box-sizing: content-box;
  }
  .mde:nth-child(2) {
    background-color: rgba(216, 216, 216, 0.5);
  }
  .mde:nth-child(4) {
    background-color: rgba(216, 216, 216, 0.5);
  }
  .mde:nth-child(6) {
    background-color: rgba(216, 216, 216, 0.5);
  }
  .picture {
    width: 100px;
    height: 45px;
  }
  .button--primary {
    width: 100%;
    text-align: center;
  }
  .button-demo {
    width: 50px;
    height: 100%;
  }
  .el-button--primary {
    width: 90px;
    margin: 25px 130px 0 130px!important;
  }
</style>
