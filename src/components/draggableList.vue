
<script setup>

const emit = defineEmits(['change'])

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => []
  }
})

let currentDragDomIndex = 0


function dragenter(e, index) {
  if (index === currentDragDomIndex) {
    return
  }
  
  const nList = [...props.list]
  const draggedItem = nList[currentDragDomIndex];
  nList.splice(currentDragDomIndex, 1);
  nList.splice(index, 0, draggedItem);
  currentDragDomIndex = index;

  emit('change', nList)
}

function dragend() {
  currentDragDomIndex = null;
}

function dragstart(e, index) {
  currentDragDomIndex = index;
  return
}

</script>

<template>
  <div ref="list">
    <div v-if="columns.length" style="display: flex;background:#F7FAFD">
      <div :key="index" v-for="(item, index) in columns" :style="{
        height: '48px',
        lineHeight: '48px',
        flex: item.width === 'auto' ? `1 1 auto` : `0 0 ${item.width}`
      }">
        {{ item.label }}
      </div>
    </div>
    <div v-for="(item, index) in list" :key="index" :draggable="true" @dragstart="(e) => dragstart(e, index)"
      @dragenter="(e) => dragenter(e, index)" @dragend="dragend" style="text-align: center;">
      <slot :value="item"></slot>
    </div>
  </div>
</template>

<style scoped></style>