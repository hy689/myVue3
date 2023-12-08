<script setup>
import routes from '../../routes'
</script>

<template>
  <div class="leftMenu">
    <el-menu background-color="#545c64" active-text-color="#ffd04b" text-color="#fff">
      <template v-for="route in routes">
        <template v-if="!route.meta?.isPage">
          <el-menu-item :index="route.path" v-if="!route.children">
            <template #title>
              <el-icon>
              </el-icon>
              <span>{{ route.name }}</span>
            </template></el-menu-item>
          <el-sub-menu :index="route.path" v-else>
            <template #title>
              <el-icon>
              </el-icon>
              <span>{{ route.name }}</span>
            </template>
            <el-menu-item v-for="cRoute in  route.children" :index="cRoute.path">{{ cRoute.name }}</el-menu-item>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<style>
.leftMenu {
  background: #ccc;
}

.el-menu-item {
  text-align: center;
}
</style>