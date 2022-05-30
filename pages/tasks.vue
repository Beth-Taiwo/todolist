<template>
  <div class="py-4 px-9 text-systemBlack">
    <div class="w-full grid grid-cols-3">
      <div></div>

      <div class=""></div>

      <div class="flex justify-between">
        <div class="flex flex-1 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9m-4.27 13a2 2 0 0 1-3.46 0"
            />
          </svg>
        </div>
        <div class="avatar flex-1 justify-end items-center space-x-2">
          <div class="w-11 rounded-full">
            <img
              src="https://api.lorem.space/image/face?hash=92310"
              alt="Profile Image"
            />
          </div>
          <p class="">Janet Janetson</p>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <div class="mt-3 pl-2 pr-4">
      <p class="font-black text-2xl">Tasks</p>

      <div class="w-full mt-3">
        <nav
          class="w-full whitespace-nowrap overflow-x-auto flex justify-between border-b"
        >
          <ul class="flex justify-between w-1/2 mt-5 box-border px-4">
            <li
              v-for="nav in navList"
              :key="nav.component"
              class="font-semibold border-b-2 pb-0.5 px-1 hover:cursor-pointer hover:border-lightBlue"
              :class="
                currentComponent === nav.component
                  ? 'border-lightBlue text-lightBlue'
                  : 'border-white'
              "
              @click.prevent="changeCurrentComponent(nav.component)"
            >
              {{ nav.description }}
            </li>
          </ul>

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
        </nav>

        <div class="flex justify-between py-4">
          <div class="relative w-2/5">
            <svg
              class="w-4 h-4 absolute top-0 left-4 transform translate-y-4 text-systemGray"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              id=""
              type="search"
              name="search"
              class="input w-full rounded-[10px] bg-lightGrey pl-12"
              placeholder="Search anything"
            />
          </div>
          <div class="flex text-sm space-x-3">
            <div class="border p-2">
              <select id="" name="" class="px-1">
                <option value="">Filter by</option>
              </select>
            </div>
            <div class="border p-2">
              <select id="" name="" class="px-1">
                <option value="">Sort by</option>
              </select>
            </div>
          </div>
        </div>

        <Component :is="currentComponent" />
      </div>
    </div>
    <Modal :modal-id="modalId" :title="title" :btn-text="btnText" />
  </div>
</template>

<script>
import PastTasks from '~/components/Tasks/PastTasks.vue'
import UpcomingTasks from '~/components/Tasks/UpcomingTasks.vue'
import PresentTasks from '~/components/Tasks/PresentTasks.vue'
import AllTasks from '~/components/Tasks/AllTasks.vue'

export default {
  name: 'TasksPage',
  components: {
    PastTasks,
    UpcomingTasks,
    PresentTasks,
    AllTasks,
  },
  layout: 'main',
  data() {
    return {
      currentComponent: 'AllTasks',
      modalId: 'Add task',
      title: 'Add task',
      btnText: 'Add task',
      navList: [
        {
          component: 'AllTasks',
          description: 'All',
        },
        {
          component: 'PresentTasks',
          description: 'Today',
        },
        {
          component: 'UpcomingTasks',
          description: 'Upcoming',
        },

        {
          component: 'PastTasks',
          description: 'Past tasks',
        },
      ],
    }
  },

  methods: {
    changeCurrentComponent(component) {
      this.currentComponent = component
    },
  },
}
</script>

<style></style>
