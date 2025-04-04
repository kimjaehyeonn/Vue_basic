import { ref } from 'vue';
import { defineStore } from 'pinia';

// pinia 스토어 정리
// defineStore: 스토어 생성하는 함수
// 첫번째인자가 스토어의 고유 ID가 된다.

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0); // 카운터 값을 저장하는 상태 변수

  // getter

  //action
  // 1씩 증가시키는 메서드
  const increase = () => {
    count.value++;
  };
  // 0으로 초기화시키는 메서드
  const reset = () => {
    count.value = 0;
  };
  return { count, increase, reset };
});
