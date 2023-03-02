<script setup lang="ts">
import { PropType } from 'vue'
import type { Dayjs } from 'dayjs'
import type { CalendarDateCell, CalendarDateCellType } from '../../composable/useDate'

defineProps({
  chooseDay: Object as PropType<Dayjs>,
  dayRows: Array as PropType<CalendarDateCell[]>
})

const equalDayType = (day: CalendarDateCell, type: CalendarDateCellType) => day.type === type
const dayCellClass = (day: CalendarDateCell) => ({
  'date': true,
  'prev-date': equalDayType(day, 'prev'),
  'next-date': equalDayType(day, 'next'),
})

// document.body.onmousemove = e => {
//   for(const date of document.getElementsByClassName("date")) {
//     const rect = date.getBoundingClientRect(),
//           x = e.clientX - rect.left,
//           y = e.clientY - rect.top;

//     date.style.setProperty("--mouse-x", `${x}px`);
//     date.style.setProperty("--mouse-y", `${y}px`);
//   };
// }

</script>

<template>
  <div class="date-content">
    <div v-for="day in dayRows" :key="day.text" :class="{...dayCellClass(day)}">{{ day.text }}</div>
  </div>
</template>

<style scoped>
.date-content {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 100px);
  gap: 8px;
  cursor: pointer;
}


.date:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
.date::before {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y), 
    rgba(255, 255, 255, 0.2),
    transparent 25%
  );
  display: flex;
  z-index: 1;
}
.date::after {  
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y), 
    rgba(255, 255, 255, 0.4),
    transparent 20%
  );
  z-index: 1;
}

.prev-date,
.next-date {
  color: gray;
}
</style>
