<script setup>
const props = defineProps(['id', 'checked']);
const emit = defineEmits(['check-changed']);
</script>

<template>
  <input
    type="checkbox"
    :value="id"
    :checked="checked"
    @change="$emit('check-changed', { id, checked: $event.target.checked })"
  />
  <slot>item</slot>
</template>

<style scoped></style>
