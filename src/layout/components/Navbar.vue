<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route);
</script>

<template>
  <div class="navbar">
    <div>
      {{ route.meta.title }}
    </div>
    <div>
      <el-button type="text"> 退出登录 </el-button>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: var(--textGrey);
  padding: 0 10px;
  height: var(--navBarHeight);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>