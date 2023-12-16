<script setup>
import { ref } from 'vue'
import ListContainer from '../../components/listContainer.vue'
const tableData = ref([
  {
    updated: '2016-05-03',
    updatedCount: '+30',
    dataTotal: '355',
    desp: '*********',
  },
  {
    updated: '2016-05-03',
    updatedCount: '+30',
    dataTotal: '355',
    desp: '*********',
  }, {
    updated: '2016-05-03',
    updatedCount: '+30',
    dataTotal: '355',
    desp: '*********',
  },

])
</script>

<template>
  <ListContainer :mock="{ data: tableData, total: tableData.length }">
    <template #addBtn>
      <el-button type="primary">更新数据集</el-button>
      <el-button>导出</el-button>
    </template>
    <template #form>
      <el-form style="display: grid;grid-template-columns: repeat(3, 1fr);gap: 20px;">
        <el-form-item label="时间:">
          <el-date-picker type="datetimerange" start-placeholder="请选择开始时间" end-placeholder="请选择结束时间"
            format="YYYY-MM-DD HH:mm:ss" date-format="YYYY/MM/DD ddd" time-format="A hh:mm:ss" />
        </el-form-item>
        <el-form-item label="数据总量 (>):">
          <el-input />
        </el-form-item>
        <el-form-item label="描述:">
          <el-input />
        </el-form-item>
      </el-form>
    </template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" width="100" />
      <el-table-column prop="updated" label="上传（更新）时间" />
      <el-table-column prop="updatedCount" label="数据更新条数" />
      <el-table-column prop="dataTotal" label="数据总量" />
      <el-table-column prop="desp" label="描述" />
      <el-table-column fixed="right" label="操作">
        <template #default>
          <el-button link type="primary" size="small">查看</el-button>
          <el-button link type="primary" size="small">编辑</el-button>
          <el-button link type="primary" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </ListContainer>
</template>
