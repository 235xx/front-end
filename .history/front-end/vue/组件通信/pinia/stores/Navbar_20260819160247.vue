<script setup>
import { useCartStore } from "./stores/cart";

const cart = useCartStore();
</script>

<template>
  <!-- 直接访问，保持响应式 -->
  <span>购物车数量：{{ cart.totalCount }}</span>
</template>
