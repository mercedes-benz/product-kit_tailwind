<!-- SPDX-License-Identifier: MIT -->
# ![Product Kit Tailwind Logo](./docs/images/pk_tailwind_title_image.png)

![license](https://img.shields.io/badge/license-MIT-38de03e?style=flat)
[![npm](https://img.shields.io/npm/v/@mercedes-benz/productkit-tailwind)](https://www.npmjs.com/package/@mercedes-benz/productkit-tailwind)

> **Note** <br>
> With the release of v2.2.0 and all future versions, product-kit_tailwind is available under the npm scope @mercedes-benz/productkit-tailwind.

Product Kit Tailwind translates design tokens of [Product Kit Core](https://github.com/mercedes-benz/product-kit_core) in the form of a predefined tailwind.config.js which can be imported in your own Tailwind config so you can start writing frontend code without learning how to adapt to styleguide specifications.

The following theme definitions have predefined values from [Product Kit Core](https://github.com/mercedes-benz/product-kit_core):

* Colors
* Typography
* Spacing
* Layout
* Opacity
* Sizes

> If you need further improvements to Product Kit Tailwind or miss something from the styleguide feel free to open an [issue](https://github.com/mercedes-benz/product-kit_tailwind/issues)!

## Installation

`1.` Add Product Kit Tailwind as a dependency through npm:

```bash
npm install -D @mercedes-benz/productkit-tailwind
```

`2.` Import Product Kit Tailwind to your tailwind.config.js like so:

```javascript
module.exports = {
  presets: [
    require('@mercedes-benz/productkit-tailwind/src/productkit.tailwind.config.js')
  ]
```

`5.` Add additional style information to your main `styles` css

```css
@import 'tailwindcss/base';
@import '@mercedes-benz/productkit-tailwind/src/styles.css';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

## Usage

Product Kit Tailwind offers utility functions for frontends incorporating the styleguide of Mercedes-Benz Tech Innovation.

If you want to get the most out of Product Kit Tailwind please familiarise yourself with [Product Kit Core](https://github.com/mercedes-benz/product-kit_core) and its design tokens.

### Colors

All colors defined in [Product Kit Core](https://github.com/mercedes-benz/product-kit_core) can be referenced through Tailwinds utility functions:

```html
<div class="bg-primary text-contrast-background border-goldentainoi-400">
```

There is no need to specify dark mode specific colors. Application colors like `primary`, `secondary`, `background` or `surface` will automatically switch to their dark mode representations. Learn more about this behavior in the `Dark Mode` section below.

> If you want to have a list of all the predefined colors please take a look at the color defnitions [here](https://github.com/mercedes-benz/product-kit_tailwind/raw/main/src/theme/color/colors.js).

### Spacings

Product Kit Tailwind comes preloaded with styleguide specific spacing definitions which can be used through Tailwinds utility functions:

```html
<div class="mt-2 px-3 gap-y-16">
```

Additionally to these abolute spacing defintions you can use opinionated spacing styles that behave according to viewport sizes (dynamic spacing):

```html
<div class="mt-m">
```

The class above will translate to the following css:

```css
...
@media (min-width: 600px) {
    .mt-m {
        margin-top: 32px;
    }
}
@media (min-width: 905px) {
    .mt-m {
        margin-top: 48px;
    }
}
...
```

### Typography

Every text style defined in [Product Kit Core](https://github.com/mercedes-benz/product-kit_core) can easily be specified with a css class:

```html
<span class="text-headline3">
    This is a headline!
</span>
```

When using a predefined text style class you get responsive behavior for free! The above class definition will translate to: (example values)

```css
.text-headline3 {
    font-size: 34px;
    line-height: 44px;
    letter-spacing: 0.1px;
    text-transform: uppercase;
}
@screen m {
    .text-headline3 {
        font-size: 48px;
        line-height: 60px;
        letter-spacing: 0px;
    }
}
```

> If you want to have a list of all the predefined text styles please take a look at the responsive typography plugin [here](https://github.com/mercedes-benz/product-kit_tailwind/raw/main/src/plugins/responsive-typography/index.js).

#### Headline Divider

The styleguide defines a divider below headlines. You can use the predefined class `.divider` to get a responsive line below headlines.

```html
<div class="divider" />
```

> **Note:** You have to calculate the width of the divider according to the headline size. Learn more about the divider behavior in the Mercedes-Benz Tech Innovation styleguide.

### Responsive Layout

Product Kit Tailwind provides a `.container` and `.container-wide` class that you can use to adapt the content of your frontend to layout specifications of [Product Kit Core](https://github.com/mercedes-benz/product-kit_core). Everything inside your container element is arranged according to predefined breakpoints and grid definitions.

```html
<div class="container">
    Responsive Body
</div>
```

The class above will translate to the following css: (example values)

```css
.container {
    width: 90%;
    display: grid;
    margin: auto;
}
@screen xs {
    .container {
        width: 87%;
        column-gap: 16px;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}
...
```

### Dark Mode

You can get dark mode specific colors by adding `.dark` to the root element of your html code:

```html
<html class="dark">
```

This will automatically switch application colors to their dark mode counterpart.

If you need further guidance in how to implement a dark mode switch please take a look inside the test directory [here](https://github.com/mercedes-benz/product-kit_tailwind/raw/main/test/public/index.html).

The following color names will switch automatically:

* primary
* secondary
* tertiary
* quternary
* background
* surface
* outline
* error
* success
* **all contrast colors**

> **Note**: Contrast colors are used as text colors. If text is displayed on the background color `primary` the text color should be `contrast-primary`. Please also make yourself familiar with text opacity values. You can find further information [here](https://github.com/mercedes-benz/product-kit_core/blob/main/src/tokens/opacity/application.json).

## Contributing

We welcome any contributions.
If you want to contribute to this project, please read the [contributing guide](CONTRIBUTING.md).

## Code of Conduct

Please read our [Code of Conduct](https://github.com/mercedes-benz/foss/blob/master/CODE_OF_CONDUCT.md) as it is our base for interaction.

## License

This project is licensed under the [MIT LICENSE](LICENSE).

## Provider Information

Please visit <https://www.mercedes-benz-techinnovation.com/en/imprint/> for information on the provider.

Notice: Before you use the program in productive use, please take all necessary precautions,
e.g. testing and verifying the program with regard to your specific use.
The program was tested solely for our own use cases, which might differ from yours.
