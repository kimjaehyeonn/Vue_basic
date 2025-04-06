<script setup>
import { ref } from 'vue'

//입력값 저장할 반응형 변수 선언
const todoText = ref('')

const emit = defineEmits(['add-todo'])

// 할일 추가 함수
function addTodo() {
  // 입력값이 비어 있지 않은 경우에만 처리
  if (todoText.value.trim()) {
    //현재 시간을 id와 createdAt로 사용
    const timestamp = Date.now().toString()

    //새 할일 객체 생성
    const newTodo = {
      id: timestamp,
      text: todoText.value.trim(),
      completed: false,
      createdAt: timestamp,
    }
    // 부모 컴포넌트에 새 할일 객체 전달
    emit('add-todo', newTodo)

    // 입력필드 초기화
    todoText.value = ''
  }
}
</script>

<template>
  <div class="input-container">
    <input
      type="text"
      placeholder="할일을 입력하세요"
      v-model="todoText"
      @keyup.enter="addTodo"
    />
    <button @click="addTodo">추가</button>
  </div>
</template>

<style scoped>
/* 입력폼 input-container*/
.input-container {
  position: relative;
  top: -30px;
  display: flex;
  gap: var(--space-s);
}
.input-container input {
  border: none;
  padding: var(--space-m);
  background-color: var(--gray400);
  color: var(--gray100);
  outline: none;
  border-radius: var(--space-s);
  flex: 1;
}
.input-container input:focus {
  background-color: var(--gray300);
}
.input-container button {
  background-color: var(--blue-dark);
  padding: var(--space-m) calc(var(--space-m) * 2);
}
.input-container button::after {
  content: '+';
  border: 1px solid var(--gray100);
  border-radius: 50%;
  width: 14px;
  height: 14px;
  display: inline-block;
  position: relative;
  left: 3px;
}
</style>
