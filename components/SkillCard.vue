<template>
    <div class="skill-card">
        <div class="grid grid-cols-2 gap-4">
            <UCard
                v-for="item in items"
                :key="item"
                :ui="{ background: 'dark:bg-gray-700/50 bg-gray-700/50', ring: 'ring-0' }"
            >
                <div class="flex items-center justify-center text-md lg:text-xl">
                    {{ item.name }}
                    <span
                        v-if="item.icon !== 'false' && item.icon !== 'progress'"
                        class="material-symbols-outlined text-4xl"
                    >
                        {{ item.icon }}
                    </span>
                    <span class="progress" v-else-if="item.icon === 'progress'">
                        <svg
                            class="text-green-600"
                            width="50px"
                            height="50px"
                            version="1.1"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                class="PRGS-branding-shape"
                                d="M95.52,29.33h0v51a3.93,3.93,0,0,1-1.78,3.08l-1.67,1L79.35,91.76l-8.59,5-1.78,1V42.6L21.23,15,43.91,1.93,46,0.74a3.94,3.94,0,0,1,3.56,0L81,18.9l14.51,8.38v2.05ZM58.36,48.72l-9.79-5.66L25.66,29.83a4,4,0,0,0-3.56,0L1.77,41.57,0,42.6,34.49,62.51v39.83l20.3-11.73,1.79-1a3.94,3.94,0,0,0,1.78-3.08V48.72ZM0,82.43L23.86,96.21V68.63Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </span>
                    <a v-else :href="item.link">
                        <img :src="item.image" alt="Skill Image" />
                    </a>
                </div>
            </UCard>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.skill-card {
    transition: all 0.5s ease;
    color: #fff;
    padding: 1rem;
    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.125);
    backdrop-filter: blur(16px) saturate(171%);
    -webkit-backdrop-filter: blur(16px) saturate(171%);
    background-color: rgba(195, 195, 195, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.125);
}

.skill-card:hover {
    /* border-radius: 3rem; */
    border: 1px solid rgba(255, 255, 255, 0.4);
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}
img {
    width: 50px;
    height: 50px;
    border-radius: 2rem;
    transition: all 0.5s ease;
    margin-left: 1rem;
}
</style>
