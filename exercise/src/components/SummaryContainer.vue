<script setup>
// props 정의
defineProps({
  activeCount: {
    type: Number,
    default: 0,
  },
  completedCount: {
    type: Number,
    default: 0,
  },
})
// 이벤트 정의
const emit = defineEmits('delete-completed')

// 완료된 항목 삭제 이벤트 발생
function handleDeleteCompleted() {
  if (!confirm('정말 삭제하시겠습니까?')) return emit('deleted-completed')
}
</script>

<template>
  <!--  등록된 리스트가 있다면 보여지도록 처리리 -->
  <div class="todo-summary">
    <p>
      <span>미완료항목</span><span>{{ activeCount }}</span>
    </p>
    <p>
      <span>완료항목</span><span>{{ completedCount }}</span>
    </p>
    <button @click="handleDeleteCompleted">완료된 항목 삭제</button>
  </div>
</template>

<style scoped>
.todo-summary {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--space-m);
}
.todo-summary p {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: var(--space-s);
}
.todo-summary p:nth-of-type(1) span:nth-of-type(1) {
  color: var(--blue-dark);
}
.todo-summary span:nth-of-type(2) {
  background-color: var(--gray300);
  padding: var(--space-s);
  border-radius: var(--space-s);
  font-weight: 900;
}
.todo-summary button {
  background-color: var(--blue-dark);
}

.todo-summary button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
