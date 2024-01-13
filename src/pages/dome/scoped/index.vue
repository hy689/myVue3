<script setup>
import { ref } from 'vue'
const dialogVisible = ref(false)

</script>

<template>
 <div class="div1">
    <el-button @click="dialogVisible = true">按钮</el-button>
    <el-dialog class="dialog1" v-model="dialogVisible" title="Tips" width="30%">
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

</template>

<style >
 .dialog1 .el-dialog__header{
  background: green;
}
</style>


