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
        title: ['"Cotta"', 'Mulish', 'Georgia', 'Cambria', 'serif'],
        body: ['"Mulish"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
    },
  },
  plugins: [],
};
