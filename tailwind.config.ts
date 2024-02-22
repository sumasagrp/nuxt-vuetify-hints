import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  important: true,
  darkMode: 'class',

  theme: {
    borderWidth: {},
    fontFamily: {},

    extend: {
      colors: {
        'app-background': '#191a23',
      },
    },
  },
}
