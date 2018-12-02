const path = require('path')
const copy = require('copy')
const package = require(path.join(process.cwd(), 'package.json'))

const { dependencies } = package

if (dependencies) {
  Object.keys(dependencies).forEach(key => {
    const pattern = path.join(path.join(process.cwd(), 'node_modules', key, '**/*'))
    const destination = path.join(path.join(process.cwd(), 'modules', key))

    copy(pattern, destination, function (error) {
     if (error) {
       return console.error(error)
     }

     console.log('Copied', key, 'to', destination)
    })
  })
}
