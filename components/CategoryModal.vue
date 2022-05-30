<template>
  <div>
    <input type="checkbox" :id="categoryModalId" class="modal-toggle" />
    <label :for="categoryModalId" class="modal cursor-pointer">
      <label class="modal-box relative p-0" for="">
        <h3 class="font-bold text-2xl pb-4 pt-5 px-7 text-left">{{ title }}</h3>
        <div class="divider my-0"></div>
        <div class="px-7 pb-7 pt-3">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text text-lg">Category name</span>
            </label>
            <input
              v-model="categoryName"
              type="text"
              placeholder="Category name"
              class="input input-bordered w-full py-4 px-5 h-auto text-lg"
            />
            <label class="label mt-1">
              <span class="label-text text-lg">Pick color</span>
            </label>
            <div>
              <button
                v-for="(categColor, index) in categoryColor"
                :key="index"
                class="w-7 h-7 rounded-full inline-block mr-4 cursor-pointer border"
                :class="[
                  categColor,
                  selectedColor === categColor
                    ? 'border-black'
                    : 'border-white',
                ]"
                @click="setCategoryColor(categColor)"
              ></button>
            </div>
          </div>
          <div class="modal-action justify-center" @click="addToCategory">
            <label
              :for="categoryModalId"
              class="btn bg-lightBlue w-full py-4 px-5 h-auto text-2xl normal-case tracking-wide"
              >{{ btnText }}</label
            >
          </div>
        </div>
      </label>
    </label>
  </div>
</template>

<script>
import categoryColor from './Calendar/others/categoryColor'
export default {
  name: 'CategoryModal',
  props: {
    categoryModalId: {
      type: String,
      default: 'sub-modal',
    },
    title: {
      type: String,
      default: 'Add category',
    },
    btnText: {
      type: String,
      default: 'Add category',
    },
  },
  data() {
    return {
      selectedColor: '',
      categoryName: '',
    }
  },
  emits: ['add-to-category'],
  computed: {
    categoryColor() {
      return categoryColor[0]
    },
  },
  methods: {
    setCategoryColor(color) {
      this.selectedColor = color
    },
    addToCategory() {
      this.$emit('add-to-category', {
        name: this.categoryName,
        color: this.selectedColor,
      })
    },
  },
}
</script>

<style></style>
