/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem"
    },
    extend: {
       screens: {
                'xs': '375px',
            },
            boxShadow: {
                'sm': '0 3px 7px #0003',
                'xs': '0 3px 9px #0000006e',
                'xl': '0 6px 27px #0003',
                'xxl': '0 0 10px 3px #0000001a',
              },
            fontSize: {
                11: "0.6875rem",
                13: "0.8125rem",
                14: "0.875rem",
                15: "0.9375rem",
                base: '1rem',
                17: '1.0625rem',
                22: '1.5rem',
                24: '1.375rem',
                26:'1.625rem',
                28:'1.75rem',
                38:'2.375rem',
                40:'2.5rem',                
                48:'3rem',                
                56:'3.5rem',                
                80:'5rem',                
            },
            spacing: {
                '70': '70px',
            },
            colors: {
                'primary': {
                    '50': '#fdf2f1',
                    '100': '#fbe5e4',
                    '200': '#f7cbc9',
                    '300': '#f2b1ae',
                    '400': '#e47973',
                    '500': '#c72116',
                    '600': '#a01b12',
                    '700': '#79150e',
                    '800': '#53100a',
                    '900': '#2c0805',
                    '950': '#160403'
                },
                'secondary': {
                    '50': '#f8f8f8',
                    '100': '#f3f3f3',
                    '200': '#e6e6e6',
                    '300': '#d9d9d9',
                    '400': '#cccccc',
                    '500': '#bfbfbf',
                    '600': '#999999',
                    '700': '#737373',
                    '800': '#4d4d4d',
                    '900': '#262626',
                    '950': '#141414',
                },
                'accent': {
                    '50': '#f5f6f8',
                    '100': '#ebedf2',
                    '200': '#d2d7e2',
                    '300': '#adb6cb',
                    '400': '#8491af',
                    '500': '#3a4570',
                    '600': '#2d3557',
                    '700': '#252c47',
                    '800': '#1e233a',
                    '900': '#181c2f',
                    '950': '#0f111d',
                },
                'rr-black': '#192038',
                'rr-quartz': '#49454F',
                'slate': {
                    '50': colors.slate[50],
                    '100': colors.slate[100],
                    '200': colors.slate[200],
                    '300': colors.slate[300],
                    '400': colors.slate[400],
                    '500': colors.slate[500],
                    '600': colors.slate[600],
                    '700': colors.slate[700],
                    '800': colors.slate[800],
                    '900': colors.slate[900],
                    '950': colors.slate[950],
                },
                'red': {
                    200:'#f5e3e7',
                    300: '#f7e7e9',
                    400: '#e15d63',
                  },
                  'darkRed':{
                    500:'#7e2a35',
                    700:'#7d1933',
                  },
                  'lightRed':'#fbf7f3',
                  'pinkLight':'#ef928b',
                  'green':{
                    400:'#3a8551',
                    500:'#64b67b',
                    600:'#3de417',
                    950:'#95ff6b',
                  },
                  'lightGreen':{
                    50:'#82ff9b',
                  },
                  'orange':{
                    400:'#e1885e',
                  },
                  'indigo':{
                    500:'#3000ff',
                  },
                  'fuchsia':{
                    400:'#a42ff2',
                  },
                  'darkGreen':'#6c959d',
                  'yellow':{
                    300:'#c38961',
                    800:'#a78f6b',
                    950:'#c38961',
                  },
                  'gray':{
                    300:'#808080',
                    400:'#202020',
                    600:'#505050',
                  },
                  'sky':{
                    400:'#5fb6d3',
                    600: '#006fcf',
                    800: '#284ac8',
                  },
                  'zinc':{
                    100:'#efefef',
                  },
                  'blue':{
                    300:'#0000ff',
                    800:'#0000a4',
                  },
                  'blueLight':'#bae4ed',
                  'lime':{
                    100:'#def85f',
                    200:'#77714c',
                    50:'#f3f1e5',
                    400:'#77714c'
                  }

            },
            zIndex: {
                'drawer': '1050',
            },
            animation: {
              announcement: 'announcement-scroll 15s infinite linear',
              animation: 'animateAmbient 30s linear infinite !important',
              'blink-soft': 'blink .6s linear infinite',              
              'marquee': 'marquee 20s linear infinite',
          },
          keyframes: {
              marquee: {
                '0%': { transform: 'translate3d(var(--move-initial), 0, 0)' },
                '100%': { transform: 'translate3d(var(--move-final), 0, 0)' }
              },
              'announcement-scroll': {
                  '0%': {
                      transform: 'translate3d(0,0,0)'
                  },

                  '100%': {
                      transform: 'translate3d(-100%,0,0)'
                  }
              },
              'animateAmbient': {
                  '0%': {
                      transform: 'rotate(0deg) translateX(1em) rotate(0deg) scale(1.2)'
                  },
                  '100%': {
                      transform: 'rotate(360deg) translateX(1em) rotate(-360deg) scale(1.2)'
                  }
              },
              'flashy' :{
                '0%': {
                    transform: 'scale(0)'
                },
                '40%': {
                    transform: 'scale(0)',
                },
                '60%': {
                    transform: 'scale(-2, 0)',
                },
                '80%': {
                    transform: 'scale(2)',
                },
                '100%': {
                    transform: 'scale(0)'
                }
            },
              blink: {
                '50%': { opacity: '0' },
              },
          },
          fontFamily: {
            'montserrat': ['Montserrat', 'sans-serif'],
          },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"],
  },
}

