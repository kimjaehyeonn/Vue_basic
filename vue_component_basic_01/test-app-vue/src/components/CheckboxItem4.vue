<script setup>
// defineProps
// 부모 컴포넌트로부터 전달받은 프로퍼티를 정의하는 함수
defineProps({
  idol: {
    type: Object,
    required: true,

    // validator: 부모가 prop을 전달할때마다 함수가 호출됨(vue 공식기능)
    validator: (value) => {
      return (
        (typeof value.id === 'number' || typeof value.id === 'string') &&
        typeof value.name === 'string' &&
        typeof value.checked === 'boolean'
      );
    },
  },
});
</script>

<template>
  <div>
    <li><input type="checkbox" :idol.checked="checked" />{{ idol.name }}</li>
  </div>
</template>

<style scoped></style>
