/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F4EF',
        mist: '#E8ECF3',
        fogBlue: '#C7D1DF',
        blueGray: '#74859E',
        softGold: '#C9B37E'
      },
      boxShadow: {
        glow: '0 10px 40px rgba(116, 133, 158, 0.18)'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out both',
        floatSlow: 'floatSlow 4.5s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
