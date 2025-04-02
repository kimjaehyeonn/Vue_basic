<script setup>
import { ref, watch } from 'vue';
const x = ref(0);
const result = ref(x);
watch(x, (x, result) => console.log('변경 후 값-', x, '변경 전 값-', result));
</script>

<template>
  <div>
    X: <input type="text" v-model.number="x" /><br />
    결과: {{ result }}
  </div>
</template>

<style scoped></style>
