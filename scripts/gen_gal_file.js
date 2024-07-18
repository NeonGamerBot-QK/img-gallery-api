const path = require('path')
const fs = require('fs')
const outPath = path.join(__dirname, '..', 'src', 'gallery.ts')

const images = fs.readdirSync(path.join(__dirname, '..', 'public', 'images')) || []
let str = `
// auto generated file
export default ${JSON.stringify(images, null, 2)};
`
console.log(str)