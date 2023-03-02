<script setup lang="ts">
import DateHeader from './DateHeader.vue'
import DateContent from './DateContent.vue'
import type { Dayjs } from 'dayjs'
import { PropType } from 'vue';
import { useDate } from '../../composable/useDate';

const props = defineProps({
  date: {
    type: Object as PropType<Dayjs>,
    required: true
  }
})

const { weekDays, dayRows } = useDate(props)
console.log(dayRows);
</script>

<template>
  <div class="calendar">
    <DateHeader :weekDays="weekDays" />
    <DateContent :dayRows="dayRows" />
  </div>
</template>

<style scoped>
.calendar {
  font-size: 2rem;
}
</style>