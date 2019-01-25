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

### Simple

```javascript
const pink = css('color: hotpink;')
document.body.innerHTML = '<h1 class="${pink}">I want it pink!</h1>'
```

### Extend

```javascript
const text = css(`
  font-size: 4em;
  color: blue;
`)

const pink = css(style, `
  color: hotpink;
`)

document.body.innerHTML = `
  <h1 class="${text}">Here is some text</h1>
  <p class="${pink}">Here is some PINK text</p>
`
```
