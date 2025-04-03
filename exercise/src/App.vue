<script setup>
import FilterContainer from './components/FilterContainer.vue'
import HeaderLayout from './components/HeaderLayout.vue'
import SummaryContainer from './components/SummaryContainer.vue'
import InputContainer from './components/InputContainer.vue'
import TodoItem from './components/TodoItem.vue'
import { useTodos } from './api/useTodos'
import { onMounted } from 'vue'
const { todos, loading, error, fetchTodos } = useTodos

onMounted(() => fetchTodos())
</script>

<template>
  <HeaderLayout />
  <InputContainer />
  <FilterContainer />
  <div v-if="loading">로딩중..</div>
  <div v-else-if="error">
    <p>에러 {{ error }}</p>
    <button @click="fetchTodos">새로고침</button>
  </div>
  <ul v-else class="todo-list">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
  <SummaryContainer />
</template>

<style scoped>
.todo-list {
  margin: var(--space-l) auto !important;
}
</style>
