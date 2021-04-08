<template>
  <div>
    <el-row class="button--primary">
      <el-button type="primary">提测</el-button>
      <el-button class="fabu">发布</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Test',

}
</script>

<style scoped>
  .fabu,.el-button--primary {
    width: 120px!important;
    margin: 25px 130px 0 130px!important;
  }

</style>
