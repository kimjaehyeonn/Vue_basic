<script setup>
import { useLikeStore } from '@/stores/likeStore.js';
const liker = useLikeStore();
const { increase, likeButton } = liker;
</script>

<template>
  <div>
    <button @click="increase">좋아요</button>
  </div>
</template>

<style scoped></style>
