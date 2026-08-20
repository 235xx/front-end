<template>
  <Child @update-msg="onUpdate" />
  <p>{{ msg }}</p>
</template>

<script setup>
import { ref } from "vue";
import Child from "./Child.vue";

const msg = ref("初始值");

const onUpdate = (val) => {
  msg.value = val; // 父组件自己改自己的数据
};
</script>
