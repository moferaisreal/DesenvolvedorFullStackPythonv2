import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#130f40",
        surface: "#30336b",
        card: "#1e1e5a",

        primary: "#f9ca24",
        secondary: "#22a6b3",
        accent: "#e056fd",

        success: "#6ab04c",
        warning: "#f0932b",
        danger: "#eb4d4b",

        textPrimary: "#dff9fb",
        textSecondary: "#95afc0",
      },
    },
  },
  plugins: [],
} satisfies Config;