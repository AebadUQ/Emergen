import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NexaBold: ["var(--font-nexa-bold)"],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertianary:"var(--tertianary)",
        background:"var(--color-bg)",
        textprimary:"var(--text-primary)",
        white:"var(--color-white)",
      
      },
      fontSize: {
        heading: 'var(--font-size-heading)',
      },
      lineHeight: {
        heading: 'var(--line-height-heading)', 
      }
    },

    screens: {
      'sm': '639px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1300px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};
export default config;
