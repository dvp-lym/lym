<template>
  <el-card
    header="ele-form-image-uploader 演示"
    shadow="never"
    style="max-width: 1250px;margin: 20px auto;"
  >
    <ele-form
      v-model="formData"
      :form-desc="formDesc"
      :request-fn="handleRequest"
      @request-success="handleSuccess"
    />
  </el-card>
</template>

<script>
export default {
  name: 'Administrator',
    data () {
    return {
        formData: {},
        formDesc: {
            video: {
              label: '团队介绍',
              type: 'video-uploader',
              attrs: {
                  fileSize: 20,
                  action: 'https://jsonplaceholder.typicode.com/posts',
                  responseFn (response, file) {
                  return URL.createObjectURL(file.raw)
                  },
                   isShowTip: {
                    type: Boolean,
                    default: true
                  },
              }
            }
        }
        }
    },
  methods: {
    handleRequest (data) {
      console.log(data)
      return Promise.resolve()
    },
    handleSuccess () {
      this.$message.success('提交成功')
    }
  },
  mounted () {}
}
</script>

<style scoped>
body {
  background-color: #f0f2f5;
}
</style>
