<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  weekDays: Array as PropType<string[]>
})

</script>

<template>
  <div class="date-header">
    <div v-for="item in weekDays" :key="item" class="date-header-item">{{ item }}</div>
  </div>
</template>

<style scoped>
.date-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  height: 50px;
}
</style>
