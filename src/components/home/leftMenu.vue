<script setup>
import routes from '../../routes'
</script>

<template>
  <div class="leftMenu">
    <el-menu background-color="#434a50" active-text-color="#ffd04b" text-color="#fff">
      <template v-for="route in routes">
        <template v-if="!route.meta?.isPage">
          <el-menu-item :index="route.path" v-if="!route.children">
            <template #title>
              <el-icon>
              </el-icon>
              <span>{{ route.name }}</span>
            </template></el-menu-item>
          <el-sub-menu  :index="route.path" v-else>
            <template #title>
              <el-icon>
              </el-icon>
              <span>{{ route.name }}</span>
            </template>
            <el-menu-item style="background: #545c64;" v-for="cRoute in  route.children" :index="cRoute.path">{{ cRoute.name }}</el-menu-item>
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
.el-aside::-webkit-scrollbar{
  width: 8px;
}
.el-aside::-webkit-scrollbar-track{ 
  background: #f1f1f1;
}

.el-aside::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.el-aside::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.el-menu-item {
  text-align: center;
}
</style>