<script setup>
import Child from '@/components/01_slotbasic/Child.vue';
</script>
<!-- 
Slot
- 부모의 컴포넌트에서 자식으로 콘텐츠를 전달하는 기능
- 컴포넌트를 더 유연하고, 재사용 가능하게 만들기 위해ㄴ
-->
<template>
  <div style="border: 5px solid lightblue; padding: 20psx">
    <Child><p>여기에 작성된 콘텐츠가 전달됩니다.</p></Child>
  </div>
</template>

<style scoped></style>
