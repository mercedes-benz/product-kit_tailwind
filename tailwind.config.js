
const brandColors = {
  white: "var(--color-white)",
  black: "var(--color-black)",
  neutral: {
    50: 'var(--color-brand-neutral-50)',
    100: 'var(--color-brand-neutral-100)',
    200: 'var(--color-brand-neutral-200)',
    300: 'var(--color-brand-neutral-300)',
    400: 'var(--color-brand-neutral-400)',
    500: 'var(--color-brand-neutral-500)',
    600: 'var(--color-brand-neutral-600)',
    700: 'var(--color-brand-neutral-700)',
    800: 'var(--color-brand-neutral-800)',
    900: 'var(--color-brand-neutral-900)',
  },
  blue: {
    50: 'var(--color-brand-blue-50)',
    100: 'var(--color-brand-blue-100)',
    200: 'var(--color-brand-blue-200)',
    300: 'var(--color-brand-blue-300)',
    400: 'var(--color-brand-blue-400)',
    500: 'var(--color-brand-blue-500)',
    600: 'var(--color-brand-blue-600)',
    700: 'var(--color-brand-blue-700)',
    800: 'var(--color-brand-blue-800)',
    900: 'var(--color-brand-blue-900)',
  },
  deepblue: {
    50: 'var(--color-brand-deepblue-50)',
    100: 'var(--color-brand-deepblue-100)',
    200: 'var(--color-brand-deepblue-200)',
    300: 'var(--color-brand-deepblue-300)',
    400: 'var(--color-brand-deepblue-400)',
    500: 'var(--color-brand-deepblue-500)',
    600: 'var(--color-brand-deepblue-600)',
    700: 'var(--color-brand-deepblue-700)',
    800: 'var(--color-brand-deepblue-800)',
    900: 'var(--color-brand-deepblue-900)',
  },
  grayblue: {
    50: 'var(--color-brand-grayblue-50)',
    100: 'var(--color-brand-grayblue-100)',
    200: 'var(--color-brand-grayblue-200)',
    300: 'var(--color-brand-grayblue-300)',
    400: 'var(--color-brand-grayblue-400)',
    500: 'var(--color-brand-grayblue-500)',
    600: 'var(--color-brand-grayblue-600)',
    700: 'var(--color-brand-grayblue-700)',
    800: 'var(--color-brand-grayblue-800)',
    900: 'var(--color-brand-grayblue-900)',
  },
  pink: {
    50: 'var(--color-brand-pink-50)',
    100: 'var(--color-brand-pink-100)',
    200: 'var(--color-brand-pink-200)',
    300: 'var(--color-brand-pink-300)',
    400: 'var(--color-brand-pink-400)',
    500: 'var(--color-brand-pink-500)',
    600: 'var(--color-brand-pink-600)',
    700: 'var(--color-brand-pink-700)',
    800: 'var(--color-brand-pink-800)',
    900: 'var(--color-brand-pink-900)',
  },
  purple: {
    50: 'var(--color-brand-purple-50)',
    100: 'var(--color-brand-purple-100)',
    200: 'var(--color-brand-purple-200)',
    300: 'var(--color-brand-purple-300)',
    400: 'var(--color-brand-purple-400)',
    500: 'var(--color-brand-purple-500)',
    600: 'var(--color-brand-purple-600)',
    700: 'var(--color-brand-purple-700)',
    800: 'var(--color-brand-purple-800)',
    900: 'var(--color-brand-purple-900)',
  },
  red: {
    50: 'var(--color-brand-red-50)',
    100: 'var(--color-brand-red-100)',
    200: 'var(--color-brand-red-200)',
    300: 'var(--color-brand-red-300)',
    400: 'var(--color-brand-red-400)',
    500: 'var(--color-brand-red-500)',
    600: 'var(--color-brand-red-600)',
    700: 'var(--color-brand-red-700)',
    800: 'var(--color-brand-red-800)',
    900: 'var(--color-brand-red-900)',
  },
  green: {
    50: 'var(--color-brand-green-50)',
    100: 'var(--color-brand-green-100)',
    200: 'var(--color-brand-green-200)',
    300: 'var(--color-brand-green-300)',
    400: 'var(--color-brand-green-400)',
    500: 'var(--color-brand-green-500)',
    600: 'var(--color-brand-green-600)',
    700: 'var(--color-brand-green-700)',
    800: 'var(--color-brand-green-800)',
    900: 'var(--color-brand-green-900)',
  }
}

