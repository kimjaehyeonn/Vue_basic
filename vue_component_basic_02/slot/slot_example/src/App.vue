<script setup>
import Parent from './components/01_slotbasic/Parent.vue';
import Parent2 from './components/02_NamedSlot/Parent2.vue';
import Parent3 from './components/03_dynamicslot/Parent3.vue';
import Parent4 from './components/04_scopedslot/Parent4.vue';
import Checkbox1 from './components/05_checkbox/Checkbox1.vue';
import NoSlotTest from './components/05_checkbox/NoSlotTest.vue';
</script>

<template>
  <div>
    <Parent />

    <Parent2 />

    <Parent3 />
    <Parent4 />
    <Checkbox1 />
    <NoSlotTest />
  </div>
</template>

<style scoped></style>
