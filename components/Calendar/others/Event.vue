<template>
  <div class="relative flex items-center gap-2 text-sm">
    <span
      class="absolute z-0 inset-0 opacity-30"
      :style="`background-color: ${event.color}`"
    />
    <span
      class="w-2 self-stretch opacity-30 relative z-10"
      :style="`background-color: ${event.color}`"
    />
    <span class="py-1 relative z-10" :style="`color: ${event.color}`">{{
      event.summary
    }}</span>
  </div>
</template>

<script>
import Day from '~/components/Calendar/Days.vue'

export default {
  name: 'CalenderEvent',
  layout: 'main',
  components: {
    Day,
  },
  data() {
    return {}
  },
  props: {
    event: {
      type: Object,
      default: () => ({
        title: 'Title',
        summary: 'Summary',
        description: 'default description',
        status: 'in progress',
        time: '10:00',
        category: 'work',
        color: '#000',
      }),
    },
  },
}
</script>

<style scoped></style>
