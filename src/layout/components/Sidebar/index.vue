<script setup>
import SidebarItem from "./SidebarItem.vue";
import routes from "../../../routes";
</script>

<template>
  <div class="sidebar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="var(--menuBg)"
      text-color="var(--menuText)"
      active-text-color="var(--menuActiveText)"
    >
      <SidebarItem v-for="route in routes" :key="route.path" :route="route" />
    </el-menu>
  </el-scrollbar>
  </div>
</template>

<style scoped>
.sidebar {
  height: 100%;
  background: var(--menuBg);
}
::v-deep .el-menu-item:hover {
  background-color: var(--subMenuHover);
}
::v-deep .el-menu .el-menu--inline {
  background-color: var(--subMenuBg);
}
::v-deep .el-sub-menu__title:hover {
  background-color: var(--menuHover) !important;
}
</style>