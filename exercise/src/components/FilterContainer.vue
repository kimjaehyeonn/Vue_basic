<script setup>
import { ref } from 'vue'

//현재 선택된 필터 상태를 관리하는 변수
const currentFilter = ref('all')

// 필터 변경 이벤트를 부모 컴포넌트에 전달하는 emit 정의
const emit = defineEmits(['update:filter'])

// 필터 버튼 클릭 핸들러
function setFilter(filter) {
  currentFilter.value = filter // 로컬 상태 업데이트트
  emit('update:filter', filter) // 부모 컴포넌트에 필터 변경 알림
}
</script>

<template>
  <div class="filter-container">
    <!-- 클릭 시 all 필터 적용
     현재 필터가 all 이면 버튼에 클래스 적용-->
    <button
      @click="setFilter('all')"
      :class="{ active: currentFilter === 'all' }"
    >
      전체
    </button>
    <button
      @click="setFilter('active')"
      :class="{ active: currentFilter === 'active' }"
    >
      미완료
    </button>
    <button
      @click="setFilter('completed')"
      :class="{ active: currentFilter === 'completed' }"
    >
      완료
    </button>
  </div>
</template>

<style scoped>
/*필터 탭 filter-container */
.filter-container {
  display: flex;
  gap: var(--space-m);
}
</style>
