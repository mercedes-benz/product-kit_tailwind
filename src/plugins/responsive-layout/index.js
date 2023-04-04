// SPDX-License-Identifier: MIT
const plugin = require('tailwindcss/plugin')

const responsiveLayout = plugin(
  function ({ addComponents, addUtilities, theme, e, prefix, config }) {
    addComponents({
      '.container': {
        margin: 'auto',
        width: 'var(--layout-application-compact-xs-content-width)',
        maxWidth: 'var(--layout-application-compact-xs-content-max-width)',
        display: 'grid',
        columnGap: 'var(--layout-application-compact-xs-gutter-size)',
        gridTemplateColumns: 'repeat(var(--layout-application-compact-xs-column-amount), minmax(0, 1fr))',
        '@screen s': {
          width: 'var(--layout-application-compact-s-content-width)',
          maxWidth: 'var(--layout-application-compact-s-content-max-width)',
          columnGap: 'var(--layout-application-compact-s-gutter-size)',
          gridTemplateColumns: 'repeat(var(--layout-application-compact-s-column-amount), minmax(0, 1fr))'
        },
        '@screen m': {
          width: 'var(--layout-application-compact-m-content-width)',
          maxWidth: 'var(--layout-application-compact-m-content-max-width)',
          columnGap: 'var(--layout-application-compact-m-gutter-size)',
          gridTemplateColumns: 'repeat(var(--layout-application-compact-m-column-amount), minmax(0, 1fr))'
        },
        '@screen l': {
          width: 'var(--layout-application-compact-l-content-width)',
          maxWidth: 'var(--layout-application-compact-l-content-max-width)',
          columnGap: 'var(--layout-application-compact-l-gutter-size)',
          gridTemplateColumns: 'repeat(var(--layout-application-compact-l-column-amount), minmax(0, 1fr))'
        },
        '@screen xl': {
          width: 'var(--layout-application-compact-xl-content-width)',
          maxWidth: 'var(--layout-application-compact-xl-content-max-width)',
          columnGap: 'var(--layout-application-compact-xl-gutter-size)',
          gridTemplateColumns: 'repeat(var(--layout-application-compact-xl-column-amount), minmax(0, 1fr))'
        },
        '@screen xxl': {
          width: 'var(--layout-application-compact-xxl-content-width)',
          maxWidth: 'var(--layout-application-compact-xxl-content-max-width)',
          columnGap: 'var(--layout-application-compact-xxl-gutter-size)',
          gridTemplateColumns: 'repeat(var(--layout-application-compact-xxl-column-amount), minmax(0, 1fr))'
        }
      },
      '.container-wide': {
        margin: 'auto',
        width: 'var(--layout-application-wide-xs-content-width)',
        maxWidth: 'var(--layout-application-wide-xs-content-max-width)',
        display: 'grid',
        columnGap: 'var(--layout-application-wide-xs-gutter-size)',
        gridTemplateColumns: 'repeat(var(--layout-application-wide-xs-column-amount), minmax(0, 1fr))',
        '@screen s': {
          width: 'var(--layout-application-wide-s-content-width)',
          maxWidth: 'var(--layout-application-wide-s-content-max-width)',
          columnGap: 'var(--layout-application-wide-s-gutter-size)',
          gridTemplateColumns: 'repeat(var(--layout-application-wide-s-column-amount), minmax(0, 1fr))'
        },
        '@screen m': {
          width: 'var(--layout-application-wide-m-content-width)',
          maxWidth: 'var(--layout-application-wide-m-content-max-width)',
          columnGap: 'var(--layout-application-wide-m-gutter-size)',
          gridTemplateColumns: 'repeat(var(--layout-application-wide-m-column-amount), minmax(0, 1fr))'
        },
        '@screen l': {
          width: 'var(--layout-application-wide-l-content-width)',
          maxWidth: 'var(--layout-application-wide-l-content-max-width)',
          columnGap: 'var(--layout-application-wide-l-gutter-size)',
          gridTemplateColumns: 'repeat(var(--layout-application-wide-l-column-amount), minmax(0, 1fr))'
        },
        '@screen xl': {
          width: 'var(--layout-application-wide-xl-content-width)',
          maxWidth: 'var(--layout-application-wide-xl-content-max-width)',
          columnGap: 'var(--layout-application-wide-xl-gutter-size)',
          gridTemplateColumns: 'repeat(var(--layout-application-wide-xl-column-amount), minmax(0, 1fr))'
        },
        '@screen xxl': {
          width: 'var(--layout-application-wide-xxl-content-width)',
          maxWidth: 'var(--layout-application-wide-xxl-content-max-width)',
          columnGap: 'var(--layout-application-wide-xxl-gutter-size)',
          gridTemplateColumns: 'repeat(var(--layout-application-wide-xxl-column-amount), minmax(0, 1fr))'
        }
      }
    })
  }
);

module.exports = responsiveLayout;