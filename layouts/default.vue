<script setup lang="ts">
// import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
const currentYear = new Date().getFullYear();
// const breakpoints = useBreakpoints(breakpointsTailwind);
// const sm = breakpoints.smaller('sm');
// const md = breakpoints.greater('sm');
</script>
<template>
  <main><slot /></main>
  <p>©{{ currentYear }}</p>
</template>
