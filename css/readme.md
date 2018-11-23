# CSS

Minimal CSS in JS

Uses [Stylis.js](https://github.com/thysultan/stylis.js) and auto-injects style (similar to [emotion](https://github.com/emotion-js/emotion)).

## Use

### Simple

```javascript
const pink = css('color: hotpink;')
document.body.innerHTML = '<h1 class="${pink}">I want it pink!</h1>'
```

### Extend

```javascript
const style = css(`
  font-size: 4em;
  color: blue;
`)

const pink = 'color: hotpink;'

const text = document.createElement('h1')

text.innerText = 'Hello'
text.className = css(style, pink)

document.body.appendChild(text)
```

## Install

### ECMAScript module

```html
<script type="module">
  import css from 'https://npmcdn.com/@happycat/css'
</script>
```

### CommonJS

`npm i @happycat/css`

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
