import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  important: true,

  theme: {
    extend: {
      colors: {
        'app-background': '#191a23',
      },
    },
  },
}
