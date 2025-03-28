<script setup>
import SiblingTest1 from './components/02_mitt/SiblingTest1.vue'
import SiblingTest2 from './components/02_mitt/SiblingTest2.vue'
</script>

<template>
  <div>
    <h2>mitt 없이 형제관계간 통신</h2>
    <SiblingTest1 @send-message="handleMessageFromChild" />
    <SiblingTest2 :message="sibling2Message" />
  </div>
</template>

<style scoped></style>
