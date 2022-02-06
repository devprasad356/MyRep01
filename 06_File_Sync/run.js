const{readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./file1.txt', 'utf8')
const second = readFileSync('./FOLDER/file2.txt', 'utf8')

console.log(first,second)

writeFileSync('./myOutputFile_01.txt', `Here is the result : ${first}, ${second}`);
writeFileSync('./myOutputFile_02.txt', `Here is the result : ${first}, ${second}`, {flag : 'a'});