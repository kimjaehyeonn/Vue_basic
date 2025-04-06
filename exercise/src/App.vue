<script setup>
import FilterContainer from './components/FilterContainer.vue'
import HeaderLayout from './components/HeaderLayout.vue'
import SummaryContainer from './components/SummaryContainer.vue'
import InputContainer from './components/InputContainer.vue'
import TodoItem from './components/TodoItem.vue'
import { useTodos } from './api/useTodos'
import { onMounted, ref, computed } from 'vue'
const {
  todos,
  loading,
  error,
  fetchTodos,
  updateTodo,
  addTodo,
  deleteTodo,
  deleteCompletedTodos,
} = useTodos()
// TodoItem 컴포넌트에서 todo가 업데이트 될때 호출될 함수
function handleTodoUpdate(updatedTodo) {
  updateTodo(updatedTodo)
}

function handleAddTodo(newTodo) {
  addTodo(newTodo)
}

function handleDeleteTodo(todoId) {
  deleteTodo(todoId)
}

const currentFilter = ref('all')
const filterdTodos = computed(() => {
  if (currentFilter.value === 'all') {
    return todos.value // 모든 항목 반환
  } else if (currentFilter.value === 'active') {
    return todos.value.filter(todo => !todo.completed) // 미완료 항목만 반환
  } else if (currentFilter.value === 'completed') {
    return todos.value.filter(todo => todo.completed) // 완료 항목만 반환환
  }
  return todos.value
})

function handleFilterChange(filter) {
  currentFilter.value = filter
}

// 완료되지 않은 항목 수 계산
const activeTodosCount = computed(() => {
  return todos.value.filter(todo => !todo.completed).length
})
const completedTodosCount = computed(() => {
  return todos.value.filter(todo => todo.completed).length
})

function handleDeleteCompletedTodos() {
  deleteCompletedTodos()
}
onMounted(() => fetchTodos())
</script>

<template>
  <HeaderLayout />
  <InputContainer @add-todo="handleAddTodo" />
  <FilterContainer @update:filter="handleFilterChange" />
  <div v-if="loading">로딩중..</div>
  <div v-else-if="error">
    <p>에러 {{ error }}</p>
    <button @click="fetchTodos">새로고침</button>
  </div>
  <ul v-else class="todo-list">
    <!-- TodoItem에 update:todo 이벤트 리스너 추가 -->
    <TodoItem
      v-for="todo in filterdTodos"
      :key="todo.id"
      :todo="todo"
      @update:todo="handleTodoUpdate"
      @delete:todo="handleDeleteTodo"
    />
  </ul>
  <SummaryContainer
    :active-count="activeTodosCount"
    :completed-count="completedTodosCount"
    @delete-completed="handleDeleteCompletedTodos"
  />
</template>

<style scoped>
.todo-list {
  margin: var(--space-l) auto !important;
}
</style>
