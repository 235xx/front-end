<script setup>
import emitter from "@/utils/eventBus";

const sendMessage = () => {
  // 触发事件，携带数据
  emitter.emit("message-sent", { text: "Hello from A" });
};
</script>

<template>
  <button @click="sendMessage">给兄弟发消息</button>
</template>
