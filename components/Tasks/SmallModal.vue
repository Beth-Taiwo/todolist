<template>
  <div>
    <input type="checkbox" :id="smallModalId" class="modal-toggle" />
    <label :for="smallModalId" class="modal z-20 cursor-pointer bg-transparent">
      <label
        class="modal-box relative"
        :style="`max-width:${modalMaxWidth}`"
        for=""
      >
        <div class="flex justify-between">
          <div
            class="py-2 px-8 rounded-[10px] bg-opacity-75"
            :class="`background-color: ${categoryColor[eventDetails.category]}`"
          >
            {{ eventDetails.category }}
          </div>
          <div
            class="py-2 px-8 rounded-[21px]"
            :class="
              eventDetails.status === 'Completed'
                ? 'bg-[#F4FFF2]'
                : 'bg-[#677ACB66]'
            "
          >
            {{ eventDetails.status }}
          </div>
        </div>
        <div class="p-2 space-y-2">
          <p class="text-lg font-semibold">
            {{ eventDetails.summary }}
          </p>
          <p class="">
            {{ eventDetails.description }}
          </p>
          <p class="text-sm text-[#29325A66] flex justify-between items-center">
            <span class="flex items-center"
              ><svg
                class="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              {{ eventDetails.time }}
            </span>
            <span class="flex items-center"
              ><svg
                class="mr-1 opacity-30 text-[#29325A66]"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="24.828"
                viewBox="0 0 20 24.828"
              >
                <g
                  id="Icon_feather-repeat"
                  data-name="Icon feather-repeat"
                  transform="translate(-2 0.414)"
                >
                  <path
                    id="Path_34"
                    data-name="Path 34"
                    d="M17,1l4,4L17,9"
                    fill="none"
                    stroke="#29325a"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Path_35"
                    data-name="Path 35"
                    d="M3,11V9A4,4,0,0,1,7,5H21"
                    fill="none"
                    stroke="#29325a"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Path_36"
                    data-name="Path 36"
                    d="M7,23,3,19l4-4"
                    fill="none"
                    stroke="#29325a"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Path_37"
                    data-name="Path 37"
                    d="M21,13v2a4,4,0,0,1-4,4H3"
                    fill="none"
                    stroke="#29325a"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g></svg
              >Repeats weekly</span
            >
          </p>
        </div>
        <div class="modal-action justify-center">
          <label
            :for="modalId"
            class="btn bg-lightBlue w-full py-1 px-5 h-auto text-lg font-light normal-case tracking-wide"
          >
            <svg
              class="mr-3"
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
                fill="#fff"
              />
            </svg>
            Edit task</label
          >
        </div>
      </label>
    </label>
    <Modal :modalId="modalId" :title="title" :btnText="btnText" />
  </div>
</template>

<script>
import categoryColor from '~/components/Calendar/others/categoryColor.js'
import Modal from '../Modal.vue'

export default {
  name: 'SmallModal',
  components: { Modal },
  props: {
    smallModalId: {
      type: String,
      default: 'sub-modal',
    },
    eventDetails: {
      type: Object,
      default: () => ({}),
    },
    modalMaxWidth: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      modalId: 'Edit task',
      title: 'Edit task',
      btnText: 'Edit task',
    }
  },
  computed: {
    categoryColor() {
      return categoryColor[0]
    },
  },

  methods: {},
}
</script>

<style></style>
