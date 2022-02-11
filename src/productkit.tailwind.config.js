// SPDX-License-Identifier: MIT
// © Daimler TSS GmbH
module.exports = {
  darkMode: 'class',
  theme: {
    screens: require('./theme/size/screens'),
    spacing: require('./theme/size/spacing'),
    responsiveSpacing: require('./theme/size/responsiveSpacing'),
    fontFamily: require('./theme/font/fontFamily'),
    fontWeight: require('./theme/font/fontWeight'),
    fontSize: require('./theme/font/fontSize'),
    lineHeight: require('./theme/font/lineHeight'),
    letterSpacing: require('./theme/font/letterSpacing'),
    opacity: require('./theme/opacity/opacity'),
    colors: require('./theme/color/colors'),
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('./plugins/responsive-spacings'),
    function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
          display: 'grid',
          '@screen xs': {
            maxWidth: '100%',
            paddingLeft: theme('spacing.2'),
            paddingRight: theme('spacing.2'),
            columnGap: theme('spacing.2'),
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))'
          },
          '@screen s': {
            maxWidth: '100%',
            paddingLeft: theme('spacing.4'),
            paddingRight: theme('spacing.4'),
            columnGap: theme('spacing.2'),
            gridTemplateColumns: 'repeat(8, minmax(0, 1fr))'
          },
          '@screen m': {
            maxWidth: 'var(--layout-application-m-body-max-size)',
            paddingLeft: theme('spacing.0'),
            paddingRight: theme('spacing.0'),
            columnGap: theme('spacing.3'),
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))'
          },
          '@screen l': {
            maxWidth: '100%',
            paddingLeft: theme('spacing.24'),
            paddingRight: theme('spacing.24'),
            columnGap: theme('spacing.3'),
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))'
          },
          '@screen xl': {
            maxWidth: 'var(--layout-application-xl-body-max-size)',
            paddingLeft: theme('spacing.0'),
            paddingRight: theme('spacing.0'),
            columnGap: theme('spacing.3'),
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
          color: theme('colors.secondary'),
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
