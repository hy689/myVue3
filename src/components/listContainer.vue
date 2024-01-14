<template>
  <div class="list-container">
    <div v-if="showAddBtn" style="display: flex;justify-content: end;margin-bottom: 20px;">
      <slot name="addBtn" />
    </div>
    <!-- 筛选 -->
    <div v-if="showSearchForm">
      <slot name="form" />
      <!-- 查询 -->
      <div style="margin-top: 20px;">
        <el-button type="primary" :loading="searchDisabled" @click="handleSearch">
          查询
        </el-button>
        <!-- 重置 -->
        <el-button v-if="!hideReset" type="primary" @click="handleResetSearchForm">
          重置
        </el-button>
      </div>
      <!-- 上传文件 -->
      <slot name="uploadFile" />
      <el-divider />
    </div>
    <div v-loading="tableLoading" class="table-box">
      <!-- 表格数据的一些操作 -->
      <div class="table-action">
        <div>
          <slot name="action-left" />
        </div>
        <div>
          <slot name="action-right" />
        </div>
      </div>
      <slot />
    </div>
    <div v-if="paginationShow" class="page-box">
      <el-pagination layout="total, sizes, prev, pager, next" :page-sizes="[20, 50, 80, 100]" :disabled="searchDisabled"
        :total="tableTotal" :current-page.sync="pageNum" :page-size.sync="pageSize" @size-change="sizeChangeGetList"
        @current-change="getList" />
    </div>
  </div>
</template>

<script>
// 列表容器组件
export default {
  name: 'ListContainer',
  props: {
    // 接口函数
    api: {
      type: Function,
      required: true
    },
    // 查询条件
    params: {
      type: Object,
      default: null
    },
    // 搜索框对象的引用
    formRef: {
      type: Object,
      default: null
    },
    // 隐藏充值按钮
    hideReset: {
      type: Boolean,
      default: false
    },
    // 首次加载调用列表接口
    callInterface: {
      type: Boolean,
      default: true
    },
    showAddBtn: {
      type: Boolean,
      default: true
    },
    // 不显示查询条件区域
    showSearchForm: {
      type: Boolean,
      default: true
    },
    paginationShow: {
      type: Boolean,
      default: true
    },
    validate: {
      type: Boolean,
      default: false
    },
    selfValid: {
      type: Boolean,
      default: false
    },
    handleSelfValid: {
      type: Function,
      default: () => true
    },
    mock: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      searchDisabled: false,
      tableLoading: false,
      list: [],
      tableTotal: 0,
      pageNum: 1,
      pageSize: 20
    }
  },
  async mounted() {
    await this.$nextTick(() => { }) // 因为子组件的钩子比父组件先执行，所以现在子父让所有页面渲染完再调取方法
    if (this.callInterface) {
      this.getList()
    }
  },
  methods: {
    // 查询
    handleSearch() {
      this.pageNum = 1
      this.pageSize = 20
      this.getValidList()
    },
    // 重置表单
    handleResetSearchForm() {
      this.formRef.resetFields()
      this.$emit('reset')
    },
    sizeChangeGetList() {
      this.pageNum = 1
      this.getValidList()
    },
    // 根据是否校验走不同方法
    getValidList() {
      if (this.validate) {
        this.formRef.validate((valid) => {
          if (valid) {
            this.getList()
          }
        })
        return
      }
      // 自定义校验
      if (this.selfValid && !this.handleSelfValid()) return

      this.getList()
    },
    // 请求列表数据
    getList() {
      this.searchDisabled = true
      this.tableLoading = true

      if (this.mock.data) {
        setTimeout(() => {
          const { data, total } = this.mock
          // mock 为假数据，方便测试
          this.list = data || []
          this.tableTotal = total || 0
          this.$emit('search', data)
          this.searchDisabled = false
          this.tableLoading = false
        }, 1000)
        return
      }

      this.api(this.generateParams())
        .then(({ data }) => {
          this.list = data.data || []
          this.tableTotal = data.total || 0
          this.$emit('search', data)
        })
        .catch(() => {
          this.tableTotal = 0
          this.$emit('search', {})
        })
        .finally(() => {
          debugger
          this.searchDisabled = false
          this.tableLoading = false
        })
    },
    // 生成请求参数
    generateParams() {
      if (this.paginationShow) {
        const { pageNum, pageSize } = this
        return {
          ...this.params,
          pageNum,
          pageSize
        }
      }
      return { ...this.params }
    }
  }
}
</script>

<style scoped>
.list-container {
  display: flex;
  flex-direction: column;
}

.table-action {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}

.page-box {
  text-align: center;
  height: 40px;
  margin-top: 20px;
}

.el-pagination {
  margin-bottom: 20px;
}

.transactionLimit .transactionLimit_table {
  margin-top: 0;
}

.el-divider--horizontal {
  margin: 15px 0;
}
</style>
