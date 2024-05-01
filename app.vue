<template>
    <div
        class="background"
    >
        <NuxtPage />
    </div>
</template>

<style>
.background {
    background-image: url("/background.webp");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    padding: 4rem;
}
/* mobile phone media query */
@media (max-width: 640px) {
    .background {
        padding: 1rem;
    }
}
</style>

<script setup>
</script>
