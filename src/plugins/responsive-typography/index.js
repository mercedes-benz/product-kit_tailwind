// SPDX-License-Identifier: MIT
// © Daimler TSS GmbH
const plugin = require('tailwindcss/plugin')

const responsiveTypography = plugin(
  function ({ addComponents, addUtilities, theme, e, prefix, config }) {
    addComponents({
      '.text-headline1': {
        fontSize: theme('fontSize.3xl'),
        lineHeight: theme('lineHeight.xxl'),
        letterSpacing: theme('letterSpacing.xxs'),
        textTransform: 'var(--font-application-s-headline1-text-transform)',
        '@screen m': {
          fontSize: theme('fontSize.4xl'),
          lineHeight: theme('lineHeight.3xl'),
          letterSpacing: theme('letterSpacing.3xs'),
          textTransform: 'var(--font-application-l-headline1-text-transform)',
        }
      },
      '.text-headline2': {
        fontSize: theme('fontSize.xxl'),
        lineHeight: theme('lineHeight.xl'),
        letterSpacing: theme('letterSpacing.xs'),
        textTransform: 'var(--font-application-s-headline2-text-transform)',
        '@screen m': {
          fontSize: theme('fontSize.3xl'),
          lineHeight: theme('lineHeight.xxl'),
          letterSpacing: theme('letterSpacing.xxs'),
          textTransform: 'var(--font-application-l-headline2-text-transform)',
        }
      },
      '.text-headline3': {
        fontSize: theme('fontSize.xl'),
        lineHeight: theme('lineHeight.l'),
        letterSpacing: theme('letterSpacing.s'),
        textTransform: 'var(--font-application-s-headline3-text-transform)',
        '@screen m': {
          fontSize: theme('fontSize.xxl'),
          lineHeight: theme('lineHeight.xl'),
          letterSpacing: theme('letterSpacing.xs'),
          textTransform: 'var(--font-application-l-headline3-text-transform)',
        }
      },
      '.text-headline4': {
        fontSize: theme('fontSize.l'),
        lineHeight: theme('lineHeight.m'),
        letterSpacing: theme('letterSpacing.m'),
        textTransform: 'var(--font-application-s-headline4-text-transform)',
        '@screen m': {
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('lineHeight.l'),
          letterSpacing: theme('letterSpacing.s'),
          textTransform: 'var(--font-application-l-headline4-text-transform)',
        }
      },
      '.text-headline5': {
        fontSize: theme('fontSize.m'),
        lineHeight: theme('lineHeight.s'),
        letterSpacing: theme('letterSpacing.l'),
        textTransform: 'var(--font-application-s-headline5-text-transform)',
        '@screen m': {
          fontSize: theme('fontSize.l'),
          lineHeight: theme('lineHeight.m'),
          letterSpacing: theme('letterSpacing.m'),
          textTransform: 'var(--font-application-l-headline5-text-transform)',
        }
      },
      '.text-headline6': {
        fontSize: theme('fontSize.s'),
        lineHeight: theme('lineHeight.xs'),
        letterSpacing: theme('letterSpacing.xl'),
        textTransform: 'var(--font-application-s-headline6-text-transform)',
        '@screen m': {
          fontSize: theme('fontSize.m'),
          lineHeight: theme('lineHeight.s'),
          letterSpacing: theme('letterSpacing.l'),
          textTransform: 'var(--font-application-l-headline6-text-transform)',
        }
      },
      '.text-subtitle1': {
        fontSize: theme('fontSize.xs'),
        lineHeight: theme('lineHeight.s'),
        letterSpacing: theme('letterSpacing.l'),
        textTransform: 'var(--font-application-s-subtitle1-text-transform)',
        '@screen m': {
          fontSize: theme('fontSize.s'),
          lineHeight: theme('lineHeight.m'),
          letterSpacing: theme('letterSpacing.m'),
          textTransform: 'var(--font-application-l-subtitle1-text-transform)',
        }
      },
      '.text-subtitle2': {
        fontSize: theme('fontSize.xxs'),
        lineHeight: theme('lineHeight.xs'),
        letterSpacing: theme('letterSpacing.m'),
        textTransform: 'var(--font-application-s-subtitle2-text-transform)',
        '@screen m': {
          fontSize: theme('fontSize.xs'),
          lineHeight: theme('lineHeight.s'),
          letterSpacing: theme('letterSpacing.s'),
          textTransform: 'var(--font-application-l-subtitle2-text-transform)',
        }
      },
      '.text-body1': {
        fontSize: theme('fontSize.xs'),
        lineHeight: theme('lineHeight.xs'),
        letterSpacing: theme('letterSpacing.xxl'),
        textTransform: 'var(--font-application-s-body1-text-transform)',
        '@screen m': {
          fontSize: theme('fontSize.s'),
          lineHeight: theme('lineHeight.s'),
          letterSpacing: theme('letterSpacing.xxl'),
          textTransform: 'var(--font-application-l-body1-text-transform)',
        }
      },
      '.text-body2': {
        fontSize: theme('fontSize.xxs'),
        lineHeight: theme('lineHeight.xxs'),
        letterSpacing: theme('letterSpacing.xl'),
        textTransform: 'var(--font-application-s-body2-text-transform)',
        '@screen m': {
          fontSize: theme('fontSize.xs'),
          lineHeight: theme('lineHeight.xs'),
          letterSpacing: theme('letterSpacing.l'),
          textTransform: 'var(--font-application-l-body2-text-transform)',
        }
      },
      '.text-button': {
        fontSize: theme('fontSize.xs'),
        lineHeight: theme('lineHeight.xxs'),
        letterSpacing: theme('letterSpacing.3xl'),
        textTransform: 'var(--font-application-s-button-text-transform)',
        '@screen m': {
          fontSize: theme('fontSize.xs'),
          lineHeight: theme('lineHeight.xxs'),
          letterSpacing: theme('letterSpacing.3xl'),
          textTransform: 'var(--font-application-l-button-text-transform)',
        }
      },
      '.text-caption': {
        fontSize: theme('fontSize.3xs'),
        lineHeight: theme('lineHeight.xxs'),
        letterSpacing: theme('letterSpacing.xl'),
        textTransform: 'var(--font-application-s-caption-text-transform)',
        '@screen m': {
          fontSize: theme('fontSize.3xs'),
          lineHeight: theme('lineHeight.xxs'),
          letterSpacing: theme('letterSpacing.xl'),
          textTransform: 'var(--font-application-l-caption-text-transform)',
        }
      },
      '.text-overline': {
        fontSize: theme('fontSize.3xs'),
        lineHeight: theme('lineHeight.xxs'),
        letterSpacing: theme('letterSpacing.4xl'),
        textTransform: 'var(--font-application-s-overline-text-transform)',
        fontWeight: theme('fontWeight.bold'),
        color: theme('colors.secondary'),
        '@screen m': {
          fontSize: theme('fontSize.3xs'),
          lineHeight: theme('lineHeight.xxs'),
          letterSpacing: theme('letterSpacing.4xl'),
          textTransform: 'var(--font-application-l-overline-text-transform)',
        }
      }
    })
  }
);

module.exports = responsiveTypography;