// SPDX-License-Identifier: MIT
// © Daimler TSS GmbH
const plugin = require('tailwindcss/plugin')

const responsiveLayout = plugin(
  function ({ addComponents, addUtilities, theme, e, prefix, config }) {
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
          gridTemplateColumns: 'repeat(var(--layout-column-1x), minmax(0, 1fr))'
        },
        '@screen s': {
          maxWidth: '100%',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          columnGap: theme('spacing.2'),
          gridTemplateColumns: 'repeat(--layout-column-2x, minmax(0, 1fr))'
        },
        '@screen m': {
          maxWidth: 'var(--layout-application-m-body-max-size)',
          paddingLeft: theme('spacing.0'),
          paddingRight: theme('spacing.0'),
          columnGap: theme('spacing.3'),
          gridTemplateColumns: 'repeat(--layout-column-3x, minmax(0, 1fr))'
        },
        '@screen l': {
          maxWidth: '100%',
          paddingLeft: theme('spacing.24'),
          paddingRight: theme('spacing.24'),
          columnGap: theme('spacing.3'),
          gridTemplateColumns: 'repeat(--layout-column-3x, minmax(0, 1fr))'
        },
        '@screen xl': {
          maxWidth: 'var(--layout-application-xl-body-max-size)',
          paddingLeft: theme('spacing.0'),
          paddingRight: theme('spacing.0'),
          columnGap: theme('spacing.3'),
          gridTemplateColumns: 'repeat(--layout-column-3x, minmax(0, 1fr))'
        }
      }
    })
  }
);

module.exports = responsiveLayout;