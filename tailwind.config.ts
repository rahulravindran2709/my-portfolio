import { Config } from 'tailwindcss';

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'gradient-primary': 'linear-gradient( to right, #8750f7 0%, #2a1454 51%, #8750f7 100%)', // Example gradient
      },
      colors: {
        primary: 'var(--color-indigo-500)',
        'primary-light': 'var(--color-indigo-300)',
        'primary-dark': 'var(--color-primary-900)',
      },
    },
  },
  plugins: [],
} as Config;
