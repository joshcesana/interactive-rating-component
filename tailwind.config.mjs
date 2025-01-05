/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                orange: "#fb7413",
                "light-gray": "#959eac",
                "dark-blue": "#252d37",
                "very-dark-blue": "#121417",
            },
            fontFamily: {
                sans: ["Overpass", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                base15: "0.9375rem", // 15px
            },
        },
    },
    plugins: [],
}
