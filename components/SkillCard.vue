<template>
    <div class="skill-card">
        <h2 class="text-2xl text-start">{{ title }}</h2>
        <ul class="text-lg text-start">
            <li v-for="item in items" :key="item">- {{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.skill-card {
    transition: all 0.5s ease;
    color: #fff;
    padding: 1rem;
    margin: 2rem 2rem;    
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.125);
    
}

.skill-card:hover {
    border-radius: 3rem;
    border: 1px solid rgba(255, 255, 255, 0.4);
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}

</style>