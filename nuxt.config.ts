// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxt/ui"],
    app: {
        head: {
            title: "Evan | Dev",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    hid: "description",
                    name: "description",
                    content: "Evan Robertson | Fullstack Developer",
                },
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
                },
            ],
            script: [
                {
                    type: "module",
                    src: "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js",
                    async: true,
                },
            ],
        },
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) =>
                ["zapier-interfaces-page-embed"].includes(tag),
        },
    },
});
