const os = require('os')

console.log(os.userInfo())
console.log(`The system is up from $os.uptime() seconds`)
console.log(`The system is up from ${os.uptime()} seconds`)

const currentos = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentos)