/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
const plugin = require("tailwindcss/plugin")
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          transparent: "hsla(var(--primary-transparent))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
          primary: "hsl(var(--muted-primary))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        'accordion-down': {
           from: { height: '0' },
           to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
           from: { height: 'var(--radix-accordion-content-height)' },
           to: { height: '0' },
        },
        'border-beam': {
           '100%': {
              'offset-distance': '100%',
           },
        },
        'image-glow': {
           '0%': {
              'opacity': '0',
              'animation-timing-function': 'cubic-bezier(0.74, 0.25, 0.76, 1)',
           },
           '10%': {
              'opacity': '0.7',
              'animation-timing-function': 'cubic-bezier(0.12, 0.01, 0.08, 0.99)',
           },
           '100%': {
              opacity: '0.4',
           },
        },
        'fade-in': {
           from: { opacity: '0', transform: 'translateY(-10px)' },
           to: { opacity: '1', transform: 'none' },
        },
        'fade-up': {
           from: { opacity: '0', transform: 'translateY(20px)' },
           to: { opacity: '1', transform: 'none' },
        },
        'shimmer': {
           '0%, 90%, 100%': {
              'background-position': 'calc(-100% - var(--shimmer-width)) 0',
           },
           '30%, 60%': {
              'background-position': 'calc(100% + var(--shimmer-width)) 0',
           },
        },
        'marquee': {
           from: { transform: 'translateX(0)' },
           to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
           from: { transform: 'translateY(0)' },
           to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
     },
     animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      'image-glow': 'image-glow 4100ms 600ms ease-out forwards',
      'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
      'fade-up': 'fade-up 1000ms var(--animation-delay, 0ms) ease forwards',
      'shimmer': 'shimmer 8s infinite',
      'marquee': 'marquee var(--duration) infinite linear',
      'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
   },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // 
      },
    },
  },
  plugins: [
    require('tailwindcss-hero-patterns'),
    plugin(({ addUtilities }) => {
        addUtilities({
          /* Chrome, Safari and Opera */
          ".scrollbar-hidden::-webkit-scrollbar": {
            display: "none",
          },
  
          ".scrollbar-hidden": {
            "scrollbar-width": "none" /* Firefox */,
            "-ms-overflow-style": "none" /* IE and Edge */,
          },
        })
      }),
],
}