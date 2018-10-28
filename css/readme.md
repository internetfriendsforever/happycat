# CSS

Minimal CSS in JS

Uses [Stylis.js](https://github.com/thysultan/stylis.js) and auto-injects style (similar to [emotion](https://github.com/emotion-js/emotion)).

## Usage:

### ECMAScript modules (esm)

```
<body>
  <script type="module">
    import css from 'https://npmcdn.com/@happycat/css'

    const pink = css(`
      color: hotpink;
    `)

    document.body.innerHTML = `
      <h1 class="${pink}">
        I want it pink!
      </h1>
    `
  </script>
</body>
```

### Webpack/browserify

`npm i @happycat/css`

```
import css from '@happycat/css/cjs'

const pink = css(`
  color: hotpink;
`)

document.body.innerHTML = `
  <h1 class="${pink}">
    I want it pink!
  </h1>
`
```

### Old school

```
<body>
  <script src="https://npmcdn.com/@happycat/css/iife"></script>
  <script>
    const pink = happycat.css(`
      color: hotpink;
    `)

    document.body.innerHTML = `
      <h1 class="${pink}">
        I want it pink!
      </h1>
    `
  </script>
</body>
```
