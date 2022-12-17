<script setup lang="ts">
import Clock from './components/Clock.vue'
import Calendar from './components/Calendar.vue';

const now = useNow()
const formatNow = computed(() => dayjs(now.value).format('YYYY-MM-DD HH:mm:ss'))
const date = ref('')
const time = ref('')

watchEffect(() => {
  date.value = formatNow.value.split(' ')[0]
  time.value = formatNow.value.split(' ')[1]
})
</script>

<template>
  <Calendar :date="date" />
  <Clock :time="time" />
</template>

<style scoped>

</style>
