import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import { addIconSelectors } from '@iconify/tailwind';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        time: ['var(--font-vt323)', ...fontFamily.mono],
      },
    },
  },
  // add daisyUI plugin
  plugins: [
    require('daisyui'),
    addIconSelectors([
      'icon-park',
      'icon-park-twotone',
      'icon-park-solid',
      'icon-park-outline',
    ]),
  ],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: ['synthwave'], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'synthwave', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
} satisfies Config;
