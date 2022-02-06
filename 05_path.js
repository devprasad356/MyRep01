const path = require('path')

console.log(path.sep)
const filePath=path.join('/folder1', 'folder2', '/folder3', 'file1.txt')
console.log(filePath)

const bName=path.basename(filePath)
console.log(bName)

const absolute=path.resolve(__dirname,'dir1','\dir2','dir3','file2.txt')
console.log(absolute)

const absolute2=path.resolve(__dirname,'dir1','/dir2','dir3','file2.txt')
console.log(absolute2)