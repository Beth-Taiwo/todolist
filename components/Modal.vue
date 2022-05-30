<template>
  <div class="text-systemBlack">
    <input :id="modalId" type="checkbox" class="modal-toggle" />
    <label :for="modalId" class="modal cursor-pointer">
      <label for="" class="modal-box relative p-0" style="max-width: 940px">
        <h3 class="font-bold text-2xl pb-4 pt-5 px-7 text-left">{{ title }}</h3>
        <div class="divider my-0"></div>
        <div class="px-7 pb-7 pt-5">
          <div class="grid grid-cols-2 grid-rows-4 gap-x-16 gap-y-2">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-lg font-semibold">Title</span>
              </label>
              <input
                type="text"
                placeholder="Name your task"
                class="input input-bordered w-full py-4 px-5 h-auto text-lg"
              />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-lg font-semibold">Schedule</span>
              </label>
              <div class="relative">
                <input
                  type="datetime"
                  placeholder="Select date and time"
                  class="input input-bordered w-full py-4 px-12 h-auto text-lg"
                />
                <svg
                  class="absolute top-0 left-4 transform translate-y-5"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="19"
                  height="21"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <rect width="20" height="18" x="2" y="4" rx="4" />
                    <path d="M8 2v4m8-4v4M2 10h20" />
                  </g>
                </svg>
              </div>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-lg font-semibold">Category</span>
              </label>
              <select
                class="select select-bordered w-full font-normal py-4 px-5 h-auto text-lg"
              >
                <option disabled selected>Select category</option>
                <option>Travel</option>
                <option>Family</option>
                <option>House-keeping</option>
                <option>Work</option>
              </select>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-lg font-semibold">Frequency</span>
              </label>
              <div class="relative">
                <select
                  class="select select-bordered w-full font-normal py-4 px-12 h-auto text-lg"
                >
                  <option disabled selected>Select task frequency</option>
                </select>

                <svg
                  class="absolute top-0 left-4 transform translate-y-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
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
                  </g>
                </svg>
              </div>
            </div>
            <div class="form-control w-full row-span-2">
              <label class="label">
                <span class="label-text text-lg font-semibold"
                  >Description</span
                >
              </label>
              <textarea
                type="text"
                placeholder="Add description"
                class="input input-bordered w-full py-4 px-5 h-full text-lg"
              ></textarea>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-lg font-semibold"
                  >Priority <i class="font-extralight">(Optional)</i></span
                >
              </label>
              <div class="relative">
                <select
                  class="select select-bordered w-full font-normal py-4 px-12 h-auto text-lg"
                >
                  <option disabled selected>None</option>
                </select>
                <svg
                  class="absolute top-0 left-4 transform translate-y-5"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="21px"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="19" r="2" fill="currentColor" />
                  <path fill="currentColor" d="M10 3h4v12h-4z" />
                </svg>
              </div>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-lg font-semibold"
                  >Status <i class="font-extralight">(Optional)</i></span
                >
              </label>
              <select
                class="select select-bordered w-full font-normal py-4 px-5 h-auto text-lg"
              >
                <option disabled selected>Select task status</option>
              </select>
            </div>
          </div>
          <div class="modal-action justify-center mt-16">
            <label
              :for="modalId"
              class="btn bg-lightBlue w-full py-4 px-5 h-auto text-3xl normal-case tracking-wide"
              >{{ btnText }}</label
            >
          </div>
        </div>
      </label>
    </label>
  </div>
</template>

<script>
export default {
  name: 'TaskModal',
  props: {
    title: {
      type: String,
      default: 'Add task',
    },
    btnText: {
      type: String,
      default: 'Add task',
    },
    modalId: {
      type: String,
      default: 'task-modal',
    },
  },
}
</script>

<style></style>
