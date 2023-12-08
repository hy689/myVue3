<script setup>
import { ref } from 'vue'
import Component from './component.vue'

const dialogVisible = ref(false)
</script>

<template>
  <div class="div1">
    div1
    <div class="div2">
      div2
      <div class="div3">
        div3
        <Component />
        <el-input />
        <el-button @click="dialogVisible = true">按钮</el-button>
        <el-dialog class="dialog1" v-model="dialogVisible" :append-to-body="true" title="Tips" width="30%">
          <span>This is a message</span>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="dialogVisible = false">Cancel</el-button>
              <el-button type="primary" @click="dialogVisible = false">
                Confirm
              </el-button>
            </span>
          </template>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<style scoped>
.div1 {
  color: pink;
}

.div1 .div2 {
  color: red;
}

.div1 .div2 .div3 {
  color: green;
}

.div1 .div2 .div3 .div4 {
  color: blue;
}

.div1 .div2 .div3 .div4 ::v-deep .div5 {
  color: yellow;
}

.el-button {
  background-color: aqua;
}

.el-input {
  width: 200px !important;
}


</style>
<style>
.dialog1 .el-dialog__header {
  padding: 50px;
}
</style>
