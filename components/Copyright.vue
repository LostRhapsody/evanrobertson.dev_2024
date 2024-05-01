<template>
   <div class="my-12 mx-4 text-center text-white">
      Copyright© <span>{{ current_year }}</span>, Evan Robertson
   </div>
</template>

<script setup>
const current_year = new Date().getFullYear();
</script>