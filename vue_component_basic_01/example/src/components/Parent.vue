<script setup>
import Child from './Child.vue';
import GrandChild from './GrandChild.vue';
</script>

<template>
  <div class="parent" style="border: 2px solid red">
    <h1>나는 부모</h1>
    <Child />
    <GrandChild />
  </div>
</template>

<style scoped></style>