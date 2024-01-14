<script setup>
import { ref } from "vue";

const { route } = defineProps({
  route: {
    type: Object,
    required: true,
  },
});

const onlyOneChild = ref(null);

function onlyShowOneItem(children = [], parent) {
  const showingChildren = children.filter((item) => {
    onlyOneChild.value = item;
    return true;
  });

  if (showingChildren.length === 1) {
    return true;
  }

  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent };
    return true;
  }

  return false;
}
</script>

<template>
  <template v-if="!route.hidden">
    <template v-if="onlyShowOneItem(route.children, route)">
      <router-link :to="onlyOneChild.path">
        <el-menu-item :index="onlyOneChild.path">
          {{ onlyOneChild.meta?.title || onlyOneChild.name }}
        </el-menu-item>
      </router-link>
    </template>
    <el-sub-menu :index="route.path" v-else>
      <template #title>
        <span>{{ route.meta?.title || onlyOneChild.name }}</span>
      </template>
      <SidebarItem
        v-for="child in route.children" 
        :key="child.path"
        :route="child"
      />
    </el-sub-menu>
  </template>
</template>

<style scoped>

</style>