<script setup>
import Counter from './components/Counter.vue';
import Like from './components/Like.vue';
import { useLikeStore } from '@/stores/likeStore.js';
const like = useLikeStore();
import { useCounterStore } from '@/stores/counter.js';
const counter = useCounterStore();
</script>

<template>
  <div>
    <h1>Pinia 상태관리 예제</h1>
    <hr />

    <h2>좋아요 개수: {{ liker.like }}</h2>
    <h2>좋아요 개수 : {{ liker.likeButton }}</h2>
    <Like />
    <hr />
    <h2>APP에서 보는 counter: {{ counter.count }}</h2>
    <Counter />
    <Counter />
  </div>
</template>

<style scoped></style>