const brandSpacing = {
  '0': '0px',
  '0.5': 'var(--size-space-halfx)',
  '1': 'var(--size-space-1x)',
  '2': 'var(--size-space-2x)',
  '3': 'var(--size-space-3x)',
  '4': 'var(--size-space-4x)',
  '6': 'var(--size-space-6x)',
  '8': 'var(--size-space-8x)',
  '9': 'var(--size-space-9x)',
  '10': 'var(--size-space-10x)',
  '11': 'var(--size-space-11x)',
  '12': 'var(--size-space-12x)',
  '16': 'var(--size-space-16x)',
  '24': 'var(--size-space-24x)',
}

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    screens: {
      xs: 'var(--size-screen-xs)',
      s: 'var(--size-screen-s)',
      m: 'var(--size-screen-m)',
      l: 'var(--size-screen-l)',
      xl: 'var(--size-screen-xl)',
    },
    spacing: {
      ...brandSpacing,
    },
    responsiveSpacing: {
      xs: {
        '3xs': 'var(--size-application-spacing-xs-3xs)',
        xxs: 'var(--size-application-spacing-xs-xxs)',
        xs: 'var(--size-application-spacing-xs-xs)',
        s: 'var(--size-application-spacing-xs-s)',
        m: 'var(--size-application-spacing-xs-m)',
        l: 'var(--size-application-spacing-xs-l)',
        xl: 'var(--size-application-spacing-xs-xl)',
        xxl: 'var(--size-application-spacing-xs-xxl)',
        '3xl': 'var(--size-application-spacing-xs-3xl)'
      },
      s: {
        '3xs': 'var(--size-application-spacing-s-3xs)',
        xxs: 'var(--size-application-spacing-s-xxs)',
        xs: 'var(--size-application-spacing-s-xs)',
        s: 'var(--size-application-spacing-s-s)',
        m: 'var(--size-application-spacing-s-m)',
        l: 'var(--size-application-spacing-s-l)',
        xl: 'var(--size-application-spacing-s-xl)',
        xxl: 'var(--size-application-spacing-s-xxl)',
        '3xl': 'var(--size-application-spacing-s-3xl)'
      },
      m: {
        '3xs': 'var(--size-application-spacing-m-3xs)',
        xxs: 'var(--size-application-spacing-m-xxs)',
        xs: 'var(--size-application-spacing-m-xs)',
        s: 'var(--size-application-spacing-m-s)',
        m: 'var(--size-application-spacing-m-m)',
        l: 'var(--size-application-spacing-m-l)',
        xl: 'var(--size-application-spacing-m-xl)',
        xxl: 'var(--size-application-spacing-m-xxl)',
        '3xl': 'var(--size-application-spacing-m-3xl)'
      },
      l: {
        '3xs': 'var(--size-application-spacing-l-3xs)',
        xxs: 'var(--size-application-spacing-l-xxs)',
        xs: 'var(--size-application-spacing-l-xs)',
        s: 'var(--size-application-spacing-l-s)',
        m: 'var(--size-application-spacing-l-m)',
        l: 'var(--size-application-spacing-l-l)',
        xl: 'var(--size-application-spacing-l-xl)',
        xxl: 'var(--size-application-spacing-l-xxl)',
        '3xl': 'var(--size-application-spacing-l-3xl)'
      },
      xl: {
        '3xs': 'var(--size-application-spacing-xl-3xs)',
        xxs: 'var(--size-application-spacing-xl-xxs)',
        xs: 'var(--size-application-spacing-xl-xs)',
        s: 'var(--size-application-spacing-xl-s)',
        m: 'var(--size-application-spacing-xl-m)',
        l: 'var(--size-application-spacing-xl-l)',
        xl: 'var(--size-application-spacing-xl-xl)',
        xxl: 'var(--size-application-spacing-xl-xxl)',
        '3xl': 'var(--size-application-spacing-xl-3xl)'
      }
    },
    fontFamily: {
      sans: ['var(--font-family-brand)', 'sans-serif'],
      mono: ['var(--font-family-monospace)', 'sans-serif'],
    },
    fontWeight: {
      light: 'var(--font-weight-light)',
      regular: 'var(--font-weight-regular)',
      bold: 'var(--font-weight-bold)',
      black: 'var(--font-weight-black)',
    },
    fontSize: {
      '3xs': 'var(--size-font-3xs)',
      'xxs': 'var(--size-font-xxs)',
      'xs': 'var(--size-font-xs)',
      's': 'var(--size-font-s)',
      'm': 'var(--size-font-m)',
      'l': 'var(--size-font-l)',
      'xl': 'var(--size-font-xl)',
      'xxl': 'var(--size-font-xxl)',
      '3xl': 'var(--size-font-3xl)',
      '4xl': 'var(--size-font-4xl)',
    },
    lineHeight: {
      '3xs': 'var(--size-line-height-3xs)',
      'xxs': 'var(--size-line-height-xxs)',
      'xs': 'var(--size-line-height-xs)',
      's': 'var(--size-line-height-s)',
      'm': 'var(--size-line-height-m)',
      'l': 'var(--size-line-height-l)',
      'xl': 'var(--size-line-height-xl)',
      'xxl': 'var(--size-line-height-xxl)',
      '3xl': 'var(--size-line-height-3xl)',
    },
    letterSpacing: {
      '3xs': 'var(--size-letter-spacing-3xs)',
      'xxs': 'var(--size-letter-spacing-xxs)',
      'xs': 'var(--size-letter-spacing-xs)',
      's': 'var(--size-letter-spacing-s)',
      'm': 'var(--size-letter-spacing-m)',
      'l': 'var(--size-letter-spacing-l)',
      'xl': 'var(--size-letter-spacing-xl)',
      'xxl': 'var(--size-letter-spacing-xxl)',
      '3xl': 'var(--size-letter-spacing-3xl)',
      '4xl': 'var(--size-letter-spacing-4xl)',
    },
    opacity: {
      '38': 'var(--opacity-brand-1)',
      '60': 'var(--opacity-brand-2)',
      '74': 'var(--opacity-brand-3)',
      '87': 'var(--opacity-brand-4)',
    },
    colors: {
      ...brandColors,
      primary: "var(--color-application-primary)",
      secondary: "var(--color-application-secondary)",
      tertiary: "var(--color-application-tertiary)",
      quaternary: "var(--color-application-quaternary)",
      background: "var(--color-application-background)",
      surface: "var(--color-application-surface)",
      error: "var(--color-application-error)",
      outline: "var(--color-application-outline)",
      contrast: {
        primary: "var(--color-application-contrast-primary)",
        secondary: "var(--color-application-contrast-secondary)",
        tertiary: "var(--color-application-contrast-tertiary)",
        quaternary: "var(--color-application-contrast-quaternary)",
        background: "var(--color-application-contrast-background)",
        surface: "var(--color-application-contrast-surface)",
        error: "var(--color-application-contrast-error)",
        outline: "var(--color-application-contrast-outline)",
      },
    },
    extend: {},
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('./src/plugins/responsive-spacings'),
    {
      theme: {
        extend: {
          transitionDuration: {
            0: "0ms",
          },
        },
      },
    },
    function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
          display: 'grid',
          '@screen xs': {
            maxWidth: '100%',
            paddingLeft: '16px',
            paddingRight: '16px',
            columnGap: '16px',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))'
          },
          '@screen s': {
            maxWidth: '100%',
            paddingLeft: '32px',
            paddingRight: '32px',
            columnGap: '16px',
            gridTemplateColumns: 'repeat(8, minmax(0, 1fr))'
          },
          '@screen m': {
            maxWidth: '840px',
            paddingLeft: '0px',
            paddingRight: '0px',
            columnGap: '24px',
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))'
          },
          '@screen l': {
            maxWidth: '100%',
            paddingLeft: '192px',
            paddingRight: '192px',
            columnGap: '24px',
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))'
          },
          '@screen xl': {
            maxWidth: '1040px',
            paddingLeft: '0px',
            paddingRight: '0px',
            columnGap: '24px',
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))'
          },
        },
        '.text-headline1': { 
          fontSize: theme('fontSize.3xl'),
          lineHeight: theme('lineHeight.xxl'),
          letterSpacing: theme('letterSpacing.xxs'),
          textTransform: 'uppercase',
          '@screen m': {
            fontSize: theme('fontSize.4xl'),
            lineHeight: theme('lineHeight.3xl'),
            letterSpacing: theme('letterSpacing.3xs'),
          }
        },
        '.text-headline2': { 
          fontSize: theme('fontSize.xxl'),
          lineHeight: theme('lineHeight.xl'),
          letterSpacing: theme('letterSpacing.xs'),
          textTransform: 'uppercase',
          '@screen m': {
            fontSize: theme('fontSize.3xl'),
            lineHeight: theme('lineHeight.xxl'),
            letterSpacing: theme('letterSpacing.xxs'),
          }
        },
        '.text-headline3': { 
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('lineHeight.l'),
          letterSpacing: theme('letterSpacing.s'),
          textTransform: 'uppercase',
          '@screen m': {
            fontSize: theme('fontSize.xxl'),
            lineHeight: theme('lineHeight.xl'),
            letterSpacing: theme('letterSpacing.xs'),
          }
        },
        '.text-headline4': { 
          fontSize: theme('fontSize.l'),
          lineHeight: theme('lineHeight.m'),
          letterSpacing: theme('letterSpacing.m'),
          '@screen m': {
            fontSize: theme('fontSize.xl'),
            lineHeight: theme('lineHeight.l'),
            letterSpacing: theme('letterSpacing.s'),
          }
        },
        '.text-headline5': { 
          fontSize: theme('fontSize.m'),
          lineHeight: theme('lineHeight.s'),
          letterSpacing: theme('letterSpacing.l'),
          '@screen m': {
            fontSize: theme('fontSize.l'),
            lineHeight: theme('lineHeight.m'),
            letterSpacing: theme('letterSpacing.m'),
          }
        },
        '.text-headline6': { 
          fontSize: theme('fontSize.s'),
          lineHeight: theme('lineHeight.xs'),
          letterSpacing: theme('letterSpacing.xl'),
          '@screen m': {
            fontSize: theme('fontSize.m'),
            lineHeight: theme('lineHeight.s'),
            letterSpacing: theme('letterSpacing.l'),
          }
        },
        '.text-subtitle1': { 
          fontSize: theme('fontSize.xs'),
          lineHeight: theme('lineHeight.s'),
          letterSpacing: theme('letterSpacing.l'),
          '@screen m': {
            fontSize: theme('fontSize.s'),
            lineHeight: theme('lineHeight.m'),
            letterSpacing: theme('letterSpacing.m'),
          }
        },
        '.text-subtitle2': { 
          fontSize: theme('fontSize.xxs'),
          lineHeight: theme('lineHeight.xs'),
          letterSpacing: theme('letterSpacing.m'),
          '@screen m': {
            fontSize: theme('fontSize.xs'),
            lineHeight: theme('lineHeight.s'),
            letterSpacing: theme('letterSpacing.s'),
          }
        },
        '.text-body1': { 
          fontSize: theme('fontSize.xs'),
          lineHeight: theme('lineHeight.xs'),
          letterSpacing: theme('letterSpacing.xxl'),
          '@screen m': {
            fontSize: theme('fontSize.s'),
            lineHeight: theme('lineHeight.s'),
            letterSpacing: theme('letterSpacing.xxl'),
          }
        },
        '.text-body2': { 
          fontSize: theme('fontSize.xxs'),
          lineHeight: theme('lineHeight.xxs'),
          letterSpacing: theme('letterSpacing.xl'),
          '@screen m': {
            fontSize: theme('fontSize.xs'),
            lineHeight: theme('lineHeight.xs'),
            letterSpacing: theme('letterSpacing.l'),
          }
        },
        '.text-button': { 
          fontSize: theme('fontSize.xs'),
          lineHeight: theme('lineHeight.xxs'),
          letterSpacing: theme('letterSpacing.3xl'),
          textTransform: 'uppercase',
          '@screen m': {
            fontSize: theme('fontSize.xs'),
            lineHeight: theme('lineHeight.xxs'),
            letterSpacing: theme('letterSpacing.3xl'),
          }
        },
        '.text-caption': { 
          fontSize: theme('fontSize.3xs'),
          lineHeight: theme('lineHeight.xxs'),
          letterSpacing: theme('letterSpacing.xl'),
          '@screen m': {
            fontSize: theme('fontSize.3xs'),
            lineHeight: theme('lineHeight.xxs'),
            letterSpacing: theme('letterSpacing.xl'),
          }
        },
        '.text-overline': { 
          fontSize: theme('fontSize.3xs'),
          lineHeight: theme('lineHeight.xxs'),
          letterSpacing: theme('letterSpacing.4xl'),
          textTransform: 'uppercase',
          fontWeight: theme('fontWeight.bold'),
          '@screen m': {
            fontSize: theme('fontSize.3xs'),
            lineHeight: theme('lineHeight.xxs'),
            letterSpacing: theme('letterSpacing.4xl'),
          }
        },
        '.divider': { 
          height: '3px',
          '@screen m': {
            height: '4px',
          }
        },
      })
    },
  ]
}
