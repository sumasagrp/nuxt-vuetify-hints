<template>
  <SquareImageCard
    :right-column-style="{
      background: 'radial-gradient(circle, rgba(120,151,227,.4) 0%, rgba(190,20,260,.1) 100%)',
    }"
    avatar-height="650"
  >
    <div class="pa-md-5 h-full flex flex-col justify-center bg-greenx">
      <HomeMessageChip class="prevent-select" />

      <p class="search-apply-connect text-5xl lg:text-6xl sm:w-8/12 lg:w-auto  font-bold mb-5">
        Are you ready to  <span class="text-link"> shape </span>
        <span class="relative"> your path?</span>
      </p>

      <p class="we-made-job-hunting text-2xl">
        Ready to take your career to the next level?  <br>
        Discover awesome companies seeking talent
        like yours. Let's ignite that connection so you can find the right job.
      </p>

      <HomeHeroActionButtons />
    </div>

    <template #avatar>
      <!-- <HomeHeroLottie2 /> -->
    </template>
  </SquareImageCard>
</template>
