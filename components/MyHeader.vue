<template>
    <div>
        <h1 class="header-text text-5xl lg:text-8xl py-8 my-8">{{ title }}</h1>
    </div>
</template>


<script setup>
defineProps(["title"]);
</script>


<style>

.header-text {
    /* background: -webkit-linear-gradient(#eee, #333); */
    background: -webkit-linear-gradient(#818181, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.5s ease;
    border-bottom: 3px solid rgba(255, 255, 255, 0);
}
.header-text:hover{
    border-bottom: 3px solid rgba(255, 255, 255, 1);
}
</style>