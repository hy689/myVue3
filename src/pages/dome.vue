<script setup>
import { ref } from 'vue';
import DraggableList from '../components/draggableList.vue';

const list = ref([{ no: 1001, name: '小明' }, { no: 1002, name: ''}, { no: 1003, name: ''}]);
const columns = [
  {
    label: '编号',
    width: '240px'
  },
  {
    label: '姓名',
    width: '440px'
  }
]

function changeListOrder(n) {
  list.value = n
}
</script>

<template>
  <DraggableList :list="list" :columns="columns" @change="changeListOrder">
    <template v-slot="{ value }">
      <div style="display: flex;">
        <el-form-item style="width: 240px;">
          {{ value.no }}
        </el-form-item>
        <el-form-item style="width: 440px;">
          <el-input v-model="value.name"></el-input>
        </el-form-item>
      </div>
    </template>
  </DraggableList>
  <el-button @click="list.push({ no: new Date().getTime(), name: '' })">新增</el-button>
</template>

