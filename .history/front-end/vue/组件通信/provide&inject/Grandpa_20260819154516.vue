<template>
  <div>
    <p>爷爷的主题：{{ theme }}</p>
    <button @click="theme = 'light'">切换主题</button>
    <!-- 中间可以嵌套无数层组件，不需要传 props -->
    <Father />
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import Father from "./Father.vue";

const theme = ref("dark");

// ✅ 关键：直接把 ref 对象 provide 出去
provide("theme", theme);
</script>
