const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user)

// method returns the system uptime in seconds
console.log(Math.round((os.uptime() / 60 / 60) * 10) / 10)

const currentOS = {
    name:os.type(),
    realease: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);