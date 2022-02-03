import dotenv from "dotenv";
dotenv.config();

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "nar hali",
        htmlAttrs: {
            lang: "tr",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{
            rel: " icon",
            type: "image/png",
            href: "./static/favicon.png",
        }, ],
    },
    generate: { fallback: "404.html" },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["~/plugins/contentful.js"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        "@nuxt/typescript-build",
        "@nuxtjs/composition-api/module",
        "@nuxtjs/vuetify",
    ],
    env: {
        CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
        CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
        CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    },
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/apollo", "lodash"],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ["lodash-es", "@types/lodash"],
    },
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: "https://graphql.contentful.com/content/v1/spaces/smvwsw82via7/environments/master",

                httpLinkOptions: {
                    headers: {
                        authorization: "Bearer Qypj9WSPb7heGA0dqmU9W9a_085DQ46LlUbnwmQUrds",
                    },
                },
            },
        },
    },
};