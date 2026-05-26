import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  // Diz ao Tailwind onde procurar pelas classes no seu código
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // Ativa o DaisyUI como plugin
  plugins: [daisyui],
  // Configura os temas específicos que você quer usar
  daisyui: {
    themes: ["garden", "dark"], 
  },
}