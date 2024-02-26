<script setup>
const { mdAndDown } = useDisplay()
</script>

<template>
  <svg
    v-if="!mdAndDown"
    class="abs-draw-underline left-2 top-16 mt-3"
    fill="none"
    height="26"
    viewBox="0 0 192 27"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="draw-svg"
      d="M2 11.7048C18.2979 10.2117 53.5106 7.37484 63.978 7.97207C74.4454 8.5693 97.7216 13.1983 103.231 11.7048C108.74 10.2112 119.07 4.98592 119.07 7.97207C119.07 11.7048 120.447 11.7049 127.333 9.4653C134.22 7.22568 141.106 5.73231 143.172 7.97207C145.238 10.2118 151.436 14.6907 171.407 7.97207C177.439 5.94253 181.633 4.55871 184.491 3.63573C189.202 2.11437 190 2 190 2"
      stroke="url(#paint0_linear)"
      stroke-linecap="round"
      stroke-width="4"
      style="
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 195px;
        stroke-dashoffset: 0.659371px;
      "
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        gradientUnits="userSpaceOnUse"
        x1="4.92228"
        x2="117.918"
        y1="6.99998"
        y2="5.57669"
      >
        <stop stop-color="#686CAB" />
        <stop offset="0.382068" stop-color="#D1366A" />
        <stop offset="1" stop-color="#E58F3F" />
      </linearGradient>
    </defs>
  </svg>
</template>
