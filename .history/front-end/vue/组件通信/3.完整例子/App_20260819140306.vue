<template>
  <h1>计数：{{ count }}</h1>
  <CounterButton :step="2" @increment="handleIncrement" />
</template>

<script setup>
import { ref } from "vue";
import CounterButton from "./CounterButton.vue";

const count = ref(0);

const handleIncrement = (step) => {
  count.value += step;
};
</script>
