# CSS

Minimal CSS in JS

Uses [Stylis.js](https://github.com/thysultan/stylis.js) and auto-injects style (similar to [emotion](https://github.com/emotion-js/emotion)).

Ready for use with ECMAScript modules (esm) `type='module'`

Usage:

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
