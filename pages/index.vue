<template>
    <div class="mx-auto text-center" id="home">
        <MyNav />
        <div
            class="blur__element text-white bg-white/20 h-[80vh] my-20 flex justify-center items-center flex-col"
        >
            <MyHeader :title="header_titles.Home" />
            <p class="text-xl">Scroll down to learn more.</p>
            <span class="material-symbols-outlined text-4xl animate-bounce mt-4"
                >arrow_downward</span
            >
        </div>
        <AboutMe id="about" />
        <MyHeader id="proficiencies" :title="header_titles.Proficiencies" />
        <div class="flex items-center justify-center text-md lg:text-xl font-extrabold pb-4">
            These are technologies I've worked with the most, which I try and focus most of my learning and efforts on.
        </div>
        <div class="prof-card space-y-8">
            <UCard
                v-for="item in proficiencies"
                class="prof-card-child"
                :key="item"
                :ui="{
                    background: 'dark:bg-gray-700/50 bg-gray-700/50',
                    ring: 'ring-0',
                }"
            >
                <div
                    class="flex items-center justify-center text-md lg:text-xl"
                >
                    {{ item.label }}
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
                <p class="text-white text-lg block">
                    {{ item.description }}
                </p>
            </UCard>
        </div>
        <MyHeader :title="header_titles.Projects" />
        <div id="projects" class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
            <ProjectCard
                v-for="card in projects1.cards"
                :key="card.title"
                :title="card.title"
                :description="card.description"
                :tags="card.tags"
                :image="card.image"
                :url="card.links[0].url"
                :github="card.links[1].url"
            />
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
            <ProjectCard
                v-for="card in projects2.cards"
                :key="card.title"
                :title="card.title"
                :description="card.description"
                :tags="card.tags"
                :image="card.image"
                :url="card.links[0].url"
                :github="card.links[1].url"
            />
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
            <ProjectCard
                v-for="card in projects3.cards"
                :key="card.title"
                :title="card.title"
                :description="card.description"
                :tags="card.tags"
                :image="card.image"
                :url="card.links[0].url"
                :github="card.links[1].url"
            />
        </div>
        <MyHeader id="tech" :title="header_titles.Tech" />
        <UTabs
            class="my-8"
            :items="skill_tabs"
            :ui="{
                list: {
                    tab: {
                        inactive: 'dark:text-black text-black',
                        active: 'dark:text-white text-white',
                    },
                    background: 'dark:bg-gray-300/70 bg-gray-300/70',
                    marker: {
                        background: 'dark:bg-gray-900/70 bg-gray-900/70',
                    },
                },
            }"
        >
            <template #item="{ item }">
                <p class="text-white text-lg block md:hidden">
                    {{ item.label }}
                </p>
                <SkillCard
                    :key="item.item.title"
                    :title="item.item.title"
                    :items="item.item.skills"
                />
            </template>
        </UTabs>
        <p class="text-white">
            Icons by <a target="_blank" href="https://icons8.com">Icons8</a>
        </p>
        <MyHeader id="skills" :title="header_titles.Skills" />
        <SkillCard
            :key="skill_cards.cards[0].title"
            :title="skill_cards.cards[0].title"
            :items="skill_cards.cards[0].skills"
        />
        <Contact id="contact" />
        <Copyright />
    </div>
</template>

