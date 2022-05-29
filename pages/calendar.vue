<template>
  <div class="text-systemBlack">
    <div class="flex">
      <div class="flex-grow flex flex-col mt-16 px-9">
        <p class="font-black text-2xl">Calendar</p>
        <div class="flex justify-between">
          <div><p>January 2022</p></div>
          <div>
            <select name="" id="">
              <option value="">Month view</option>
            </select>
          </div>
          <div>
            <label
              :for="modalId"
              class="cursor-pointer bg-lightBlue text-white px-6 py-1.5 mb-2.5 rounded-[10px] flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="18"
                height="18"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
                />
              </svg>
              <span class="ml-2"> Add task </span>
            </label>
          </div>
        </div>
        <div class="overflow-x-auto h-full">
          <div class="grid grid-cols-7 row-auto">
            <div
              class="p-4 font-bold text-xl h-16 border border-gray-200"
              v-for="(day, ind) in daysOfTheWeek"
              :key="day + ind"
            >
              {{ day }}
            </div>
            <Day
              v-for="(calData, inde) in calenderData"
              :key="calData + inde"
              :date="calData.date"
            >
              <template #events>
                <Event
                  v-for="event in calData.events"
                  :key="event.summary + event.description"
                  :event="event"
                />
              </template>
            </Day>
          </div>
        </div>
      </div>
      <div class="border-l-2 h-screen flex flex-col w-1/5">
        HEllo Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
        accusantium quis dolor eos ipsum repellat minus neque quod inventore
        explicabo ratione, aliquam magnam id fugit harum optio quisquam
        repudiandae quae.
      </div>
    </div>
  </div>
</template>

<script>
import Day from '~/components/Calendar/Days.vue'
import Event from '../components/Calendar/others/Event.vue'
import calenderData from '../components/Calendar/others/monthEvents.js'

export default {
  name: 'CalendarPage',
  layout: 'main',
  components: {
    Day,
    Event,
  },
  data() {
    return {
      monthData: [],
      modalId: 'modal-id',
      daysOfTheWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      firstWeek: [27, 28, 29, 30, 31, 1, 2],
      secondWeek: [3, 4, 5, 6, 7, 8, 9],
      thirdWeek: [10, 11, 12, 13, 14, 15, 16],
      fourthWeek: [17, 18, 19, 20, 21, 22, 23],
      fifthWeek: [24, 25, 26, 27, 28, 29, 30],
      sixthWeek: [31, 1, 2, 3, 4, 5, 6],
    }
  },
  computed: {
    calenderData() {
      return calenderData
    },
  },
}
</script>

<style scoped>
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 10px;
  height: 6rem;
}
</style>
