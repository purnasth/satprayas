/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#000',
        light: '#fffbf3',
        "logo-blue": '#004aad',
        "logo-red": '#ff3130'
      },
      fontFamily: {
        title: ['"Manding"', 'Bricolage Grotesque', 'Georgia', 'Cambria', 'serif'],
        body: ['"Schibsted Grotesk"', 'Bricolage Grotesque', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        inherit: 'inherit',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        // "2xl": "1536px",
        '2xl': '1600px',
        '3xl': '1920px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1380px',
          '2xl': '1600px',
        },
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
        wave: 'wave 2.5s infinite',
      },
    },
  },
  plugins: [],
};