<script setup>
// card parallax 3D effect script
onMounted(() => {
    // limit the number of card updates per second for performance
    var lastUpdate = Date.now();
    var card = document.querySelectorAll(".card"),
        width = window.innerWidth,
        height = window.innerHeight;

    /**
     * Bind the mousemove event to the cards
     */
    function bindMouse() {
        // loop through all the cards and add the mousemove event listener
        card.forEach((element) => {
            element.addEventListener("mousemove", (event) => {
                // only perform 1 update every 100ms
                if (Date.now() - lastUpdate > 100) {
                    lastUpdate = Date.now();
                    return;
                }
                // reset the card if you're no longer hovering over it
                if (event.target.className !== "card__gloss") {
                    light(0, 0, event.target.parentElement.id);
                    tilt(0, 0);
                    return;
                }
                let x = event.clientX - width / 2,
                    y = event.clientY - height / 2,
                    id = event.target.parentElement.id;

                light(x, y, id);
                tilt(x, y, id);
            });
        });
    }

    /**
     * constantly loops, checking to see if mouse is hovering over a card
     * if not, reset the card
     */
    function loop() {
        requestAnimationFrame(loop);
        card.forEach((element) => {
            if (element.querySelector(".card__gloss:hover") === null) {
                light(0, 0, element.id);
                tilt(0, 0, element.id);
            }
        });
    }

    /**
     * Tilts the lighting effect of the card based on the mouse position
     * @param {number} x x position of the mouse
     * @param {number} y y position of the mouse
     * @param {string} id id of the current card
     */
    function light(x, y, id) {
        let angle = (Math.atan2(y, x) * 180) / Math.PI - 90;
        let this_card = document.getElementById(id);
        let this_gloss = this_card.querySelector(".card__gloss");
        this_gloss.style.background =
            "linear-gradient(" +
            angle +
            "deg, rgba(255, 255, 255," +
            (y / height) * 0.9 +
            ") 0%, rgba(255, 255, 255, 0) 80%)";
    }

    /**
     * Tilts the card based on the mouse position
     * @param {number} x x position of the mouse
     * @param {number} y y position of the mouse
     * @param {string} id id of the current card
     */
    function tilt(x, y, id) {
        let force = 80,
            rx = (x / width) * force,
            ry = (y / height) * -force;

        let this_card = document.getElementById(id);
        this_card.style.transform =
            "rotateY(" + rx + "deg) rotateX(" + ry + "deg)";
        // content.style.transform = 'translateX(' + (rx * .75) + 'px) translateY(' + (ry * .75) + 'px)';
    }

    bindMouse();
    loop();
});

