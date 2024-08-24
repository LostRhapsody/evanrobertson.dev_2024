<template>
    <div
        class="project-card fade-in"
        v-if="image !== undefined"
        @click="isOpen = true"
    >
        <div class="card" :id="title">
            <div class="card__content">
                <!-- <h2 class="card__name">{{ title }}</h2> -->
                <img :src="image" alt="Project Image" class="card__image" loading="lazy" />
            </div>
            <div class="card__name__image"></div>
            <div class="card__gloss"></div>
        </div>
        <UModal
            v-model="isOpen"
            fullscreen
            :ui="{
                background: 'dark:bg-gray-700/50',
            }"
        >
            <UCard
                :ui="{
                    base: 'h-full flex flex-col',
                    divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                    body: {
                        base: 'grow',
                    },
                    background: 'dark:bg-transparent bg-transparent',
                }"
            >
                <template #header>
                    <div
                        class="flex items-center justify-between flex-col lg:flex-row"
                    >
                        <div>
                            <h3
                                class="text-xl lg:text-5xl font-semibold leading-6 text-gray-900 dark:text-white"
                            >
                                <a
                                    :href="url"
                                    target="_blank"
                                    class="underline leading-normal"
                                >
                                    {{ title }}</a
                                >
                                <br />
                                <a
                                    v-if="github !== 'none'"
                                    :href="github"
                                    target="_blank"
                                    class="underline leading-normal"
                                    >Github</a
                                >
                            </h3>
                            <!-- New section for tags -->
                            <div class="flex flex-wrap mt-4 gap-2">
                                <span
                                    v-for="(tag, index) in tags"
                                    :key="index"
                                    class="px-3 py-1 text-sm font-semibold rounded-full tag-pill"
                                    :style="getTagStyle(tag)"
                                >
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                        <UButton
                            color="gray"
                            variant="outline"
                            @click="isOpen = false"
                        >
                            <span class="material-symbols-outlined text-5xl">
                                close
                            </span>
                        </UButton>
                    </div>
                </template>
                <div
                    class="flex-grow flex flex-col items-center justify-center"
                >
                    <p class="text-2xl font-bold my-16">{{ description }}</p>
                    <img :src="image" alt="Project Image" />
                </div>
            </UCard>
        </UModal>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// setup component params
const props = defineProps([
    "title",
    "description",
    "image",
    "url",
    "github",
    "tags",
]);
const isOpen = ref(false);
const tagColors = ref({});

// Function to generate random gradient for tags
const generateRandomGradient = () => {
    const hue1 = Math.floor(Math.random() * 360);
    const hue2 = (hue1 + 40) % 360; // Offset by 40 degrees for a nice contrast
    return `linear-gradient(135deg, hsl(${hue1}, 70%, 60%), hsl(${hue2}, 70%, 60%))`;
};

onMounted(() => {
    props.tags.forEach((tag) => {
        tagColors.value[tag] = generateRandomGradient();
    });
});

const getTagStyle = (tag) => {
    return {
        background: tagColors.value[tag],
        color: "white",
        textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
    };
};
</script>

<style scoped>
.project-card {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: perspective(800px);
    transform: perspective(800px);
}

.fade-in {
    opacity: 0;
    animation: fade-in 1s forwards;
}

@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.card {
    width: 580px;
    height: 380px;
    padding: 2rem;
    border-radius: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(16px);

    /* parallax */
    box-shadow: 20px 20px 75px rgba(0, 0, 0, 0.5);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: 0.1s;
    transition: 0.1s;

    .card__gloss {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        transform: translateZ(1px);
        z-index: 2;
    }

    .card__content {
        width: 100%;
        height: 100%;
        text-align: center;

        > * {
            transform: translateZ(75px);
            color: white;
        }

        .card__image {
            width: 100%;
            height: 100%;
            border-radius: 2rem;
        }

        .card__name {
            font-family: "Arial";
            font-weight: bold;
            letter-spacing: 2px;
            text-transform: uppercase;
        }
    }
}
img {
    border-radius: 2rem;
}
.tag-pill {
    transition: all 0.3s ease;
}

.tag-pill:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
/* Mobile phone screen media query */
@media screen and (max-width: 600px) {
    .card {
        width: 100%;
        height: auto;
        padding: 0.5rem;
    }
}
</style>
