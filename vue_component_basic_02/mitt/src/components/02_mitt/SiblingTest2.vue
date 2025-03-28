<script setup>
import { emitter } from '@/mitt'

import { ref, onMounted, onUnmounted } from 'vue'

const message = ref('아직 메시지가 없습니다.')

function handlemMessage(msg) {
  message.value = msg
}
// 컴포넌트 가 마운트 되기 직전
onMounted(() => {
  // mitt 이벤트 리스터
  emitter.on('send-message', handlemMessage)
})
onUnmounted(() => {
  emitter.off('send-message', handlemMessage)
})
</script>

<template>
  <div>
    <h3>Sibling2</h3>
    <p>받은 메시지: {{ message }}</p>
  </div>
</template>

<style scoped></style>
