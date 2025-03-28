<script setup>
import SiblingTest1 from './components/01_problem/SiblingTest1.vue'
import SiblingTest2 from './components/01_problem/SiblingTest2.vue'
import { ref } from 'vue'

const sibling2Message = ref('')
const handleMessageFromChild = (msg) => {
  sibling2Message.value = msg
}
</script>

<template>
  <div>
    <h2>mitt 없이 형제관계간 통신</h2>
    <SiblingTest1 @send-message="handleMessageFromChild" />
    <SiblingTest2 :message="sibling2Message" />
  </div>
</template>

<style scoped></style>
