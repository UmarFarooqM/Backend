const os = require("os")



function getSystemInfo(){

    console.log("Computer Architecture", os.arch())
    const cps = os.cpus()
    console.log("Cpu Model", cps[0].model)
    console.log("cpu speed", cps[0].speed, "MHz")
    console.log("CPU cores", cps.length)
    console.log(`CPU Model: ${os.cpus()[0].model}`)
    console.log(`CPU Speed: ${os.cpus()[0].speed} MHz`)
    console.log(`Total Memory: ${(os.totalmem() / 1024 ).toFixed(1)} GB`)
    console.log(`Free Memory: ${(os.freemem()  / 1024).toFixed(1)} GB`)
    console.log("Host Name", os.hostname())
    console.log("OS Type",os.type())
}

module.exports = getSystemInfo