const skill_cards = {
    title: "Skills",
    cards: [
        {
            title: "Attributes",
            skills: [
                {
                    name: "Systems Analysis",
                    icon: "search_insights",
                },
                {
                    name: "Systems Design",
                    icon: "devices",
                },
                {
                    name: "Project Management",
                    icon: "assignment_turned_in",
                },
                {
                    name: "Documentation, Technical Writing",
                    icon: "edit_document",
                },
                {
                    name: "Detailed understanding of back-end and front-end technologies.",
                    icon: "school",
                },
            ],
        },
        {
            title: "Frontend",
            skills: [
                {
                    name: "HTML",
                    icon: "false",
                    image: "/html.svg",
                    link: "https://icons8.com/icon/20909/html-5",
                },
                {
                    name: "CSS",
                    icon: "false",
                    image: "/css-logo.svg",
                    link: "https://icons8.com/icon/21278/css3",
                },
                {
                    name: "JavaScript",
                    icon: "false",
                    image: "/javascript.svg",
                    link: "https://icons8.com/icon/108784/javascript",
                },
                {
                    name: "Vue.js",
                    icon: "false",
                    image: "/vue-js.svg",
                    link: "https://icons8.com/icon/rY6agKizO9eb/vue-js",
                },
                {
                    name: "Nuxt",
                    icon: "false",
                    image: "/nuxt-js.svg",
                    link: "https://icons8.com/icon/nvrsJYs7j9Vb/nuxt-js",
                },
                {
                    name: "React",
                    icon: "false",
                    image: "/react.svg",
                    link: "https://icons8.com/icon/NfbyHexzVEDk/react",
                },
                {
                    name: "Tailwind CSS",
                    icon: "false",
                    image: "/tailwind-css.svg",
                    link: "https://icons8.com/icon/4PiNHtUJVbLs/tailwind-css",
                },
                {
                    name: "Vite",
                    icon: "false",
                    image: "/vite-logo.svg",
                    link: "https://icons8.com/icon/dJjTWMogzFzg/vite",
                },
                {
                    name: "Jquery",
                    icon: "false",
                    image: "/jquery.svg",
                    link: "https://icons8.com/icon/40253/jquery",
                },
                {
                    name: "Probably more",
                    icon: "unknown_document",
                },
            ],
        },
        {
            title: "Backend",
            skills: [
                {
                    name: "Node.js",
                    icon: "false",
                    image: "/node-js.svg",
                    link: "https://icons8.com/icon/hsPbhkOH4FMe/node-js",
                },
                {
                    name: "PostgreSQL",
                    icon: "false",
                    image: "/postgresql.svg",
                    link: "https://icons8.com/icon/25010/postgresql",
                },
                {
                    name: "Progress OpenEdge",
                    icon: "progress",
                    image: "/progress.svg",
                    link: "https://www.progress.com/openedge",
                },
                {
                    name: "Probably more",
                    icon: "unknown_document",
                },
            ],
        },
        {
            title: "Languages",
            skills: [
                {
                    name: "HTML",
                    icon: "false",
                    image: "/html.svg",
                    link: "https://icons8.com/icon/20909/html-5",
                },
                {
                    name: "CSS",
                    icon: "false",
                    image: "/css-logo.svg",
                    link: "https://icons8.com/icon/21278/css3",
                },
                {
                    name: "JavaScript",
                    icon: "false",
                    image: "/javascript.svg",
                    link: "https://icons8.com/icon/108784/javascript",
                },
                {
                    name: "TypeScript",
                    icon: "false",
                    image: "/typescript.svg",
                    link: "https://icons8.com/icon/uJM6fQYqDaZK/typescript",
                },
                {
                    name: "Python",
                    icon: "false",
                    image: "/python.svg",
                    link: "https://icons8.com/icon/13441/python",
                },
                {
                    name: "Ruby",
                    icon: "false",
                    image: "/ruby.svg",
                    link: "https://icons8.com/icon/22189/ruby-programming-language",
                },
                {
                    name: "Rust",
                    icon: "false",
                    image: "/rust.svg",
                    link: "https://icons8.com/icon/haeAxVQEIg0F/rust-programming-language",
                },
                {
                    name: "C++",
                    icon: "false",
                    image: "/c++.svg",
                    link: "https://icons8.com/icon/55199/c%2B%2B",
                },
                {
                    name: "C",
                    icon: "false",
                    image: "/c.svg",
                    link: "https://icons8.com/icon/40670/c-programming",
                },
                {
                    name: "C#",
                    icon: "false",
                    image: "/c-sharp-logo.svg",
                    link: "https://icons8.com/icon/55251/c-sharp-logo",
                },
                {
                    name: "Java",
                    icon: "false",
                    image: "/java.svg",
                    link: "https://icons8.com/icon/13679/java",
                },
                {
                    name: "PHP",
                    icon: "false",
                    image: "/php.svg",
                    link: "https://icons8.com/icon/39852/php-logo",
                },
                {
                    name: "Progress OpenEdge ABL",
                    icon: "progress",
                    image: "/progress.svg",
                    link: "https://www.progress.com/openedge",
                },
                {
                    name: "SQL",
                    icon: "false",
                    image: "/sql.svg",
                    link: "https://icons8.com/icon/qGUfLiYi1bRN/my-sql",
                },
                {
                    name: "Perl",
                    icon: "false",
                    image: "/perl.gif",
                    link: "https://www.perl.org",
                },
                {
                    name: "Lua",
                    icon: "false",
                    image: "/lua.svg",
                    link: "https://icons8.com/icon/KppI8aNv6oQe/lua-language",
                },
                {
                    name: "Visual Basic",
                    icon: "false",
                    image: "/visual-basic.svg",
                    link: "https://icons8.com/icon/ezj3zaVtImPg/visual-studio",
                },
                {
                    name: ".NET",
                    icon: "false",
                    image: "/dot-net.svg",
                    link: "https://icons8.com/icon/1BC75jFEBED6/.net-framework",
                },
            ],
        },
        {
            title: "DevOps",
            skills: [
                {
                    name: "Docker",
                    icon: "false",
                    image: "/docker.svg",
                    link: "https://icons8.com/icon/22813/docker",
                },
                {
                    name: "Probably more",
                    icon: "unknown_document",
                },
            ],
        },
        {
            title: "Web Servers",
            skills: [
                {
                    name: "Nginx",
                    icon: "false",
                    image: "/nginx.svg",
                    link: "https://icons8.com/icon/t2x6DtCn5Zzx/nginx",
                },
                {
                    name: "Apache",
                    icon: "false",
                    image: "/apache.svg",
                    link: "https://icons8.com/icon/QFcVqyh6lBh6/tomcat",
                },
                {
                    name: "Nitro",
                    icon: "false",
                    image: "/nitro.svg",
                    link: "https://nitro.unjs.io/",
                },
                {
                    name: "Probably more",
                    icon: "unknown_document",
                },
            ],
        },
        {
            title: "Tools",
            skills: [
                {
                    name: "Git",
                    icon: "false",
                    image: "/git.svg",
                    link: "https://icons8.com/icon/20906/git",
                },
                {
                    name: "GitHub",
                    icon: "false",
                    image: "/github.svg",
                    link: "https://icons8.com/icon/62856/github",
                },
                {
                    name: "VS Code",
                    icon: "false",
                    image: "/vscode.svg",
                    link: "https://icons8.com/icon/9OGIyU8hrxW5/visual-studio-code-2019",
                },
                {
                    name: "Vim",
                    icon: "false",
                    image: "/vim.svg",
                    link: "https://freebiesupply.com/logos/vim-logo/",
                },
                {
                    name: "Postman",
                    icon: "false",
                    image: "/postman.svg",
                    link: "https://www.postman.com/",
                },
                {
                    name: "Insomnia",
                    icon: "false",
                    image: "/insomnia.svg",
                    link: "https://insomnia.rest/",
                },
                {
                    name: "Probably more",
                    icon: "unknown_document",
                },
            ],
        },
    ],
};

