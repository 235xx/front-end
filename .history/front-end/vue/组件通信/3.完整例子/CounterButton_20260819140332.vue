<template>
  <button @click="emit('increment', props.step)">+{{ props.step }}</button>
</template>

<script setup>
const props = defineProps({
  step: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(["increment"]);
</script>
