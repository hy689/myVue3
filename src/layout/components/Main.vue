<script setup>
</script>

<template>
  <div class="main">
    <el-scrollbar>
      <router-view />
    </el-scrollbar>
  </div>
</template>

<style scoped>
.main {
  height: calc(100vh - var(--navBarHeight));
  overflow: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>