const autoprefixer = require('autoprefixer')

const brandColors = {
  white: '#fff',
  black: '#000',
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#a0a0a0',
    600: '#757575',
    700: '#555555',
    800: '#424242',
    900: '#212121',
  },
  blue: {
    50: '#e1f4fd',
    100: '#b3e2f9',
    200: '#83cef5',
    300: '#56bbef',
    400: '#3aadec',
    500: '#2b9fe8',
    600: '#2892d9',
    700: '#257fc5',
    800: '#216eb1',
    900: '#1B4E8E',
  },
  deepblue: {
    50: '#e4e7ec',
    100: '#b9c3d1',
    200: '#8d9cb2',
    300: '#647694',
    400: '#445b80',
    500: '#20426e',
    600: '#1a3b66',
    700: '#11325c',
    800: '#0b2950',
    900: '#061a38',
  },
  grayblue: {
    50: '#edeef6',
    100: '#d0d6e2',
    200: '#b4baca',
    300: '#979fb3',
    400: '#818aa1',
    500: '#6c7690',
    600: '#5d687f',
    700: '#4c5568',
    800: '#292e3b',
    900: '#13151B',
  },
  pink: {
    50: '#ffe4ec',
    100: '#febcd0',
    200: '#fd90b1',
    300: '#fc6191',
    400: '#fa3c78',
    500: '#f81060',
    600: '#e70a5e',
    700: '#d1045a',
    800: '#bc0057',
    900: '#970051',
  },
  purple: {
    50: '#f3e4f3',
    100: '#e1bae1',
    200: '#ce8dce',
    300: '#ba5fba',
    400: '#ab3aac',
    500: '#9c0d9e',
    600: '#8e0a99',
    700: '#7c0392',
    800: '#6B008A',
    900: '#4e007d',
  },
  red: {
    50: '#ffeaed',
    100: '#ffcbce',
    200: '#F9A9AB',
    300: '#f46a66',
    400: '#ff443c',
    500: '#ff2d17',
    600: '#f51d1a',
    700: '#e30613',
    800: '#d6000b',
    900: '#c90000',
  },
  green: {
    50: '#e6f6e8',
    100: '#c3e8c6',
    200: '#9cd9a2',
    300: '#71cb7c',
    400: '#4dc05f',
    500: '#20b441',
    600: '#13a537',
    700: '#00932c',
    800: '#008220',
    900: '#006307',
  }
}

const brandSpacing = {
  '0': '0px',
  '0.5': '4px',
  '1': '8px',
  '2': '16px',
  '3': '24px',
  '4': '32px',
  '6': '48px',
  '8': '64px',
  '9': '72px',
  '10': '80px',
  '11': '88px',
  '12': '96px',
  '16': '128px',
  '24': '192px',
}

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    screens: {
      xs: '0px',
      s: '600px',
      m: '905px',
      l: '1240px',
      xl: '1440px',
    },
    spacing: {
      ...brandSpacing,
      xs: {
        '3xs': brandSpacing['0.5'],
        xxs: brandSpacing['1'],
        xs: brandSpacing['2'],
        s: brandSpacing['3'],
        m: brandSpacing['4'],
        l: brandSpacing['6'],
        xl: brandSpacing['8'],
        xxl: brandSpacing['10'],
        '3xl': brandSpacing['11']
      },
      s: {
        '3xs': brandSpacing['0.5'],
        xxs: brandSpacing['1'],
        xs: brandSpacing['2'],
        s: brandSpacing['3'],
        m: brandSpacing['4'],
        l: brandSpacing['6'],
        xl: brandSpacing['8'],
        xxl: brandSpacing['10'],
        '3xl': brandSpacing['11']
      },
      m: {
        '3xs': brandSpacing['0.5'],
        xxs: brandSpacing['1'],
        xs: brandSpacing['2'],
        s: brandSpacing['4'],
        m: brandSpacing['6'],
        l: brandSpacing['8'],
        xl: brandSpacing['10'],
        xxl: brandSpacing['11'],
        '3xl': brandSpacing['16']
      }
    },
    fontFamily: {
      sans: ['"Source Sans Pro"', 'sans-serif'],
      mono: ['"Source Code Pro"', 'sans-serif'],
    },
    fontWeight: {
      light: 300,
      regular: 400,
      bold: 700,
      black: 900,
    },
    fontSize: {
      '3xs': '12px',
      'xxs': '14px',
      'xs': '16px',
      's': '18px',
      'm': '20px',
      'l': '24px',
      'xl': '34px',
      'xxl': '48px',
      '3xl': '64px',
      '4xl': '80px',
    },
    lineHeight: {
      '3xs': '16px',
      'xxs': '21px',
      'xs': '24px',
      's': '28px',
      'm': '36px',
      'l': '44px',
      'xl': '60px',
      'xxl': '72px',
      '3xl': '93px',
    },
    letterSpacing: {
      '3xs': '-1.0px',
      'xxs': '-0.5px',
      'xs': '0px',
      's': '0.1px',
      'm': '0.15px',
      'l': '0.25px',
      'xl': '0.4px',
      'xxl': '0.5px',
      '3xl': '1.25px',
      '4xl': '1.5px',
    },
    opacity: {
      '38': '.38',
      '60': '.6',
      '74': '.74',
      '87': '.87',
    },
    colors: {
      ...brandColors,
      white: {
        light: "#fff",
        DEFAULT: "#fff",
        dark: "#000"
      },
      black: {
        light: "#000",
        DEFAULT: "#000",
        dark: "#fff"
      },
      primary: {
        light: brandColors.blue['900'],
        DEFAULT: brandColors.blue['900'],
        dark: brandColors.blue['200']
      },
      secondary:  {
        light: brandColors.pink['400'],
        DEFAULT: brandColors.pink['400'],
        dark:  brandColors.pink['200']
      },
      tertiary: {
        light: brandColors.purple['800'],
        DEFAULT: brandColors.purple['800'],
        dark: brandColors.purple['200']
      },
      quaternary: {
        light: brandColors.blue['200'], 
        DEFAULT: brandColors.blue['200'],
        dark: brandColors.blue['900']
      },
      background: {
        light: brandColors.white,
        DEFAULT: brandColors.white,
        dark: brandColors.black
      },
      surface: {
        light: brandColors.deepblue['50'],
        DEFAULT: brandColors.deepblue['50'],
        dark: brandColors.grayblue['900']
      },
      error: {
        light: brandColors.red['700'],
        DEFAULT: brandColors.red['700'],
        dark: brandColors.red['200']
      },
      outline: {
        light: brandColors.deepblue['100'],
        DEFAULT: brandColors.deepblue['100'],
        dark: brandColors.grayblue['600']
      },
      contrast: {
        primary: brandColors.white,
        secondary: brandColors.white,
        tertiary: brandColors.white,
        quaternary: {
          light: brandColors.blue['900'],
          DEFAULT: brandColors.blue['900'],
          dark: brandColors.blue['200']
        },
        background: {
          light: brandColors.deepblue['900'],
          DEFAULT: brandColors.deepblue['900'],
          dark: brandColors.deepblue['200']
        },
        surface: {
          light: brandColors.deepblue['900'],
          DEFAULT: brandColors.deepblue['900'],
          dark: brandColors.deepblue['50']
        },
        error: brandColors.white,
        outline: {
          light: brandColors.deepblue['900'],
          DEFAULT: brandColors.deepblue['900'],
          dark: brandColors.deepblue['100']
        },
      },
    },
    extend: {},
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('./plugins/darkmode'),
    require('./plugins/responsive-spacings'),
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
