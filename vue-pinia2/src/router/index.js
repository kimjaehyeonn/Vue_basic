import { createRouter, createWebHistory } from 'vue-router';
import StudentListView from '@/views/StudentListView.vue';
const routes = [
  {
    path: '/',
    redirect: '/students',
  },
  {
    path: '/students',
    name: 'students',
    component: StudentListView,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
s;
