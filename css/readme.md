# CSS

Minimal CSS in JS

Uses [Stylis.js](https://github.com/thysultan/stylis.js) and auto-injects style (similar to [emotion](https://github.com/emotion-js/emotion)).

## Install

### ECMAScript module

```html
<script type="module">
  import css from 'https://npmcdn.com/@happycat/css'
</script>
```

### CommonJS
```bash
npm install @happycat/css
```
```javascript
import css from '@happycat/css/cjs'
```

### Script tag

```html
<script src="https://npmcdn.com/@happycat/css/iife"></script>
<script>
  // happycat.css
</script>
```

## Use

```javascript

// Basic
const paragraph = css(`
  font-size: 4em;
  color: blue;
`)

// Extend
const pinkParagraph = css(paragraph, `
  color: hotpink;
`)

document.body.innerHTML = `
  <p class="${paragraph}">Here is a styled paragraph</p>
  <p class="${pinkParagraph}">Here is some PINK text</p>
`
```
