<template>
  <div>
    <!-- ✅ 孙子组件会自动响应爷爷的数据变化 -->
    <p :class="theme">孙子组件当前主题：{{ theme }}</p>
  </div>
</template>

<script setup>
import { inject } from "vue";

// 注入拿到的是 ref 对象
const theme = inject("theme");
</script>
