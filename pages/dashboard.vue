<template>
  <div class="py-4 px-9 text-systemBlack">
    <div class="w-full grid grid-cols-3">
      <div></div>

      <div class="relative">
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
          type="search"
          name="search"
          id=""
          class="input w-full rounded-[10px] bg-lightGrey pl-12"
          placeholder="Search anything"
        />
      </div>

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
    <div class="mt-3">
      <p class="font-black text-2xl">Dashboard</p>
      <div
        class="pt-3 flex md:flex-col lg:flex-row justify-between items-stretch"
      >
        <div class="w-2/5 flex flex-col items-stretch">
          <p class="py-1.5 text-xl">Overview</p>
          <div
            class="flex-grow border rounded-[20px] text-center grid grid-cols-3 py-20"
          >
            <div class="p-5">
              <p class="text-[#6FC9D9] text-5xl font-semibold">30</p>
              <p class="text-2xl mt-4">Total tasks</p>
            </div>
            <div class="border-x-2 py-5 px-8">
              <p class="text-[#6FC9D9] text-5xl font-semibold">14</p>
              <p class="text-2xl mt-4">Completed</p>
            </div>
            <div class="p-5">
              <p class="text-[#6FC9D9] text-5xl font-semibold">7</p>
              <p class="text-2xl mt-4">In Progress</p>
            </div>
          </div>
        </div>
        <div class="h-full w-1/2">
          <p class="py-1.5 text-xl">Balance of tasks</p>
          <div class="border rounded-[20px] text-center flex p-8">
            <DoughnutChart />
          </div>
        </div>
      </div>
      <div class="pt-5">
        <div class="flex justify-between items-center">
          <p class="py-1.5 text-xl">Tasks list</p>
          <button class="text-lightBlue text-center">
            <span> View all </span>
            <svg
              class="w-5 h-5 inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
        <div class="border rounded-[20px] text-center flex py-4 px-8">
          <div class="overflow-x-auto w-full text-sm">
            <table class="w-full table-auto">
              <!-- head -->
              <thead>
                <tr>
                  <th class="text-left">
                    <span class="ml-3"> Task name </span>
                  </th>
                  <th class="text-left">Description</th>
                  <th>Category</th>
                  <th>Date Created</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th></th>
                </tr>
                <tr class="border"></tr>
              </thead>

              <tbody>
                <!-- rows -->
                <tr
                  v-for="(data, index) in tableData"
                  :key="data.tname + data.descp + index"
                  class=""
                  :class="
                    (index + 1) % 2 === 0 ? 'bg-[#F2F5FF66] rounded-[10px]' : ''
                  "
                >
                  <td class="text-left">
                    <label class="mx-3">
                      <input
                        type="checkbox"
                        class="checkbox rounded-none w-[18px] h-[18px]"
                      />
                    </label>
                    {{ data.tName }}
                  </td>
                  <td class="text-left">
                    {{ data.descp }}
                  </td>
                  <td class="text-center">
                    <div class="my-3">
                      <span
                        class="rounded-[10px] py-2 px-4"
                        :class="data.categColor"
                      >
                        {{ data.categ }}
                      </span>
                    </div>
                  </td>
                  <td>{{ data.created }}</td>
                  <td>{{ data.due }}</td>
                  <td>
                    <span
                      class="rounded-[21px] py-2 px-4"
                      :class="
                        data.status === 'Completed'
                          ? 'bg-[#F4FFF2]'
                          : 'bg-[#677ACB66]'
                      "
                    >
                      {{ data.status }}
                    </span>
                  </td>
                  <td>
                    <MenuItems />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutChart from '../components/DoughnutChart.vue'
export default {
  name: 'DashboardPage',
  layout: 'main',
  computed: {
    tableData() {
      return [
        {
          tName: 'Call gardener',
          descp: 'Ask Jonas to mow lawn today',
          categ: 'House-keeping',
          created: '04/01/2022',
          due: '18/02/2022',
          status: 'In Progress',
          categColor: 'bg-[#CB916733]',
        },
        {
          tName: 'Start investing',
          descp: 'Set aside money every week',
          categ: 'Money',
          created: '04/01/2022',
          due: '07/10/2021',
          status: 'Completed',
          categColor: 'bg-[#67CBAC33]',
        },
        {
          tName: 'Visit grandma',
          descp: 'Discuss best time to visit',
          categ: 'Family',
          created: '04/01/2022',
          due: '01/01/2022',
          status: 'Completed',
          categColor: 'bg-[#E58D8D33]',
        },
        {
          tName: 'Send out emails',
          descp: 'Remind Sarah about meeting',
          categ: 'Work',
          created: '04/01/2022',
          due: '10/11/2021',
          status: 'In Progress',
          categColor: 'bg-[#A867CB33]',
        },
      ]
    },
  },
  components: { DoughnutChart },
}
</script>

<style></style>
