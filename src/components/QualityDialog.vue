<template>
    <el-dialog
      :title="text"
      :visible.sync="visible"
      :close-on-click-modal="false"
      @close="QualityDialogClose"
      height="500px"
  >
    <div class="inp_describe">
      <span>轮播番号:</span>
      <el-input v-model="input" placeholder="请输入轮播番号" class="inp_text"></el-input>
    </div>
    <div class="inp_describe">
      <span>链接地址:</span>
      <el-input v-model="input" placeholder="请输入链接地址" class="inp_text_2"></el-input>
    </div>
    <div class="block inp_describe">
      <span class="demonstration">生效时间:</span>
      <el-date-picker
        v-model="value2"
        type="datetimerange"
        :picker-options="pickerOptions"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right">
      </el-date-picker>
    </div>
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      limit="1">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <span slot="footer" class="dialog-footer">
        <el-button @click="QualityDialogClose">取 消</el-button>
        <el-button type="primary" @click="QualityDialogClose">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
    name: "QualityDialog",
    components: {},
    props: {
        QualityDialogFlag: {
            default: false
        },
        text: {
            default: ''
        }
    },
    data() {
        return {
            input: '',
            value2: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
            visible: false,
            text:'',
            pickerOptions: {
              shortcuts: [{
                  text: '最近一周',
                  onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                  }
                }, {
                  text: '最近一个月',
                  onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                  }
                }, {
                  text: '最近三个月',
                  onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                  }
                }]
            },
        };
    },
    created() {},
    mounted() {},
    methods: {
        QualityDialogClose() {
            this.$emit("update:QualityDialogFlag", false);
        }
    },
    watch: {
        QualityDialogFlag() {
            this.visible = this.QualityDialogFlag;
            this.text = this.text;
        },
    }
};
</script>

<style scoped>
  .el-button--default,.el-button--primary {
    width: 110px!important;
    margin: 25px 120px 0 120px!important;
  }
  .inp_text {
    width: 200px!important;
    height: 30px;
  }
  .inp_text_2 {
    width: 450px!important;
    height: 30px;
  }
  .inp_describe {
    margin-bottom: 20px;
    font-weight: 600px;

  }
  .inp_describe > span {
    margin-right: 20px;
  }
</style>