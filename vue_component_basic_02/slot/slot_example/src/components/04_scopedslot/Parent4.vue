<script setup>
import Child4 from './Child4.vue';
</script>
<!-- 
scoped-slot
- 자식이 데이터를 넘겨준 것을 이용해서 부모가 콘텐츠를 제공한다.
- 자식 컴포넌트 내부에서 데이터를 처리하고 부모에게 전달해서 그려달라고 요청.
-->
<template>
  <div style="border: 1px solid greenyellow">
    <Child4 v-slot:item="{ item }">
      <h3>{{ item.name }}</h3>
    </Child4>
  </div>
</template>

<style scoped></style>
