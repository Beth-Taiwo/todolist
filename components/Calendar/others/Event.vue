<template>
  <div>
    <label
      :for="event.summary"
      class="relative flex items-center gap-2 text-sm cursor-pointer hover:brightness-50"
    >
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
    </label>
    <SmallModal
      :small-modal-id="event.summary"
      :event-details="event"
      modal-max-width="22rem"
    />
  </div>
</template>

<script>
import SmallModal from '~/components/Tasks/SmallModal.vue'

export default {
  name: 'CalenderEvent',
  components: {
    SmallModal,
  },
  layout: 'main',
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
  data() {
    return {
      eventData: null,
    }
  },
}
</script>

<style scoped></style>
