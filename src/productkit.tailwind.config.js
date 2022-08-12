// SPDX-License-Identifier: MIT
module.exports = {
  darkMode: 'class',
  theme: {
    screens: require('./theme/size/screens'),
    spacing: require('./theme/size/spacing'),
    responsiveSpacing: require('./theme/size/responsiveSpacing'),
    fontWeight: require('./theme/font/fontWeight'),
    opacity: require('./theme/opacity/opacity'),
    colors: require('./theme/color/colors'),
    borderRadius: require('./theme/size/borderRadius'),
  },
  plugins: [
    require('./plugins/responsive-spacings'),
    require('./plugins/responsive-typography'),
    require('./plugins/responsive-layout'),
    function ({ addComponents, theme }) {
      addComponents({
        '.divider': {
          backgroundColor: theme('colors.primary'),
          height: '3px',
          '@screen m': {
            height: '4px',
          }
        },
      })
    },
  ]
}