const projects1 = {
    title: "Projects",
    cards: [
        {
            title: "Budget Budgie",
            description:
                "Fully open-source budgeting app (WIP). Great for groceries and setting financial goals and budgets.",
            tags: [
                "Vue.js",
                "Nuxt",
                "Tailwind CSS",
                "Typescript",
                "Vercel",
                "Vecel KV",
                "OpenSource",
                "Supabase",
                "OAuth",
                "Axios",
                "Vite",
                "Progressive Web App",
                "Bun",
            ],
            links: [
                {
                    title: "Website",
                    url: "https://budgetbudgie-evans-projects-6d5352ef.vercel.app/",
                },
                {
                    title: "GitHub",
                    url: "https://github.com/LostRhapsody/expense_app",
                },
            ],
            image: "/budgie.webp",
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
                {
                    title: "none",
                    url: "none",
                },
            ],
            image: "/blakecyber.webp",
        },
    ],
};
const projects2 = {
    title: "Projects",
    cards: [
        {
            title: "Rhapsody Web Design",
            description: "Web design company website",
            tags: ["Typescript", "Tailwind", "Prisma"],
            links: [
                {
                    title: "Website",
                    url: "https://rhapsodyweb.ca/",
                },
                {
                    title: "none",
                    url: "none",
                },
            ],
            image: "/rhapsody.webp",
        },
        {
            title: "Slothtime",
            description: "Minimalistic time tracking app",
            tags: [
                "Jquery",
                "CSS",
                "HTML",
                "Javascript",
                "Client-first Caching",
            ],
            links: [
                {
                    title: "Website",
                    url: "https://slothtime.dev/",
                },
                {
                    title: "GitHub",
                    url: "https://github.com/LostRhapsody/slothtime",
                },
            ],
            image: "/slothtime.webp",
        },
    ],
};
const projects3 = {
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
                "Vercel",
            ],
            links: [
                {
                    title: "Website",
                    url: "https://verifai-demo.vercel.app",
                },
                {
                    title: "none",
                    url: "none",
                },
            ],
            image: "/verifai.webp",
        },
        {
            title: "Generic Property Management",
            description:
                "A splash page for a property management company (No affiliation). This website was a trial run for using AI to see how a single developer could increase productivity and still output a high-quality product. It was a huge success in my books as Claude performed very well, and I was there to rectify the more complex issues Claude couldn't solve.",
            tags: [
                "HTML",
                "JS",
                "CSS",
                "Claude Sonnect (Pair Programming)",
                "Netlify",
            ],
            links: [
                {
                    title: "Generic Property Management Website",
                    url: "https://bayland-properties.netlify.app",
                },
                {
                    title: "Generic Property Management GitHub",
                    url: "https://github.com/LostRhapsody/Property_management_demo",
                },
            ],
            image: "/bayland.webp",
        },
    ],
};

