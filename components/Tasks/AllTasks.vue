<template>
  <div>
    <div class="text-center flex py-4">
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
</template>

<script>
export default {
  name: 'AllTasks',
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
        {
          tName: 'Study for exam',
          descp: 'Focus on history and science',
          categ: 'Education',
          created: '04/01/2022',
          due: '10/04/2022',
          status: 'In Progress',
          categColor: 'bg-[#8A904833]',
        },
        {
          tName: 'Plan for trip',
          descp: 'Select preferred destination',
          categ: 'Travel',
          created: '04/01/2022',
          due: '20/10/2022',
          status: 'Completed',
          categColor: 'bg-[#7367CB33]',
        },
        {
          tName: 'Clean out kitchen',
          descp: 'Sweep out dust from drawers',
          categ: 'House-keeping',
          created: '04/01/2022',
          due: '04/01/2022',
          status: 'Completed',
          categColor: 'bg-[#CB916733]',
        },
        {
          tName: 'Plan for trip',
          descp: 'Select preferred destination',
          categ: 'Travel',
          created: '04/01/2022',
          due: '20/10/2022',
          status: 'Completed',
          categColor: 'bg-[#7367CB33]',
        },
      ]
    },
  },
}
</script>

<style></style>
