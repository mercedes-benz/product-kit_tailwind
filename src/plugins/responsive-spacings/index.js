// SPDX-License-Identifier: MIT
// © Daimler TSS GmbH
const plugin = require('tailwindcss/plugin')

const responsiveSpacings = plugin(
  function ({ addComponents, addUtilities, theme, e, prefix, config }) {
    const spacings = theme('responsiveSpacing');
    const prefixes = ['m','mx','my','mt','mb','ml','mr','p','px','py','pt','pb','pr','pl','gap','gap-x','gap-y'];
    const classes = [];
    const properties = {
      'm': 'margin',
      'mx': ['margin-left', 'margin-right'],
      'my': ['margin-top', 'margin-bottom'],
      'mt': 'margin-top',
      'mb': 'margin-bottom',
      'mr': 'margin-right',
      'ml': 'margin-left',
      'p': 'padding',
      'px': ['padding-left', 'padding-right'],
      'py': ['padding-top', 'padding-bottom'],
      'pt': 'padding-top',
      'pb': 'padding-bottom',
      'pr': 'padding-right',
      'pl': 'padding-left',
      'gap': 'gap',
      'gap-x': 'column-gap',
      'gap-y': 'row-gap'
    }

    const generateClass = (prefix, breakpoint, layout, space) => {
      const className = `.${prefix}-${breakpoint}`
      const property = properties[prefix];
      
      if (Array.isArray(property)) {
        let arrayPropery = {};

        property.forEach((prop) => {
            arrayPropery = {...arrayPropery, [`${prop}`] : space}
        });
        if (theme('screens.' + layout) === '0px') {
          return {
            [`${className}`] : {
              ...arrayPropery
            }
          }
        }

        return {
          [`@media (min-width: ${theme('screens.' + layout)})`]: {
            [`${className}`] : {
              ...arrayPropery
            }
          }
        }
      } else {

        if (theme('screens.' + layout) === '0px') {
          return {
            [`${className}`] : {
              [`${property}`] : space
            }
          }
        }

        return {
          [`@media (min-width: ${theme('screens.' + layout)})`]: {
            [`${className}`] : {
              [`${property}`] : space
            }
          }
        }
      }
    }

    Object.entries(spacings).forEach(([spacing, value]) => {
      if (typeof value === 'object') {
        const layout = spacing;
        Object.entries(value).forEach(([breakpoint, space]) => {
          prefixes.forEach((prefix) => {
            classes.push(generateClass(prefix, breakpoint, layout, space))
          })
        })
      }
    })
    
    addComponents(classes)
  }
);

module.exports = responsiveSpacings;