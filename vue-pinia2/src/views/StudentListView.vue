<script setup>
import StudentList from '@/components/StudentList.vue';
import StudentSummary from '@/components/StudentSummary.vue';
</script>

<template>
  <div>
    <StudentSummary />
    <h3>학생목록</h3>
    <StudentList />

    <h3>학생수summary</h3>
  </div>
</template>

<style scoped></style>
