export default {
    components: true,
    target: 'static',
    router: {
      base: '/currency-conversion/'
    },
    buildModules:
    [
        "@nuxtjs/eslint-module",
        "@nuxtjs/tailwindcss"
    ],

    eslint:
    {
        fix: true
    },



    head: {
        title: "Currency Conversion",
        htmlAttrs:
        {
            lang: "ru"
        },
        meta:
        [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    loading: {
      color: '#0F4471',
      height: '2px',
      throttle: 0
    },
    plugins: [
      { src: '~/plugins/vue-svgicon.js' },
      { src: '~/plugins/$api.js' }
    ],
    modules:[
        "@nuxtjs/proxy",
        "@nuxtjs/axios",
        '@nuxtjs/dotenv',
        "@nuxtjs/router-extras"
    ],
    axios: {
      // eslint-disable-next-line no-undef
      baseURL: process.env.APP_BASE_URL
    },
    css:[
        "@/assets/css/tailwind.css",
        "@/assets/css/parts/svg-icons.css"
    ],
}
