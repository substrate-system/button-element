# button element
![tests](https://github.com/substrate-system/button-element/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/button-element?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![install size](https://packagephobia.com/badge?p=@substrate-system/button-element)](https://packagephobia.com/result?p=@substrate-system/button-element)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

A button component with resolving, success, and error states.

[See a live demo](https://substrate-system.github.io/button-element/)

<!-- toc -->

## install

```sh
npm i -S @substrate-system/button-element
```

## API

This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### ESM
```js
import '@substrate-system/button-element'
import '@substrate-system/button-element/css'
// or minified
import '@substrate-system/button-element/css/min'
```

### Common JS
```js
require('@substrate-system/button-element')
```

### Customize CSS via some variables

```css
button-element {
    --example: pink;
}
```

## use
This calls the global function `customElements.define`. Just import, then use
the tag in your HTML.

### JS
```js
import '@substrate-system/button-element'
import '@substrate-system/button-element/css'
// or minified
import '@substrate-system/button-element/css/min'
```

### HTML
```html
<div>
    <button-element></button-element>
</div>
```

### pre-built
This package exposes minified JS and CSS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@substrate-system/package/dist/index.min.js ./public/button-element.min.js
cp ./node_modules/@substrate-system/button-element/dist/style.min.css ./public/button-element.css
```

#### HTML
```html
<head>
    <link rel="stylesheet" href="./button-element.css">
</head>
<body>
    <!-- ... -->
    <script type="module" src="./button-element.min.js"></script>
</body>
```
