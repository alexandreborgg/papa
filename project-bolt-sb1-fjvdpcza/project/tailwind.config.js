/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#c0e0ff',
          300: '#a0d0ff',
          400: '#80b0ff',
          500: '#5090ff',
          600: '#3070f0',
          700: '#2050d0',
          800: '#1030b0',
          900: '#001090',
        },
        yellow: {
          50: '#fffaea',
          100: '#fff7d0',
          200: '#ffee9a',
          300: '#ffdc5c',
          400: '#ffcc33',
          500: '#fbb200',
          600: '#e69500',
          700: '#c17700',
          800: '#9c5e00',
          900: '#7a4a00',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};