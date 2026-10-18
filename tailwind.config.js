import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/react/node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        'blob': 'blob 10s infinite',
        'blob-reverse': 'blob-reverse 12s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'blob-reverse': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-35px, 35px) scale(1.08)' },
          '66%': { transform: 'translate(25px, -25px) scale(0.92)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [
    heroui({
      defaultTheme: "light",
      themes: {
        light: {
          extend: "light",
          colors: {
            background: "#f2f8fd",
            foreground: "#0f172a",
            divider: "rgba(2, 132, 199, 0.14)",
            focus: "#0ea5e9",
            primary: {
              50: "#f0f9ff",
              100: "#e0f2fe",
              200: "#bae6fd",
              300: "#7dd3fc",
              400: "#38bdf8",
              500: "#0ea5e9",
              600: "#0284c7",
              700: "#0369a1",
              DEFAULT: "#0284c7",
              foreground: "#ffffff",
            },
            secondary: {
              50: "#eef2ff",
              100: "#e0e7ff",
              200: "#c7d2fe",
              300: "#a5b4fc",
              400: "#818cf8",
              500: "#6366f1",
              600: "#4f46e5",
              700: "#4338ca",
              DEFAULT: "#4f46e5",
              foreground: "#ffffff",
            },
            success: {
              DEFAULT: "#059669",
              foreground: "#ffffff",
              50: "#ecfdf5",
              100: "#d1fae5",
              200: "#a7f3d0",
              300: "#6ee7b7",
              400: "#34d399",
              500: "#10b981",
              600: "#059669",
              700: "#047857",
            },
            warning: {
              DEFAULT: "#d97706",
              foreground: "#ffffff",
              100: "#fef3c7",
              200: "#fde68a",
              300: "#fcd34d",
              400: "#fbbf24",
              500: "#f59e0b",
              600: "#d97706",
              700: "#b45309",
            },
            danger: {
              DEFAULT: "#e11d48",
              foreground: "#ffffff",
              50: "#fff1f2",
              100: "#ffe4e6",
              200: "#fecdd3",
              300: "#fda4af",
              400: "#fb7185",
              500: "#f43f5e",
              600: "#e11d48",
              700: "#be123c",
            },
            content1: "#ffffff",
            content2: "#f7fbfe",
            content3: "#edf5fc",
            content4: "#e0eefa",
          },
          layout: {
            radius: {
              small: "10px",
              medium: "14px",
              large: "20px",
            },
            borderWidth: {
              small: "1px",
              medium: "1.5px",
              large: "2px",
            },
          },
          fonts: {
            sans: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
            mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace',
          },
        },
      },
    }),
  ],
}
