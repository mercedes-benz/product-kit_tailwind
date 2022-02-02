const plugin = require("tailwindcss/plugin")

const responsiveSpacings = plugin(
  function ({ addComponents, addUtilities, theme, e, prefix, config }) {
    const spacings = theme("spacing");
    const prefixes = ['m', 'p', 'gap'];
    const classes = [];
    const properties = {
      'm': 'margin',
      'p': 'padding',
      'border': 'border-width'
    }

    console.log(e, prefix);


    const generateClass = (prefix, breakpoint, layout, space) => {
      const className = `.${prefix}-${breakpoint}`
      const property = properties[prefix];
      
      return {
        [`@media (min-width: ${theme("screens." + layout)})`]: {
          [`${className}`] : {
            [`${property}`] : space
          }
        }
      }
    }

    Object.entries(spacings).forEach(([spacing, value]) => {
      if (typeof value === 'object') {
        console.log(spacing, value)
        const layout = spacing;
        Object.entries(value).forEach(([breakpoint, space]) => {
          console.log('breakpoint_' + layout, breakpoint, space);
          prefixes.forEach((prefix) => {
            classes.push(generateClass(prefix, breakpoint, layout, space))
          })
        })
      }
    })
    
    addComponents(classes)
    console.log('classes', classes)

  }
);

module.exports = responsiveSpacings;