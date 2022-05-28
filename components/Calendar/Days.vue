<template>
  <div
    class="h-28 min-h-16 max-h-36 overflow-hidden border border-px border-collapse"
  >
    <span class="text-xl font-semibold px-4 pt-4 inline-block">{{ date }}</span>
    <slot name="events"> </slot>
  </div>
</template>

<script>
export default {
  name: 'DaysOfWeek',
  props: {
    date: {
      type: [String, Number],
      default: 'Mon',
    },
  },
}
</script>

<style></style>
