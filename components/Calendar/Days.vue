<template>
  <div
    class="h-28 min-h-16 max-h-36 overflow-hidden border border-px border-collapse flex flex-col justify-between"
  >
    <span
      class="text-xl font-semibold px-4 pt-4 inline-block"
      :style="`color: ${
        date.currentMonth ? 'inherit' : 'rgba(229 231 235, 0.5)'
      }`"
      >{{ date }}</span
    >
    <div>
      <slot name="events"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DaysOfWeek',
  props: {
    date: {
      type: [String, Number],
      currentMonth: { type: 'boolean', default: true },
      default: 'Mon',
    },
  },
}
</script>

<style></style>
