<script setup>
import { emitter } from '@/mitt'
// const emit = defineEmits(['send-message'])
function sendMessage() {
  emitter.emit('send-message', '하이루')
}
</script>

<template>
  <div>
    <h3>siblingtest1</h3>
    <button @click="sendMessage">sibling2에게 메시지 보내기</button>
  </div>
</template>

<style scoped>
div {
  border: 1px solid blue;
  padding: 1rem;
}
</style>
