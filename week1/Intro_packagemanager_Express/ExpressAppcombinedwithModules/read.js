const fs = require('fs')

function readfile(){
    const data = fs.readFileSync("Data.txt", "utf-8")

        return data
}

module.exports = readfile