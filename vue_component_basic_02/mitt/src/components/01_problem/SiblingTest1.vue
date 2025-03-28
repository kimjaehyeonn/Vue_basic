<script setup>
const emit = defineEmits(['send-message'])
function sendMessage() {
  emit('send-message', '안녕 sibling2! 나는 1이야')
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
