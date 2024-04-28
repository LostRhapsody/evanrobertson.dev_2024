<template>
    <div class="mx-auto text-center mt-24">
        <h1 class="text-4xl">evanrobertson.dev</h1>
        <p>Fullstack developer</p>
        <SkillCard
            v-for="card in skill_cards.cards"
            :key="card.title"
            :title="card.title"
            :items="card.skills"
        />
    </div>
</template>

<script setup>
const skill_cards = {
    title: "Skills",
    cards: [
        {
            title: "Attributes",
            skills: [
                "Systems Analysis",
                "Systems Design",
                "Project Management",
                "Documentation, Technical Writing",
                "Detailed understanding of back-end and front-end technologies.",
            ],
        },
        {
            title: "Frontend",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "Vue.js",
                "Nuxt",
                "React",
                "Tailwind CSS",
                "HTMX",
                "Vite",
                "Jquery",
            ],
        },
        {
            title: "Backend",
            skills: ["Node.js", "PostgreSQL"],
        },
        {
            title: "Languages",
            skills: [
                "JavaScript",
                "TypeScript",
                "Python",
                "Ruby",
                "Rust",
                "C++",
                "C",
                "C#",
                "Java",
                "PHP",
                "Progress OpenEdge ABL",
                "SQL",
                "Perl",
                "Lua",
                "Visual Basic",
                ".NET",
            ],
        },
        {
            title: "DevOps",
            skills: ["Docker"],
        },
        {
            title: "Web Servers",
            skills: ["Nginx", "Apache", "Nitro"],
        },
        {
            title: "Tools",
            skills: ["Git", "GitHub", "VS Code", "Vim", "Postman", "Insomnia"],
        },
    ],
};

const projects = {
    title: "Projects",
    cards: [
        {
            title: "Verif.ai",
            description: "Demo tool to authenticate businesses",
            tags: [
                "Vue.js",
                "Nuxt",
                "Tailwind CSS",
                "Chat-GPT",
                "LLM",
                ,
                "Vercel",
            ],
            links: [
                {
                    title: "Website",
                    url: "verifai-demo.vercel.app",
                },
            ],
        },
        {
            title: "Budget Budgie",
            description: "Open-Source Budgeting App (WIP)",
            tags: ["Vue.js", "Nuxt", "Tailwind CSS", "Typescript", "Vercel"],
            links: [
                {
                    title: "GitHub",
                    url: "https://github.com/LostRhapsody/expense_app",
                },
                {
                    title: "Website",
                    url: "https://budgetbudgie-evans-projects-6d5352ef.vercel.app/",
                },
            ],
        },
        {
            title: "Blake Cyber",
            description: "Cybersecurity company website",
            tags: ["Vite", "Javascript", "Tailwind CSS", "Vercel"],
            links: [
                {
                    title: "Website",
                    url: "https://blakecyber.com",
                },
            ],
        },
        {
            title: "Rhapsody Web Design",
            description: "Web design company website",
            tags: ["Typescript", "Tailwind"],
            links: [
                {
                    title: "Website",
                    url: "https://rhapsodyweb.ca/",
                },
            ],
        },
        {
            title: "Slothtime",
            description: "Minimalistic time tracking app",
            tags: ["Jquery", "CSS", "HTML", "Javascript"],
            links: [
                {
                    title: "Website",
                    url: "https://slothtime.dev/",
                },
            ],
        },
    ],
};
</script>

<style scoped>
:root {
}
</style>
