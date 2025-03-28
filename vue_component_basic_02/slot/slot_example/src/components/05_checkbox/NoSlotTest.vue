<script setup>
import Checkbox1 from './Checkbox1.vue';
import { ref } from 'vue';
const items = ref([
  { id: 'V ', checked: true, label: 'Vue ' },
  { id: 'A ', checked: false, label: 'Angular ' },
  { id: 'R ', checked: false, label: 'React ' },
  { id: 'S ', checked: false, label: 'Svelte ' },
]);
const CheckBoxChanged = (e) => {
  let item = items.find((item) => item.id === e.id);
  item.checked = e.checked;
};
</script>

<template>
  <div>
    <h3>당신이 경험한 프론트 엔드 기술은?(첫번째:slot사용(X))</h3>
    <Checkbox1
      :key="item.id"
      ="item.id"
      ="item.label"
      ="CheckboxChanged"
    ></Checkbox1>
  </div>
</template>

<style scoped></style>
