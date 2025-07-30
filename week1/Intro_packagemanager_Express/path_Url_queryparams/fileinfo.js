
const path = require('path')
function paths(p){


   console.log(`path Directory Name: ${path.dirname(p)}`)
     console.log(`path Directory Name: ${path.extname(p)}`)
    console.log(`${path.format({
        dir: path.dirname(p),
        base: path.basename(p)
    })}`)

}

exports.module = paths