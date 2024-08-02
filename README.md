# button element
![tests](https://github.com/substrate-system/button-element/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/button-element?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![install size](https://packagephobia.com/badge?p=@substrate-system/button-element)](https://packagephobia.com/result?p=@substrate-system/button-element)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

A button component that can show resolving state.

There are two possible styles; import either `button-one` or `button-two`.

[See a live demo](https://substrate-system.github.io/button-element/)

<!-- toc -->

- [install](#install)
- [API](#api)
  * [exports](#exports)
  * [ESM](#esm)
  * [attributes](#attributes)
  * [Customize CSS variables](#customize-css-variables)
- [use](#use)
  * [JS](#js)
  * [HTML](#html)
  * [pre-built](#pre-built)

<!-- tocstop -->

## install

```sh
npm i -S @substrate-system/button-element
```

## API

This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports). Just import, then use the tag in HTML.

### exports
Either `button-one` or `button-two`. The default is `button-one`. They both do the same things, just with different styles.

### ESM

#### button-one
```js
import '@substrate-system/button-element'
import '@substrate-system/button-element/css'
// or minified
import '@substrate-system/button-element/css/min'
```

#### button-two
```js
import '@substrate-system/button-element/button-two'
import '@substrate-system/button-element/button-two/css'
// or minified
import '@substrate-system/button-element/button-two/css/min'
```

### attributes

#### `spinning`
Determines if the button content is a loading animation or not.

```js
const el = document.querySelector('button-element')
el.setAttribute('spinning', '')
setTimeout(() => {
  el.removeAttribute('spinning')
}, 2000)
```

#### `href`
If you pass `href`, then this will render an `a` tag instead of a `button`.

### Customize CSS variables

```css
button-two {
    --ss-transition: 0.2s;
    --ss-button-color: #36393d;
    --ss-button-disabled-color: #999da0;
    --ss-button-bgc: transparent;
    --ss-button-bgc-disabled: #f7f7f5; 
    --ss-button-bgc-focus: #f7f7f5;
    --ss-button-bgc-hover: #e6e6e6;
}

button-one {
    --ss-button-border-color: black;
    --ss-button-radius: 4px;
}
```

## use
This calls the global function `customElements.define`. Just import, then use
the tag in your HTML.

### JS
```ts
import '@substrate-system/button-element'
import '@substrate-system/button-element/css'
import '@substrate-system/button-element/button-two'
import '@substrate-system/button-element/button-two/css'
// or minified
import '@substrate-system/button-element/css/min'
import '@substrate-system/button-element/button-two/css/min'
```

### HTML
```html
<div>
    <button-element>click here</button-element>
    <button-two>click here</button-two>
</div>
```

### pre-built
This package exposes minified JS and CSS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
# button one
cp ./node_modules/@substrate-system/package/dist/button-one.min.js ./public/
cp ./node_modules/@substrate-system/button-element/dist/button-one.min.css ./public/
# button two
cp ./node_modules/@substrate-system/package/dist/button-two.min.js ./public/
cp ./node_modules/@substrate-system/button-element/dist/button-two.min.css ./public/
```

#### HTML
```html
<head>
    <link rel="stylesheet" href="./button-one.min.css">
    <link rel="stylesheet" href="./button-two.min.css">
</head>
<body>
    <!-- ... -->
    <script type="module" src="./button-one.min.js"></script>
    <script type="module" src="./button-two.min.js"></script>
</body>
```
