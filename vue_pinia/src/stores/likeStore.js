import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useLikeStore = defineStore('like', () => {
  const like = ref(0);
  const increase = () => {
    like.value++;
  };
  const likeButton = computed(() => {
    like.value * 5;
  });
  return { like, increase, likeButton };
});
