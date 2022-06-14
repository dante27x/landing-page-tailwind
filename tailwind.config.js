/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    //customise screen sizes
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      // add custom colors to be used with tailwind
      colors: {
        //background color scheme
        bgOne: 'rgb(255, 255, 255)',
        bgTwo: 'rgb(33, 41, 49)',
        bgThree: 'rgb(30, 37, 45)',
        bgFour: 'rgb(238, 238, 238)',
        bgFive: 'rgb(245, 245, 245)',
        bgNav: 'rgba(69, 75, 81, 0.7)',
        //text color scheme
        textOne: 'rgb(33, 41, 49)',
        textTwo: 'rgb(255, 255, 255)',
        textThree: 'rgb(144, 148, 152)',
        textFour: 'rgb(113, 121, 129)',
        textFive: 'rgb(0, 0, 0)',
        textSix: 'rgb(30, 37, 45)',
        textSeven: 'rgb(238, 238, 238)',
      },
      //customize font family
      fontFamily: {
        faSolid: ['Source Sans Pro Black', 'sans-serif'],
        faSourceSans: ['Source Sans Pro', 'Helvetica', 'sans-serif'],
        faBrands: ['Font Awesome 5 Brands'],
        merriweather: ['Merriweather Light Italic', 'Georgia', 'serif'],
        merriweatherItalic: ['Merriweather Italic', 'serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: '80px',
          lineHeight: '80px',
          color: theme('colors.textTwo'),
          fontFamily: theme('fontFamily.faSourceSans'),
        },
        h2: {
          fontSize: '64px',
          lineHeight: '70.4px',
          color: theme('colors.textOne'),
          fontFamily: theme('fontFamily.faSourceSans'),
        },
        h3: {
          fontSize: '12.8px',
          lineHeight: '19.2px',
          color: theme('colors.textTwo'),
          fontFamily: theme('fontFamily.faSourceSans'),
          fontWeight: 'bold',
        },
        body: {
          fontSize: '16px',
          lineHeight: '38px',
          color: theme('colors.textTwo'),
          fontFamily: theme('fontFamily.merriweather'),
        },
      });
    }),
    require('@tailwindcss/forms'),
  ],
};
