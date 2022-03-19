const {readFile, writeFile} = require('fs'); 

const first = readFile('./content/first.txt', {encoding: 'utf-8'},  (err, result) => {
if(err) {
    console.log(err)
    return;
}
const first = result;
readFile('./content/second.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err)
        return;
    }
    const second = result;
    writeFile('./content/result-async.txt', `This is first value ${first}, and second: ${second}`, (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    })
})
})
