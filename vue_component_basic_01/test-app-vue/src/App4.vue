<script setup>
import CheckboxItem4 from './components/CheckboxItem4.vue';
import { ref } from 'vue';
const idols = ref([
  { id: 1, name: 'bts', checked: true },
  { id: 2, name: 'Black Pink', checked: false },
  { id: 3, name: 'EXO', checked: false },
  { id: 4, name: 'ITZY', checked: false },
]);
</script>

<template>
  <h1>App 컴포넌트</h1>
  <hr />
  <CheckboxItem4 v-for="idol in idols" :key="idol.id" :idol="idol" />
</template>

<style scoped></style>
