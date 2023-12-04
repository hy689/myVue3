<script setup>
import Header from '../components/home/header.vue'
import LeftMenu from '../components/home/leftMenu.vue'
import RightContent from '../components/home/rightContent.vue'

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header >
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside style="height: 100vh;background-color: #434a50;" width="200px">
          <LeftMenu></LeftMenu>
        </el-aside>
        <el-main>
          <RightContent></RightContent>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
  .el-header{
    padding: 0;
  }
</style>