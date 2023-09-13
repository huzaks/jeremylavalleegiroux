/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        primary: 'var(--base-orange)'
      },
      backgroundColor: {
        primary: 'var(--base-orange)',
        
      },
      borderColor: {
        primary: 'var(--base-orange)'
      },
      backgroundImage: {
        'gray': 'linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url("https://wallpaperaccess.com/full/1156778.jpg")',
        'buttons': 'linear-gradient(to right, var(--base-orange) 50%, #f3f2f2 50% )',
        'black-project': 'url("https://huzaks.github.io/portfoliojeremy/_next/static/media/breaditfull.89c0562c.png")'
      },
      screens: {
        '880px': {'raw': '(min-width:880px)'}
      },
      boxShadow: {
        '3xl': '0 10px 100px rgba(0,0,0,.1)'
      },
      backgroundSize: {
        '200%': '200% 100%'
      },
      keyframes: {
        "line": {
          from: {opacity: 0},
          to: {opacity: 1}
        },
        "bouncy": {
          '0%, 100%': {
            transform: "translateY(-25%) translateX(50%)",
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)'
        },
        '50%': {
            transform: 'translateY(0) translateX(50%)',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
        }
        }
      },
      animation: {
        'line': 'line 1s alternate infinite',
        "bouncy": 'bouncy 1s infinite'
      }
    },
  },
  plugins: [],
}
