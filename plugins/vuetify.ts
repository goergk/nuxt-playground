import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VBtn } from 'vuetify/components/VBtn'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'lightTheme',
      themes: {
        lightTheme,
        darkTheme
      }
    },
    aliases: {
      VBtnPrimary: VBtn,
      VBtnSecondary: VBtn
    },
    defaults: {
      VBtnPrimary: {
        color: 'primary',
        variant: 'outlined'
      },
      MyButton: {
        color: 'secondary',
        variant: 'tonal'
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    'on-background': '#000000',
    surface: '#FFFFFF',
    'on-surface': '#000000',

    primary: '#6200EE',
    'primary-variant': '#3700B3',
    'on-primary': '#FFFFFF',

    secondary: '#03DAC6',
    'secondary-variant': '#018786',
    'on-secondary': '#000000',

    error: '#B00020',
    'on-error': '#FFFFFF',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#000000',
    'on-background': '#FFFFFF',
    surface: '#000000',
    'on-surface': '#FFFFFF',

    primary: '#6200EE',
    'primary-variant': '#3700B3',
    'on-primary': '#000000',

    secondary: '#03DAC6',
    'secondary-variant': '#018786',
    'on-secondary': '#FFFFFF',

    error: '#B00020',
    'on-error': '#000000',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}
