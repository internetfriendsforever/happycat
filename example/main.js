import css from 'https://npmcdn.com/@happycat/css@0.0.4/dist/esm.js'
import { bind } from 'https://npmcdn.com/hyperhtml@2.15.0/esm/index.js'
import { fromPoll } from 'https://npmcdn.com/kefir@3.8.5/dist/kefir.esm.js'

const pink = css(`
  color: hotpink;

  span {
    color: indigo;
  }
`)

const now = () => new Date()

fromPoll(1000, now)
  .toProperty(now)
  .onValue(date => {
    bind(document.body)`
      <h1 class=${pink}>
        I’m a happy cat clock, <span>${date.toString()}</span>
      </h1>
    `
  })
