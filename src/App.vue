<script setup lang="ts">
import Clock from './components/Clock.vue'
import Calendar from './components/Calendar/index.vue'

const now = useNow()
const dayNow = computed(() => dayjs(now.value))
const formatNow = computed(() => dayNow.value.format('YYYY-MM-DD HH:mm:ss'))
const date = ref('')
const time = ref('')

watchEffect(() => {
  date.value = formatNow.value.split(' ')[0]
  time.value = formatNow.value.split(' ')[1]
})
</script>

<template>
  <Clock :date="date" :time="time" />
  <Calendar :date="dayNow" />
</template>

<style scoped>

</style>
