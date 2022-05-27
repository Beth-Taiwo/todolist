<template>
  <div class="bg-slate-500 w-full flex justify-center">
    <div
      class="flex justify-center items-center bg-white py-7 w-[657px] rounded-[20px]"
    >
      <div class="w-[550px] flex flex-col items-center space-y-8">
        <h1 class="text-6xl">TodoList</h1>

        <button
          class="btn btn-outline capitalize border-[#677acb] h-[76px] w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="41px"
            height="41px"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
          <span class="ml-4"> Continue with Google </span>
        </button>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="w-full"
            height="22"
            viewBox="0 0 551 22"
          >
            <g
              id="Group_8"
              data-name="Group 8"
              transform="translate(-684.5 -347)"
            >
              <text
                id="Or_Sign_in_with_Email"
                data-name="Or Sign in with Email"
                transform="translate(886 363)"
                fill="rgba(41,50,90,0.4)"
                font-size="16"
                font-family="Avenir-Book, Avenir"
              >
                <tspan x="0" y="0">Or Sign in with Email</tspan>
              </text>
              <line
                id="Line_1"
                data-name="Line 1"
                x2="185"
                transform="translate(685 358)"
                fill="none"
                stroke="rgba(41,50,90,0.4)"
                stroke-linecap="round"
                stroke-width="1"
              />
              <line
                id="Line_2"
                data-name="Line 2"
                x2="184"
                transform="translate(1051 358)"
                fill="none"
                stroke="rgba(41,50,90,0.4)"
                stroke-linecap="round"
                stroke-width="1"
              />
            </g>
          </svg>
        </div>

        <div class="form-control w-full">
          <label for="email" class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            id="email"
            type="text"
            placeholder="mary@example.com"
            class="input input-bordered w-full h-[76px]"
          />
          <label for="password" class="label mt-3">
            <span class="label-text">Password</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            class="input input-bordered w-full h-[76px]"
          />
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.828"
            height="24.828"
            viewBox="0 0 24.828 24.828"
          >
            <g
              id="Icon_feather-eye-off"
              data-name="Icon feather-eye-off"
              transform="translate(0.414 0.414)"
            >
              <path
                id="Path_7"
                data-name="Path 7"
                d="M17.94,17.94A10.07,10.07,0,0,1,12,20C5,20,1,12,1,12A18.45,18.45,0,0,1,6.06,6.06M9.9,4.24A9.12,9.12,0,0,1,12,4c7,0,11,8,11,8a18.5,18.5,0,0,1-2.16,3.19m-6.72-1.07A3,3,0,1,1,9.88,9.88"
                fill="none"
                stroke="#29325a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <path
                id="Path_8"
                data-name="Path 8"
                d="M1,1,23,23"
                fill="none"
                stroke="#29325a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </g>
          </svg> -->
          <div class="form-control flex-row justify-between">
            <label class="label cursor-pointer">
              <input
                type="checkbox"
                checked="checked"
                class="checkbox-[18px] border border-black rounded-none bg-transparent"
              />
              <span class="label-text pl-[10px] text-[#29325A]"
                >Remember me</span
              >
            </label>
            <label class="label inline cursor-pointer">
              <span class="label-text text-[#677acb]">Forgot password?</span>
            </label>
          </div>
        </div>

        <button class="btn bg-[#677acb] capitalize h-[76px] w-full">
          <span class="font-extrabold">Login</span>
        </button>

        <div class="text-center">
          <span>Not registered yet?</span>
          <span class="text-[#677acb] ml-0.5">Create an Account</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>

<style></style>
