const num = 8

if(num<10){
    console.log("Small Number");
}else{
    console.log("Large Number");
}

console.log('Hello world');
console.log(`The variable was ${num}`);

console.log('My Current directory : ', __dirname);
console.log('My File is : ',__filename);

setInterval(()=>{
    console.log("'Hello World!!!!'")
}, 1000)