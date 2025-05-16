/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#005A8B',
          green: '#008080',
        },
        secondary: {
          blue: '#87CEEB',
          green: '#50C878',
        },
        text: {
          dark: '#333333',
          medium: '#4B5563',
          light: '#D3D3D3',
        },
        background: {
          light: '#F6FCFF',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        'satoshi-medium': ['Satoshi', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #005A8B, #008080)',
        'blue-gradient': 'linear-gradient(to right, #87CEEB, #005A8B)',
        'green-gradient': 'linear-gradient(to right, #50C878, #008080)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

