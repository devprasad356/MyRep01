const{readFile, writeFile} = require('fs')

//Demonstrate error:
readFile('../06_File_Sync/file11.txt', 'utf8',(error, result)=>{
    if(error){
        console.log("Error : ", error)
        return;//Without this it returns undefined value
    }
    console.log(result)
})

//Demonstrate output:
readFile('../06_File_Sync/file1.txt', 'utf8', (error, result)=>{
    if(error){
        console.log("Error : ", error)
        return;
    }
    console.log("Result 1 : ", result)
})

//Demonstrate output without utf8:
readFile('../06_File_Sync/file1.txt', (error, result)=>{
    if(error){
        console.log("Error : ", error)
        return;
    }
    console.log("Result 2 : ", result)
})


//Demonstrate output and more functionality:
readFile('../06_File_Sync/file1.txt', 'utf8', (error, result)=>{
    if(error){
        console.log("Error : ", error)
        return;
    }
    const myResult = result;

    //Over-writing the file
    writeFile(
        './Folder1/output_file1.txt', `Here is the result : ${myResult}`, (error, result)=>{
            if(error){
                console.log("Error22 : ", error)
                return;
            }
            console.log("Result 22 : ", result)
        } 
    )

    //Appending the file
    writeFile(
        './Folder1/output_file11.txt', `Here is the result : ${myResult}`, {flag : 'a'}, (error, result)=>{
            if(error){
                console.log("Error2222 : ", error)
                return;
            }
            console.log("Result 2222 : ", result)
        } 
    )
})