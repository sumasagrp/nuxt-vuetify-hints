import materialColors from 'vuetify/util/colors'

export const colors = {
  'primary': {
    dark: '#7856ff',
    light: '#7856ff',
  },
  'secondary': {
    dark: '#625afa',
    light: '#625afa',
  },

  'error': {
    dark: '#ff4081',
    light: '#ff4081',
  },

  'surface': {
    dark: '#0a0a0a',
    light: '#fff',
  },

  'surface-hover': {
    dark: '#222635',
    light: '#fcf8ff',
  },

  'background': {
    dark: '#0a0a0a',
    light: '#fafafa',
  },

  'link': {
    dark: '#9499ff',
    light: '#7856ff',
  },

  'black-link': {
    dark: '#9499ff',
    light: '#0B1215',
  },

  get 'surface-footer'() {
    return {
      dark: this.surface.dark,
      light: '#FAFAFA',
    }
  },

  'surface-footer-font-color': {
    dark: '#666666',
    light: '#666666',
  },

  'overview-card': {
    dark: '#242838',
    light: '#f4f4f4',
  },
  'square-avatar': {
    dark: '#383e57',
    light: '#eff1f3',
  },

  'appbar-background': {
    dark: '#0a0a0a',
    light: '#fff',
  },

  'on-background': {
    dark: '#adbac7',
    light: '#2e3134',
  },

  'on-surface': {
    dark: '#adbac7',
    light: '#2e3134',
  },

  'on-surface-variant': {
    dark: '#242B33',
    light: '#F4F5FA',
  },

  'on-text-field-background': {
    dark: '#adbac7',
    light: '#181027',
  },

  'appbar-buttons': {
    dark: '#ededed',
    light: '#0B1215',
  },

  'primary-button': {
    dark: '#625afa',
    light: '#625afa',
  },

  'secondary-button': {
    dark: '#573FA5',
    light: '#7d5bed',
  },

  'accent-button': {
    dark: '#272939',
    light: '#ededed',
  },

  'accent-button-icon': {
    dark: '',
    light: '#2d8a9d',
  },

  'light-button': {
    dark: '#0a0a0a',
    light: '#fff',
  },

  'black-button': {
    dark: '#ededed',
    light: '#0B1215',
  },

  'notifications-button': {
    dark: '#242838',
    light: '#7856ff',
  },

  'field-outline-focus': {
    dark: materialColors.grey.darken3,
    light: materialColors.grey.darken1,
  },

  'text-field-background': {
    dark: '#000',
    light: '#fafbfc',
  },

  'select-background': {
    dark: '#000',
    light: '#fafbfc',
  },

  'jobpost-promoted': {
    dark: '#242032',
    light: '#f6f9ff',
  },

  'scrim': {
    dark: '#000',
    light: '#ccc',
  },

  get 'settings-card-footer'() {
    return {
      dark: this.surface.dark,
      light: '#f7f7f7',
    }
  },

  // SVG
  'logoFont': {
    dark: '#adbac7',
    light: '#3b4256',
  },

  'logoCaret': {
    dark: '#7300f5',
    light: '#7300f5',
  },

  'svgStroke': {
    dark: '#9499ff',
    light: '#092f63',
  },

  'strokeOutter': {
    dark: '#9499ff',
    light: '#0B1215',
  },

  'svgFillSoft': {
    dark: 'transparent',
    light: '#bcb9ff',
  },

}
