<script setup>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar/index.vue";
import Main from "./components/Main.vue";
</script>

<template>
  <div class="layout">
    <div>
      <Sidebar />
    </div>
    <div>
      <Navbar></Navbar>
      <Main />
    </div>
  </div>
</template>

<style>
.layout {
  display: grid;
  grid-template-columns: 210px 1fr;
  height: 100%;
}
</style>