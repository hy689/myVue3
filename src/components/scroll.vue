<template>
  <div
    ref="list"
    :style="{height}"
    class="infinite-list-container"
    @scroll="scrollEvent"
  >
    <div
      ref="phantom"
      class="infinite-list-phantom"
      :style="{height: phantomHeight}"
    ></div>
    <div
      ref="content"
      class="infinite-list"
      :style="{transform: `translateY(${contentTransform}px)`}"
    >
      <div
        v-for="item in visibleData"
        ref="items"
        class="infinite-list-item"
        :id="item._index"
        :key="item._index"
      >
        <slot name="content" :item="item.item"></slot>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'VirtualList',
  props: {
    // 所有列表数据
    listData:{
      type: Array,
      default: ()=>[]
    },
    // 预估高度
    estimatedItemSize:{
      type: Number,
      required: true
    },
    // 缓冲区比例
    bufferScale:{
      type: Number,
      default: 1
    },
    // 容器高度 100px or 50vh
    height: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      // 可视区域高度
      screenHeight: 0,
      // 起始索引
      start: 0,
      // 结束索引
      end: 0,
      phantomHeight: 0,
      contentTransform: 0
    };
  },
  computed:{
    _listData(){
      return this.listData.map((item,index)=>{
        return {
          _index:`_${index}`,
          item
        }
      })
    },
    visibleCount(){
      return Math.ceil(this.screenHeight / this.estimatedItemSize);
    },
    aboveCount(){
      return Math.min(this.start, this.bufferScale * this.visibleCount);
    },
    belowCount(){
      return Math.min(this.listData.length - this.end, this.bufferScale * this.visibleCount);
    },
    visibleData(){
      let start = this.start - this.aboveCount;
      let end = this.end + this.belowCount;
      return this._listData.slice(start, end);
    }
  },
  created(){
    this.initPositions();
  },
  mounted() {
    this.screenHeight = this.$el.clientHeight;
    this.start = 0;
    this.end = this.start + this.visibleCount;
  },
  updated(){
    this.$nextTick(function () {
      if(!this.$refs.items || !this.$refs.items.length){
        return ;
      }
      // 获取真实元素大小，修改对应的尺寸缓存
      this.updateItemsSize();
      // 更新列表总高度
      let height = this.positions[this.positions.length - 1].bottom;
      this.phantomHeight = `${height}px`;

     // 更新真实偏移量
      this.setStartOffset();
    })
  },
  methods: {
    initPositions(){
      this.positions = this.listData.map((d,index)=>({
          index,
          height:this.estimatedItemSize,
          top:index * this.estimatedItemSize,
          bottom:(index+1) * this.estimatedItemSize
        })
      );
    },
    //获取列表项的当前尺寸
    updateItemsSize(){
      let nodes = this.$refs.items;
      nodes.forEach((node)=>{
        let { height } = node.getBoundingClientRect();
        let index = +node.id.slice(1)
        this.positions[index].height = height;
        
        // 在这个循环里面，参考的文章每次都会去更新index~this.positions.length - 1的数据，次数明显会有很多
        // 精简之后，只需要使用下面的一个for循环，就可以全部更新信息，且计算过程更简单(上一个的bottom值是下一个的top值)
      })

      this.positions[0].bottom = this.positions[0].height;
      for (let i = 1, len = this.positions.length; i < len; i++) {
        // 为什么加这一句不可以，加上之后，能明显地看到滑到后面之后，渲染内容会往下掉
        /* if (this.positions[i].hasUpdated) {
          continue;
        } */
        this.positions[i].top = this.positions[i - 1].bottom;
        this.positions[i].bottom = this.positions[i].top + this.positions[i].height;
        this.positions[i].hasUpdated = 1;
      }
    },
    // 获取当前的偏移量
    setStartOffset(){

      // 在渲染时，需要渲染可视区位置以及可视区上下缓冲部分
      let index = Math.max(0, this.start - this.aboveCount);
      this.contentTransform  = this.positions[index].top;
    },
    //滚动事件
    scrollEvent() {
      //当前滚动位置
      let scrollTop = this.$refs.list.scrollTop;
      //此时的开始索引
      this.start = this.getStartIndex(scrollTop);
      //此时的结束索引
      this.end = this.start + this.visibleCount;
      //此时的偏移量
      this.setStartOffset();
    },
    // 获取列表起始索引
    /* 原作者使用了二分查找算法来找到这个起始index，个人觉得没必要，可以在数组中直接查找第一个的bottom值>= scrollTop的元素(第一个元素可以理解为即将进入可视区或者一部分已在可视区中) */
    getStartIndex(scrollTop = 0){
      let res = this.positions.find(item => item.bottom >= scrollTop);

      return res.index;
    },
  }
};
</script>


<style scoped>
.infinite-list-container {
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
}

.infinite-list-item {
  padding: 5px;
  color: #555;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
  /* height:200px; */
}

</style>
