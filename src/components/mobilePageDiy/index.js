// const path = require('path')
// const files = require.context('./', false, /\.vue$/)

const files = import.meta.glob('./*.vue')

console.log(files)

// files.keys().forEach(key => {
//    console.log(key)
// })


for (const path in files) {
    console.log(path)
}

const modules = {}
// files.keys().forEach(key => {
//     const name = path.basename(key, '.vue')
//     modules[name] = files(key).default || files(key)
// })
export default modules
