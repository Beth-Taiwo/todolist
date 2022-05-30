<template>
  <div class="text-systemBlack">
    <div class="flex">
      <div class="flex-grow flex flex-col mt-16 px-9 space-y-2.5">
        <p class="font-black text-2xl ml-11">Calendar</p>
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <svg
              class="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p class="text-xl">January 2022</p>
            <svg
              class="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div>
            <select
              name=""
              id=""
              v-model="selectedView"
              class="border py-2.5 px-3 mr-1 mb-3 rounded-[5px]"
            >
              <option value="">Month view</option>
              <option
                :value="viewType"
                v-for="(viewType, x) in calendarView"
                :key="x"
              >
                {{ viewType }}
              </option>
            </select>
          </div>
          <div>
            <label
              :for="modalId"
              class="cursor-pointer bg-lightBlue text-white px-6 py-2 mb-2.5 rounded-[10px] flex items-center justify-center"
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
      <div class="border-l-2 h-screen flex flex-col w-1/5 pl-8 pr-12 pt-12">
        <div class="flex justify-between items-center my-2">
          <p class="font-black text-2xl">Categories</p>
          <svg
            class="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="17.138"
            height="17.138"
            viewBox="0 0 17.138 17.138"
          >
            <path
              id="Icon_metro-pencil"
              data-name="Icon metro-pencil"
              d="M15.888,1.071a2.678,2.678,0,0,1,2.142,4.285L16.96,6.427,13.211,2.678l1.071-1.071a2.666,2.666,0,0,1,1.607-.536ZM2.5,13.389l-1.071,4.82,4.82-1.071L16.156,7.23,12.407,3.481,2.5,13.389ZM13.4,7.156l-7.5,7.5-.923-.923,7.5-7.5Z"
              transform="translate(-1.428 -1.071)"
              fill="#29325a"
            />
          </svg>
        </div>
        <div class="">
          <div
            v-for="(categ, index) in category"
            :key="index"
            class="flex items-center text-lg mt-4"
          >
            <p class="w-5 h-5 rounded-full" :class="[categ.color]"></p>
            <p class="ml-4">
              {{ categ.name }}
            </p>
          </div>
          <label
            for="categId"
            class="cursor-pointer text-lightBlue text-lg mt-5 flex items-center"
          >
            Add category<svg
              class="ml-3"
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
          </label>
        </div>
      </div>
    </div>
    <Modal :modalId="modalId" btnText="Add task" title="Add task" />
    <CategoryModal
      categoryModalId="categId"
      btnText="Add category"
      title="Add category"
      @add-to-category="addCategory"
    />
  </div>
</template>

<script>
import Day from '~/components/Calendar/Days.vue'
import Event from '../components/Calendar/others/Event.vue'
import calenderData from '../components/Calendar/others/monthEvents.js'
import Modal from '../components/Modal.vue'
import CategoryModal from '~/components/CategoryModal.vue'

export default {
  name: 'CalendarPage',
  layout: 'main',
  components: {
    Day,
    Event,
    Modal,
    CategoryModal,
  },
  data() {
    return {
      monthData: [],
      modalId: 'modal-id',
      daysOfTheWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      calendarView: ['Day view', 'Week view', 'Month view', 'Year view'],
      selectedView: 'Month view',
      category: [
        { name: 'Family', color: 'bg-[#E58D8D33]' },
        { name: 'Money', color: 'bg-[#67CBAC33]' },
        { name: 'Work', color: 'bg-[#A867CB33]' },
        { name: 'Education', color: 'bg-[#8A904833]' },
        { name: 'Travel', color: 'bg-[#7367CB33]' },
        { name: 'House-keeping', color: 'bg-[#CB916733]' },
      ],
    }
  },

  computed: {
    calenderData() {
      return calenderData
    },
    // category() {
    //   return [
    //     { name: 'Family', color: 'bg-[#E58D8D33]' },
    //     { name: 'Money', color: 'bg-[#67CBAC33]' },
    //     { name: 'Work', color: 'bg-[#A867CB33]' },
    //     { name: 'Education', color: 'bg-[#8A904833]' },
    //     { name: 'Travel', color: 'bg-[#7367CB33]' },
    //     { name: 'House-keeping', color: 'bg-[#CB916733]' },
    //   ]
    // },
  },
  methods: {
    addCategory(category) {
      this.category.push(category)
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
