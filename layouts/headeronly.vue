<script setup lang="ts">
</script>
<template>
  <div>
    <Header :has-toc="false" />
    <PageLoadingIndicator :duration="2000" :throttle="200" :height="3" class="z-[1000] fixed top-[theme(headerHeight)] left-0 w-screen" style="opacity:1;top: 42px;" />
    <div class="pt-[theme(headerHeight)]">
      <slot></slot>
    </div>
  </div>
</template>