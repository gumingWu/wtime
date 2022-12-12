<script setup lang="ts">
import dayjs from 'dayjs'

const now = useNow()
const formatNow = computed(() => dayjs(now.value).format('YYYY-MM-DD hh:mm:ss'))
</script>

<template>
  {{ now }}
  {{formatNow}}
</template>

<style scoped>

</style>
