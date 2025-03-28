<script setup>
const items = [
  {
    id: 1,
    name: 'apple',
  },
  {
    id: 2,
    name: 'banana',
  },
  {
    id: 3,
    name: 'grape',
  },
  {
    id: 4,
    name: 'watermelon',
  },
];
</script>

<template>
  <div>
    <slot name="item" v-for="item in items" :item="item" :key="item"></slot>
  </div>
</template>

<style scoped></style>
