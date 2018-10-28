import stylis from 'stylis'

function css (input) {
  if (typeof input === 'function') {
    return function () {
      return css(input.apply(null, Array.prototype.slice.call(arguments)))
    }
  }

  if (typeof input === 'string') {
    const hash = hashCode(input)
    const name = 'css' + hashCode(input)
    const className = '.' + name
    const id = 'style-' + hash
    const css = stylis(className, input)
    inject(id, css)
    return name
  }

  console.error('@happycat/css expects a function or a string, while a', typeof input, 'was provided')
}

function inject (id, css) {
  if (!document.getElementById(id)) {
    const element = document.createElement('style')
    element.id = id
    document.head.appendChild(element)
    element.innerHTML = css
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
