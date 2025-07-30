const url = require('url')

function fullurl(u){

    const myurl = new URL(u)
   console.log(myurl.hostname)
    console.log(myurl.pathname)
    console.log(myurl.search)


}

exports.module = fullurl