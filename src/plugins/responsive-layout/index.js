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
          gridTemplateColumns: 'repeat(var(--layout-column-2x), minmax(0, 1fr))'
        },
        '@screen m': {
          maxWidth: 'var(--layout-application-compact-m-body-max-size)',
          paddingLeft: theme('spacing.0'),
          paddingRight: theme('spacing.0'),
          columnGap: theme('spacing.3'),
          gridTemplateColumns: 'repeat(var(--layout-column-3x), minmax(0, 1fr))'
        },
        '@screen l': {
          maxWidth: '100%',
          paddingLeft: theme('spacing.24'),
          paddingRight: theme('spacing.24'),
          columnGap: theme('spacing.3'),
          gridTemplateColumns: 'repeat(var(--layout-column-3x), minmax(0, 1fr))'
        },
        '@screen xl': {
          maxWidth: 'var(--layout-application-compact-xl-body-max-size)',
          paddingLeft: theme('spacing.0'),
          paddingRight: theme('spacing.0'),
          columnGap: theme('spacing.3'),
          gridTemplateColumns: 'repeat(var(--layout-column-3x), minmax(0, 1fr))'
        }
      },
      '.container-wide': {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 'var(--layout-application-wide-xs-body-max-size)',
        display: 'grid',
        '@screen xs': {
          maxWidth: 'var(--layout-application-wide-xs-body-max-size)',
          columnGap: theme('spacing.2'),
          gridTemplateColumns: 'repeat(var(--layout-column-1x), minmax(0, 1fr))'
        },
        '@screen s': {
          maxWidth: 'var(--layout-application-wide-s-body-max-size)',
          columnGap: theme('spacing.3'),
          gridTemplateColumns: 'repeat(var(--layout-column-3x), minmax(0, 1fr))'
        },
        '@screen m': {
          maxWidth: 'var(--layout-application-wide-m-body-max-size)',
          columnGap: theme('spacing.3'),
          gridTemplateColumns: 'repeat(var(--layout-column-3x), minmax(0, 1fr))'
        },
        '@screen l': {
          maxWidth: 'var(--layout-application-wide-l-body-max-size)',
          columnGap: theme('spacing.3'),
          gridTemplateColumns: 'repeat(var(--layout-column-3x), minmax(0, 1fr))'
        },
        '@screen xl': {
          maxWidth: 'var(--layout-application-wide-xl-body-max-size)',
          columnGap: theme('spacing.3'),
          gridTemplateColumns: 'repeat(var(--layout-column-3x), minmax(0, 1fr))'
        }
      }
    })
  }
);

module.exports = responsiveLayout;