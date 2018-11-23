# CSS

Minimal CSS in JS

Uses [Stylis.js](https://github.com/thysultan/stylis.js) and auto-injects style (similar to [emotion](https://github.com/emotion-js/emotion)).

## Usage:

### Simple

```
const pink = css('color: hotpink;')
document.body.innerHTML = '<h1 class="${pink}">I want it pink!</h1>'
```

### Extend

```
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

### ECMAScript modules (esm)

```
<body>
  <script type="module">
    import css from 'https://npmcdn.com/@happycat/css'
    // code here!
  </script>
</body>
```

### Webpack/browserify

`npm i @happycat/css`

```
import css from '@happycat/css/cjs'
// code here!
```

### Old school

```
<body>
  <script src="https://npmcdn.com/@happycat/css/iife"></script>
  <script>
    const css = happycat.css
    // code here!
  </script>
</body>
```
