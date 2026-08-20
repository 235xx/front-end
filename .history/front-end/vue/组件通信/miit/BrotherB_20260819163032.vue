<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import emitter from "@/utils/eventBus";

const msg = ref("");

const handleMessage = (data) => {
  msg.value = data.text;
};

// ⚠️ 必须在挂载时监听
onMounted(() => {
  emitter.on("message-sent", handleMessage);
});

// ⚠️ 致命细节：必须在卸载时取消监听，否则会导致内存泄漏！
onUnmounted(() => {
  emitter.off("message-sent", handleMessage);
});
</script>

<template>
  <p>收到消息：{{ msg }}</p>
</template>