const header_titles = {
    Home: "Hi, I'm Evan.",
    About: "About Me",
    Projects: "Projects",
    Skills: "Skills",
    Tech: "Technologies",
    Proficiencies: "Proficiencies",
};

const proficiencies = [
    {
        label: "Progress OpenEdge",
        description:
            "Progress OpenEdge is a suite of tools for building enterprise-level applications. I've worked in Progress for several years.",
        icon: "progress",
        image: "/progress.svg",
        link: "https://www.progress.com/openedge",
    },
    {
        label: "Rust",
        description:
            "Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety. I've studied the entire Rust book and supplemental material and build all my (new) open-source projects with it.",
        icon: "false",
        image: "/rust.svg",
        link: "https://icons8.com/icon/haeAxVQEIg0F/rust-programming-language",
    },
    {
        label: "JavaScript",
        description:
            "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. I've worked with JS for many, many years and am very familiar with several frameworks and the odd kinks it comes with.",
        icon: "false",
        image: "/javascript.svg",
        link: "https://icons8.com/icon/108784/javascript",
    },
];

const skill_tabs = [
    {
        label: "Frontend",
        item: skill_cards.cards[1],
    },
    {
        label: "Backend",
        item: skill_cards.cards[2],
    },
    {
        label: "Languages",
        item: skill_cards.cards[3],
    },
    {
        label: "DevOps",
        item: skill_cards.cards[4],
    },
    {
        label: "Web Servers",
        item: skill_cards.cards[5],
    },
    {
        label: "Tools",
        item: skill_cards.cards[6],
    },
];
</script>

<style scoped>
.page {
    position: relative;
}

.blur__element {
    background: radial-gradient(
        140% 107.13% at 50% 10%,
        transparent 37.41%,
        #c3c3c380 80.27%,
        #b8b8b8 100%
    );
    filter: blur(5px);
    animation: clear_blur 3s forwards;
    border-radius: 2rem;
}

.prof-card {
    transition: all 0.5s ease;
    color: #fff;
    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.125);
    backdrop-filter: blur(16px) saturate(171%);
    -webkit-backdrop-filter: blur(16px) saturate(171%);
    background-color: rgba(195, 195, 195, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.125);
}

.prof-card:hover {
    /* border-radius: 3rem; */
    border: 1px solid rgba(255, 255, 255, 0.4);
}

.prof-card-child {
    border-radius: 2rem;
}

@keyframes clear_blur {
    from {
        filter: blur(5px);
        transform: translateY(20px);
    }
    to {
        filter: none;
        transform: translateY(0);
    }
}
</style>
