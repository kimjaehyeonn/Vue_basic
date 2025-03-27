<script setup>
// defineProps
// 부모 컴포넌트로부터 전달받은 프로퍼티를 정의하는 함수
defineProps(['idol']);
</script>

<template>
  <div>
    <li><input type="checkbox" :idol.checked="checked" />{{ idol.name }}</li>
  </div>
</template>

<style scoped></style>
