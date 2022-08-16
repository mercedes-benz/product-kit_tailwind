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
    require('./plugins/responsive-typography'),
    require('./plugins/responsive-layout'),
    function ({ addComponents, theme }) {
      addComponents({
        '.divider': {
          backgroundColor: theme('colors.secondary'),
          height: '3px',
          '@screen m': {
            height: '4px',
          }
        },
      })
    },
  ]
}
