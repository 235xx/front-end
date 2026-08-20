<template>
  <button @click="handleClick">点我</button>
</template>

<script setup>
const emit = defineEmits(["updateMsg"]);

const handleClick = () => {
  // 子组件不修改数据，只是"通知"父组件
  emit("updateMsg", "子组件发来的新值");
};
</script>
