<template>
  <Child :msg="parentMsg" :count="num" />
</template>

<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const parentMsg = ref('你好')
const num = ref(42)
</script>