// SPDX-License-Identifier: MIT
const plugin = require('tailwindcss/plugin')

const responsiveTypography = plugin(
  function ({ addComponents, addUtilities, theme, e, prefix, config }) {
    addComponents({
      '.text-headline1': {
        fontSize: 'var(--font-application-s-headline1-font-size)',
        lineHeight: 'var(--font-application-s-headline1-line-height)',
        letterSpacing: 'var(--font-application-s-headline1-letter-spacing)',
        textTransform: 'var(--font-application-s-headline1-text-transform)',
        fontWeight: 'var(--font-application-s-headline1-font-weight)',
        fontFamily: 'var(--font-application-s-headline1-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-headline1-font-size)',
          lineHeight: 'var(--font-application-l-headline1-line-height)',
          letterSpacing: 'var(--font-application-l-headline1-letter-spacing)',
          textTransform: 'var(--font-application-l-headline1-text-transform)',
          fontWeight: 'var(--font-application-l-headline1-font-weight)',
          fontFamily: 'var(--font-application-l-headline1-font-family)',
        }
      },
      '.text-headline2': {
        fontSize: 'var(--font-application-s-headline2-font-size)',
        lineHeight: 'var(--font-application-s-headline2-line-height)',
        letterSpacing: 'var(--font-application-s-headline2-letter-spacing)',
        textTransform: 'var(--font-application-s-headline2-text-transform)',
        fontWeight: 'var(--font-application-s-headline2-font-weight)',
        fontFamily: 'var(--font-application-s-headline2-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-headline2-font-size)',
          lineHeight: 'var(--font-application-l-headline2-line-height)',
          letterSpacing: 'var(--font-application-l-headline2-letter-spacing)',
          textTransform: 'var(--font-application-l-headline2-text-transform)',
          fontWeight: 'var(--font-application-l-headline2-font-weight)',
          fontFamily: 'var(--font-application-l-headline2-font-family)',
        }
      },
      '.text-headline3': {
        fontSize: 'var(--font-application-s-headline3-font-size)',
        lineHeight: 'var(--font-application-s-headline3-line-height)',
        letterSpacing: 'var(--font-application-s-headline3-letter-spacing)',
        textTransform: 'var(--font-application-s-headline3-text-transform)',
        fontWeight: 'var(--font-application-s-headline3-font-weight)',
        fontFamily: 'var(--font-application-s-headline3-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-headline3-font-size)',
          lineHeight: 'var(--font-application-l-headline3-line-height)',
          letterSpacing: 'var(--font-application-l-headline3-letter-spacing)',
          textTransform: 'var(--font-application-l-headline3-text-transform)',
          fontWeight: 'var(--font-application-l-headline3-font-weight)',
          fontFamily: 'var(--font-application-l-headline3-font-family)',
        }
      },
      '.text-headline4': {
        fontSize: 'var(--font-application-s-headline4-font-size)',
        lineHeight: 'var(--font-application-s-headline4-line-height)',
        letterSpacing: 'var(--font-application-s-headline4-letter-spacing)',
        textTransform: 'var(--font-application-s-headline4-text-transform)',
        fontWeight: 'var(--font-application-s-headline4-font-weight)',
        fontFamily: 'var(--font-application-s-headline4-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-headline4-font-size)',
          lineHeight: 'var(--font-application-l-headline4-line-height)',
          letterSpacing: 'var(--font-application-l-headline4-letter-spacing)',
          textTransform: 'var(--font-application-l-headline4-text-transform)',
          fontWeight: 'var(--font-application-l-headline4-font-weight)',
          fontFamily: 'var(--font-application-l-headline4-font-family)',
        }
      },
      '.text-headline5': {
        fontSize: 'var(--font-application-s-headline5-font-size)',
        lineHeight: 'var(--font-application-s-headline5-line-height)',
        letterSpacing: 'var(--font-application-s-headline5-letter-spacing)',
        textTransform: 'var(--font-application-s-headline5-text-transform)',
        fontWeight: 'var(--font-application-s-headline5-font-weight)',
        fontFamily: 'var(--font-application-s-headline5-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-headline5-font-size)',
          lineHeight: 'var(--font-application-l-headline5-line-height)',
          letterSpacing: 'var(--font-application-l-headline5-letter-spacing)',
          textTransform: 'var(--font-application-l-headline5-text-transform)',
          fontWeight: 'var(--font-application-l-headline5-font-weight)',
          fontFamily: 'var(--font-application-l-headline5-font-family)',
        }
      },
      '.text-headline6': {
        fontSize: 'var(--font-application-s-headline6-font-size)',
        lineHeight: 'var(--font-application-s-headline6-line-height)',
        letterSpacing: 'var(--font-application-s-headline6-letter-spacing)',
        textTransform: 'var(--font-application-s-headline6-text-transform)',
        fontWeight: 'var(--font-application-s-headline6-font-weight)',
        fontFamily: 'var(--font-application-s-headline6-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-headline6-font-size)',
          lineHeight: 'var(--font-application-l-headline6-line-height)',
          letterSpacing: 'var(--font-application-l-headline6-letter-spacing)',
          textTransform: 'var(--font-application-l-headline6-text-transform)',
          fontWeight: 'var(--font-application-l-headline6-font-weight)',
          fontFamily: 'var(--font-application-l-headline6-font-family)',
        }
      },
      '.text-subtitle1': {
        fontSize: 'var(--font-application-s-subtitle1-font-size)',
        lineHeight: 'var(--font-application-s-subtitle1-line-height)',
        letterSpacing: 'var(--font-application-s-subtitle1-letter-spacing)',
        textTransform: 'var(--font-application-s-subtitle1-text-transform)',
        fontWeight: 'var(--font-application-s-subtitle1-font-weight)',
        fontFamily: 'var(--font-application-s-subtitle1-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-subtitle1-font-size)',
          lineHeight: 'var(--font-application-l-subtitle1-line-height)',
          letterSpacing: 'var(--font-application-l-subtitle1-letter-spacing)',
          textTransform: 'var(--font-application-l-subtitle1-text-transform)',
          fontWeight: 'var(--font-application-l-subtitle1-font-weight)',
          fontFamily: 'var(--font-application-l-subtitle1-font-family)',
        }
      },
      '.text-subtitle1-strong': {
        fontSize: 'var(--font-application-s-subtitle1-strong-font-size)',
        lineHeight: 'var(--font-application-s-subtitle1-strong-line-height)',
        letterSpacing: 'var(--font-application-s-subtitle1-strong-letter-spacing)',
        textTransform: 'var(--font-application-s-subtitle1-strong-text-transform)',
        fontWeight: 'var(--font-application-s-subtitle1-strong-font-weight)',
        fontFamily: 'var(--font-application-s-subtitle1-strong-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-subtitle1-strong-font-size)',
          lineHeight: 'var(--font-application-l-subtitle1-strong-line-height)',
          letterSpacing: 'var(--font-application-l-subtitle1-strong-letter-spacing)',
          textTransform: 'var(--font-application-l-subtitle1-strong-text-transform)',
          fontWeight: 'var(--font-application-l-subtitle1-strong-font-weight)',
          fontFamily: 'var(--font-application-l-subtitle1-strong-font-family)',
        }
      },
      '.text-subtitle2': {
        fontSize: 'var(--font-application-s-subtitle2-font-size)',
        lineHeight: 'var(--font-application-s-subtitle2-line-height)',
        letterSpacing: 'var(--font-application-s-subtitle2-letter-spacing)',
        textTransform: 'var(--font-application-s-subtitle2-text-transform)',
        fontWeight: 'var(--font-application-s-subtitle2-font-weight)',
        fontFamily: 'var(--font-application-s-subtitle2-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-subtitle2-font-size)',
          lineHeight: 'var(--font-application-l-subtitle2-line-height)',
          letterSpacing: 'var(--font-application-l-subtitle2-letter-spacing)',
          textTransform: 'var(--font-application-l-subtitle2-text-transform)',
          fontWeight: 'var(--font-application-l-subtitle2-font-weight)',
          fontFamily: 'var(--font-application-l-subtitle2-font-family)',
        }
      },
      '.text-subtitle2-strong': {
        fontSize: 'var(--font-application-s-subtitle2-strong-font-size)',
        lineHeight: 'var(--font-application-s-subtitle2-strong-line-height)',
        letterSpacing: 'var(--font-application-s-subtitle2-strong-letter-spacing)',
        textTransform: 'var(--font-application-s-subtitle2-strong-text-transform)',
        fontWeight: 'var(--font-application-s-subtitle2-strong-font-weight)',
        fontFamily: 'var(--font-application-s-subtitle2-strong-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-subtitle2-strong-font-size)',
          lineHeight: 'var(--font-application-l-subtitle2-strong-line-height)',
          letterSpacing: 'var(--font-application-l-subtitle2-strong-letter-spacing)',
          textTransform: 'var(--font-application-l-subtitle2-strong-text-transform)',
          fontWeight: 'var(--font-application-l-subtitle2-strong-font-weight)',
          fontFamily: 'var(--font-application-l-subtitle2-strong-font-family)',
        }
      },
      '.text-body1': {
        fontSize: 'var(--font-application-s-body1-font-size)',
        lineHeight: 'var(--font-application-s-body1-line-height)',
        letterSpacing: 'var(--font-application-s-body1-letter-spacing)',
        textTransform: 'var(--font-application-s-body1-text-transform)',
        fontWeight: 'var(--font-application-s-body1-font-weight)',
        fontFamily: 'var(--font-application-s-body1-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-body1-font-size)',
          lineHeight: 'var(--font-application-l-body1-line-height)',
          letterSpacing: 'var(--font-application-l-body1-letter-spacing)',
          textTransform: 'var(--font-application-l-body1-text-transform)',
          fontWeight: 'var(--font-application-l-body1-font-weight)',
          fontFamily: 'var(--font-application-l-body1-font-family)',
        }
      },
      '.text-body1-strong': {
        fontSize: 'var(--font-application-s-body1-strong-font-size)',
        lineHeight: 'var(--font-application-s-body1-strong-line-height)',
        letterSpacing: 'var(--font-application-s-body1-strong-letter-spacing)',
        textTransform: 'var(--font-application-s-body1-strong-text-transform)',
        fontWeight: 'var(--font-application-s-body1-strong-font-weight)',
        fontFamily: 'var(--font-application-s-body1-strong-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-body1-strong-font-size)',
          lineHeight: 'var(--font-application-l-body1-strong-line-height)',
          letterSpacing: 'var(--font-application-l-body1-strong-letter-spacing)',
          textTransform: 'var(--font-application-l-body1-strong-text-transform)',
          fontWeight: 'var(--font-application-l-body1-strong-font-weight)',
          fontFamily: 'var(--font-application-l-body1-strong-font-family)',
        }
      },
      '.text-body2': {
        fontSize: 'var(--font-application-s-body2-font-size)',
        lineHeight: 'var(--font-application-s-body2-line-height)',
        letterSpacing: 'var(--font-application-s-body2-letter-spacing)',
        textTransform: 'var(--font-application-s-body2-text-transform)',
        fontWeight: 'var(--font-application-s-body2-font-weight)',
        fontFamily: 'var(--font-application-s-body2-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-body2-font-size)',
          lineHeight: 'var(--font-application-l-body2-line-height)',
          letterSpacing: 'var(--font-application-l-body2-letter-spacing)',
          textTransform: 'var(--font-application-l-body2-text-transform)',
          fontWeight: 'var(--font-application-l-body2-font-weight)',
          fontFamily: 'var(--font-application-l-body2-font-family)',
        }
      },
      '.text-body2-strong': {
        fontSize: 'var(--font-application-s-body2-strong-font-size)',
        lineHeight: 'var(--font-application-s-body2-strong-line-height)',
        letterSpacing: 'var(--font-application-s-body2-strong-letter-spacing)',
        textTransform: 'var(--font-application-s-body2-strong-text-transform)',
        fontWeight: 'var(--font-application-s-body2-strong-font-weight)',
        fontFamily: 'var(--font-application-s-body2-strong-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-body2-strong-font-size)',
          lineHeight: 'var(--font-application-l-body2-strong-line-height)',
          letterSpacing: 'var(--font-application-l-body2-strong-letter-spacing)',
          textTransform: 'var(--font-application-l-body2-strong-text-transform)',
          fontWeight: 'var(--font-application-l-body2-strong-font-weight)',
          fontFamily: 'var(--font-application-l-body2-strong-font-family)',
        }
      },
      '.text-button': {
        fontSize: 'var(--font-application-s-button-font-size)',
        lineHeight: 'var(--font-application-s-button-line-height)',
        letterSpacing: 'var(--font-application-s-button-letter-spacing)',
        textTransform: 'var(--font-application-s-button-text-transform)',
        fontWeight: 'var(--font-application-s-button-font-weight)',
        fontFamily: 'var(--font-application-s-button-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-button-font-size)',
          lineHeight: 'var(--font-application-l-button-line-height)',
          letterSpacing: 'var(--font-application-l-button-letter-spacing)',
          textTransform: 'var(--font-application-l-button-text-transform)',
          fontWeight: 'var(--font-application-l-button-font-weight)',
          fontFamily: 'var(--font-application-l-button-font-family)',
        }
      },
      '.text-caption': {
        fontSize: 'var(--font-application-s-caption-font-size)',
        lineHeight: 'var(--font-application-s-caption-line-height)',
        letterSpacing: 'var(--font-application-s-caption-letter-spacing)',
        textTransform: 'var(--font-application-s-caption-text-transform)',
        fontWeight: 'var(--font-application-s-caption-font-weight)',
        fontFamily: 'var(--font-application-s-caption-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-caption-font-size)',
          lineHeight: 'var(--font-application-l-caption-line-height)',
          letterSpacing: 'var(--font-application-l-caption-letter-spacing)',
          textTransform: 'var(--font-application-l-caption-text-transform)',
          fontWeight: 'var(--font-application-l-caption-font-weight)',
          fontFamily: 'var(--font-application-l-caption-font-family)',
        }
      },
      '.text-caption-strong': {
        fontSize: 'var(--font-application-s-caption-strong-font-size)',
        lineHeight: 'var(--font-application-s-caption-strong-line-height)',
        letterSpacing: 'var(--font-application-s-caption-strong-letter-spacing)',
        textTransform: 'var(--font-application-s-caption-strong-text-transform)',
        fontWeight: 'var(--font-application-s-caption-strong-font-weight)',
        fontFamily: 'var(--font-application-s-caption-strong-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-caption-strong-font-size)',
          lineHeight: 'var(--font-application-l-caption-strong-line-height)',
          letterSpacing: 'var(--font-application-l-caption-strong-letter-spacing)',
          textTransform: 'var(--font-application-l-caption-strong-text-transform)',
          fontWeight: 'var(--font-application-l-caption-strong-font-weight)',
          fontFamily: 'var(--font-application-l-caption-strong-font-family)',
        }
      },
      '.text-overline': {
        fontSize: 'var(--font-application-s-overline-font-size)',
        lineHeight: 'var(--font-application-s-overline-line-height)',
        letterSpacing: 'var(--font-application-s-overline-letter-spacing)',
        textTransform: 'var(--font-application-s-overline-text-transform)',
        fontWeight: 'var(--font-application-s-overline-font-weight)',
        fontFamily: 'var(--font-application-s-overline-font-family)',
        '@screen l': {
          fontSize: 'var(--font-application-l-overline-font-size)',
          lineHeight: 'var(--font-application-l-overline-line-height)',
          letterSpacing: 'var(--font-application-l-overline-letter-spacing)',
          textTransform: 'var(--font-application-l-overline-text-transform)',
          fontWeight: 'var(--font-application-l-overline-font-weight)',
          fontFamily: 'var(--font-application-l-overline-font-family)',
        }
      }
    })
  }
);

module.exports = responsiveTypography;