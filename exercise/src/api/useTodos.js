import { ref } from 'vue'
import axios from 'axios'
const API_URL = 'http://localhost:5000/todos'

// useTodos 함수 설정
export function useTodos() {
  const todos = ref([])
  const loading = ref(false)
  const error = ref(null)

  // db.json에서 데이터 fetch. (axios.get)
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

  // todo 항목 업데이트 함수 (db에서 데이터 업데이트 & 로컬상태도 동기화. axios.pu)
  const updateTodo = async updatedTodo => {
    try {
      //API 서버에서 todo 업데이트 요청
      await axios.put(`${API_URL}/${updatedTodo.id}`, updatedTodo)

      //로컬 상테 업데이트
      const index = todos.value.findIndex(todo => todo.id === updatedTodo.id)

      // findIndex는 조건에 맞는 요소가 없다면 -1을 리턴 > 찾은 항목이 있을 때만 교체.
      if (index !== -1) todos.value[index] = updatedTodo
    } catch (err) {
      error.value = err.message || '업데이트 중 오류 발생'
      console.error('업데이트 중 오류 발생:', err)
    }
  }

  // 리스트 추가하는 함수(InputContainer)
  const addTodo = async newTodo => {
    try {
      //API 서버에 새 todo 추가 요청
      const response = await axios.post(API_URL, newTodo)

      // 서버에서 반환된 데이터로 로컬 상태 업데이트(서버에서 ID가 변경될 수 있음)
      todos.value.push(response.data)
      return response.data
    } catch (err) {
      error.value.message = err.value || '할일 추가 중 오류 발생'
      console.error('할일 추가 중 오류발생: ', err)
      return null
    }
  }

  // 리스트 제거하는 함수(TodoItem)
  const deleteTodo = async todoId => {
    try {
      //API 서버에 삭제 요청 보내기
      await axios.delete(`${API_URL}/${todoId}`)

      //로컬 업데이트
      todos.value = todos.value.filter(todo => todo.id !== todoId)
    } catch (err) {
      error.value = err.message || `리스트 제거 중 오류 발생`
      console.error('할일 제거 중 오류 발생:', err)
      return false
    }
  }

  // 완료 함수 일괄 삭제 기능
  const deleteCompletedTodos = async () => {
    try {
      // 완료 항목 필터링
      const completedTodos = todos.value.filter(todo => todo.completed)

      // 삭제작업을 병렬로 처리
      const deletePromises = completedTodos.map(
        todo => axios.delete`${API_URL}/${todo.id}`,
      )
      // 모든 삭제요청이 완료될때까지 대기
      await Promise.all(deletePromises)

      // 로컬 사앹에서 완료도니 todo 항목들 제거
      todos.value = todos.value.filter(todo => !todo.completed)
      return true
    } catch (err) {
      error.value = err.message || '완료된 항목 삭제 중  오류 발생'
      console.error('완료된 항목 삭제 중 오류 발생:', err)
      return false
    }
  }
  return {
    todos,
    loading,
    error,
    fetchTodos,
    updateTodo,
    addTodo,
    deleteTodo,
    deleteCompletedTodos,
  }
}
