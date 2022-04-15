<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline-ex">
    <el-form-item>
      <el-input v-model="formInline.user" placeholder="请输入评论Id"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
      <el-button @click="back">返回帖子管理</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "CommonFormFive",
    data() {
      return {
        formInline: {
          user: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      back() {
          this.$router.push({ path: "/content" });
      }
    }
  }
</script>

<style lang="less">
    .demo-form-inline-ex {
        margin-left: 150px;
        margin-top: 40px;
    }
</style>