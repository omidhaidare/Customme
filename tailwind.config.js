/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px"
      },
      colors: {
        ac: {
          primary: "rgb(var(--ac-primary) / <alpha-value>)",
          tint: {
            100: "rgb(var(--ac-primary-tint-100) / <alpha-value>)",
            200: "rgb(var(--ac-primary-tint-200) / <alpha-value>)",
            300: "rgb(var(--ac-primary-tint-300) / <alpha-value>)",
            400: "rgb(var(--ac-primary-tint-400) / <alpha-value>)",
            500: "rgb(var(--ac-primary-tint-500) / <alpha-value>)",
            600: "rgb(var(--ac-primary-tint-600) / <alpha-value>)",
            700: "rgb(var(--ac-primary-tint-700) / <alpha-value>)"
          },
          shade: {
            100: "rgb(var(--ac-primary-shade-100) / <alpha-value>)",
            200: "rgb(var(--ac-primary-shade-200) / <alpha-value>)",
            300: "rgb(var(--ac-primary-shade-300) / <alpha-value>)",
            400: "rgb(var(--ac-primary-shade-400) / <alpha-value>)",
            500: "rgb(var(--ac-primary-shade-500) / <alpha-value>)",
            600: "rgb(var(--ac-primary-shade-600) / <alpha-value>)",
            700: "rgb(var(--ac-primary-shade-700) / <alpha-value>)"
          }
        },
        gray: {
          100: "rgb(var(--gray-100) / <alpha-value>)",
          200: "rgb(var(--gray-200) / <alpha-value>)",
          300: "rgb(var(--gray-300) / <alpha-value>)",
          400: "rgb(var(--gray-400) / <alpha-value>)",
          500: "rgb(var(--gray-500) / <alpha-value>)",
          600: "rgb(var(--gray-600) / <alpha-value>)",
          700: "rgb(var(--gray-700) / <alpha-value>)",
          800: "rgb(var(--gray-800) / <alpha-value>)",
          900: "rgb(var(--gray-900) / <alpha-value>)",
          950: "rgb(var(--gray-950) / <alpha-value>)"
        },
        error: "rgb(var(--error) / <alpha-value>)",
        "error-light": "rgb(var(--error-light) / <alpha-value>)",
        "error-bg": "rgb(var(--error-bg) / <alpha-value>)",

        warning: "rgb(var(--warning) / <alpha-value>)",
        "warning-light": "rgb(var(--warning-light) / <alpha-value>)",
        "warning-bg": "rgb(var(--warning-bg) / <alpha-value>)",

        success: "rgb(var(--success) / <alpha-value>)",
        "success-light": "rgb(var(--success-light) / <alpha-value>)",
        "success-bg": "rgb(var(--success-bg) / <alpha-value>)"
      },
      fontFamily: {
        "iran-yekan": [
          "var(--font-iran-yekan)",
          ...defaultTheme.fontFamily.sans
        ]
      }
    },
  },
  plugins: [],
}