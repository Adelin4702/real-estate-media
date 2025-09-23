/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-oswald)', ...fontFamily.serif],
            },
            colors: {
                'teal-custom': '#109dae',
                'teal-custom-dark': '#0d8899',
            },
        },
    },
    plugins: [],
}

