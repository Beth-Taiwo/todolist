<template>
  <div class="dropdown dropdown-left">
    <button tabindex="0" class="m-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 32 32"
      >
        <circle cx="16" cy="8" r="2" fill="currentColor" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
        <circle cx="16" cy="24" r="2" fill="currentColor" />
      </svg>
    </button>
    <ul
      tabindex="0"
      class="dropdown-content menu py-0.5 px-1 shadow bg-gray-100 w-32 text-xs"
    >
      <button class="hover:bg-gray-300">Edit</button>
      <button class="hover:bg-gray-300">Delete</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
}
</script>

<style></style>
