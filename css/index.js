import stylis from 'stylis'

function css (...inputs) {
  const styles = inputs.map(input => {
    if (typeof input === 'string') {
      return createStyle(input)
    } else if (typeof input === 'object' && input._style) {
      return input
    }
  })

  const style = merge(styles)

  inject(style)

  return style
}

function createStyle (input) {
  const hash = hashCode(input)
  const name = 'css-' + hashCode(input)
  const className = '.' + name
  const id = 'style-' + hash
  const css = stylis(className, input)
  const style = { id, name, className, input, css }
  style.toString = () => name
  style._style = true
  return style
}

function merge (styles) {
  return createStyle(
    styles
      .filter(style => style)
      .map(style => style.input)
      .join('\n')
  )
}

function inject (style) {
  if (!document.getElementById(style.id)) {
    const element = document.createElement('style')
    element.id = style.id
    document.head.appendChild(element)
    element.innerHTML = style.css
  }
}

function hashCode (string) {
  if (string.length === 0) {
    return 0
  }

  let hash
  let chr

  for (let i = 0; i < string.length; i++) {
    chr = string.charCodeAt(i)
    hash = ((hash << 5) - hash) + chr
    hash |= 0
  }

  return hash
}

export default css
