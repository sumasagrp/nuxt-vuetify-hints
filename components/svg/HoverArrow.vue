<template>
  <svg aria-hidden="true" class="HoverArrow" height="10" viewBox="0 0 10 10" width="10">
    <g fill-rule="evenodd">
      <path class="HoverArrow__linePath" d="M0 5h7" />
      <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4" />
    </g>
  </svg>
</template>

<style>
  .HoverArrow {
    --arrowSpacing: 5px;
    --arrowHoverTransition: 150ms cubic-bezier(0.215,0.61,0.355,1);
    --arrowHoverOffset: translateX(3px);
    --arrowTipTransform: none;
    --arrowLineOpacity: 0;
    position: relative;
    top: 1px;
    margin-left: var(--arrowSpacing);
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
}
</style>
