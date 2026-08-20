<template>
  <p>{{ msg }}</p>
  <p>{{ count }}</p>
</template>

<script setup>
const props = defineProps(['msg', 'count'])
</script>