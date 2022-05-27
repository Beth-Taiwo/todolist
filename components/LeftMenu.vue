<template>
  <div class="h-screen w-[263px] sidebar bg-lightBlue text-lightGrey">
    <div class="flex flex-col h-full">
      <div class="w-full ml-9 my-14 text-4xl">
        <h1>TodoList</h1>
      </div>

      <div class="flex-grow flex flex-col justify-between pb-2">
        <div id="menu" class="w-full flex flex-col pt-2">
          <nuxt-link
            v-for="menu in menuItems"
            :key="menu.name"
            class="space-x-2.5 space-y-1.5 mx-5 py-2.5 px-4 focus:outline-none flex items-center rounded-md hover:bg-[#29325A66] bg-opacity-50"
            :to="menu.url"
            :title="menu.name"
          >
            <svg
              v-if="menu.name === 'Settings'"
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <svg
              v-else-if="menu.name === 'Calendar'"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                id="MDI_calendar-outline"
                data-name="MDI / calendar-outline"
                transform="translate(-4505 -1266)"
              >
                <g
                  id="Boundary"
                  transform="translate(4505 1266)"
                  fill="#f2f5ff"
                  stroke="rgba(0,0,0,0)"
                  stroke-width="1"
                  opacity="0"
                >
                  <rect width="24" height="24" stroke="none" />
                  <rect x="0.5" y="0.5" width="23" height="23" fill="none" />
                </g>
                <path
                  id="Path_calendar-outline"
                  data-name="Path / calendar-outline"
                  d="M19,4H18V2H16V4H8V2H6V4H5A2,2,0,0,0,3,6V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2m0,16H5V10H19V20M19,8H5V6H19V8m-7,5h5v5H12Z"
                  transform="translate(4505 1266)"
                  fill="#f2f5ff"
                />
              </g>
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                fill="#f2f5ff"
                stroke="rgba(0,0,0,0)"
                :d="menu.path"
              ></path>
            </svg>
            <span class="">{{ menu.name }}</span>
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            to="/logout"
            class="space-x-2.5 space-y-1.5 mx-5 py-2.5 px-4 focus:outline-none flex items-center"
          >
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
                stroke-width="1"
                fill="#f2f5ff"
                stroke="rgba(0,0,0,0)"
                d="M9.92,15.59,7.33,13H17V11H7.33L9.92,8.41,8.5,7l-5,5,5,5,1.42-1.41M5,3A2,2,0,0,0,3,5V9.67l2-2V5H19V19H5V16.33l-2-2V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5a1.993,1.993,0,0,0-2-2Z"
              ></path>
            </svg>

            <span>Log out</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          name: 'Dashboard',
          url: '/dashboard',
          path: `M19,5V7H15V5h4M9,5v6H5V5H9m10,8v6H15V13h4M9,17v2H5V17H9M21,3H13V9h8V3M11,3H3V13h8V3m10,8H13V21h8V11M11,15H3v6h8Z`,
        },
        {
          name: 'Tasks',
          url: '/tasks',
          path: `M4,7V21H18v2H4a2.006,2.006,0,0,1-2-2V7H4m8.8,8.35-3.3-3.3,1.4-1.4,1.9,1.9,4.3-4.3,1.4,1.4-5.7,5.7M20,3a2.006,2.006,0,0,1,2,2V17a2.006,2.006,0,0,1-2,2H8a2.006,2.006,0,0,1-2-2V5A2.006,2.006,0,0,1,8,3h3.18a2.988,2.988,0,0,1,5.64,0H20M14,3a1,1,0,1,0,1,1,1,1,0,0,0-1-1M10,7V5H8V17H20V5H18V7Z`,
        },
        {
          name: 'Calendar',
          url: '/calendar',
          icons: `M19,4H18V2H16V4H8V2H6V4H5A2,2,0,0,0,3,6V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2m0,16H5V10H19V20M19,8H5V6H19V8m-7,5h5v5H12Z`,
        },

        {
          name: 'Settings',
          url: '/settings',
          path: `M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z`,
        },
        {
          name: 'Support',
          url: '/support',
          path: `M11,18h2V16H11ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20ZM12,6a4,4,0,0,0-4,4h2a2,2,0,0,1,4,0c0,2-3,1.75-3,5h2c0-2.25,3-2.5,3-5A4,4,0,0,0,12,6Z`,
        },
      ],
    }
  },
  computed: {
    currentPage() {
      return `/${this.$route.name}`
    },
  },
}
</script>

<style scoped>
a.nuxt-link-exact-active {
  background: #29325a66;
}
.sidebar {
  overflow-x: hidden;
  white-space: nowrap;
  transition: width 1s;
}
</style>
