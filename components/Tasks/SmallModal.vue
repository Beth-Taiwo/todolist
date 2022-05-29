<template>
  <div>
    <input type="checkbox" :id="smallModalId" class="modal-toggle" />
    <label :for="smallModalId" class="modal z-10 cursor-pointer bg-transparent">
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
            ><svg
              class="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="13px"
              height="13px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M345.994 42.019L179.531 208.481a646.3 646.3 0 0 0-154.206 248.04a24.845 24.845 0 0 0 6 25.708l.087.087a24.84 24.84 0 0 0 17.611 7.342a25.172 25.172 0 0 0 8.1-1.344a646.283 646.283 0 0 0 248.04-154.207L471.62 167.646A88.831 88.831 0 0 0 345.994 42.019ZM282.531 311.48A614.445 614.445 0 0 1 60.419 453.221a614.435 614.435 0 0 1 141.739-222.113l99.162-99.161l80.372 80.372Zm166.462-166.461l-44.674 44.673l-80.372-80.372l44.674-44.674a56.832 56.832 0 1 1 80.372 80.373Z"
              /></svg
            >Edit task</label
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
      return categoryColor
    },
  },

  methods: {},
}
</script>

<style></style>
