import { ref } from 'vue'
import axios from 'axios'
const API_URL = 'http://localhost:5000/todos'

// useTodos 함수 설정
export function useTodos() {
  const todos = ref([])
  const loading = ref(false)
  const error = ref(null)

  // db.josn에서 데이터 fetch.
  const fetchTodos = async () => {
    loading.value = true // 로딩상태
    error.value = null // 에러 메시지 상태

    try {
      const response = await axios.get(API_URL)
      todos.value = response.data
      console.log(todos.value)
    } catch (err) {
      error.value = err.message || '데이터 요청 중 에러'
      console.error('데이터 요청중 에러:', err)
    } finally {
      loading.value = false
    }
  }
  return { todos, loading, error, fetchTodos }
}
