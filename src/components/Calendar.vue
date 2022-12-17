<script setup lang="ts">
const props = defineProps({
  date: String
})

const afterNum = ref(1)

const afterDate = computed(() => {
  return dayjs(props.date).add(afterNum.value, 'day').format('YYYY-MM-DD')
})
</script>

<template>
  <div>{{date}}</div>
  <label for="">几天后</label>
  <input v-model.number="afterNum" type="number" />
  {{afterDate}}
</template>