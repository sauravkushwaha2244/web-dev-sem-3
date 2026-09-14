const fs = require('fs');
fs.writeFile(
    'example.txt',"Welcome to Full Stack Dev",(err)=>{
        if(err){
            console.log("Error creating File",err);
            return;
        }else{
            console.log("Created");
        }
    }
)

// fs.readFile('sample.txt','utf8',(err,data)=>{
//     if(err){
//         console.log("Error reading File",err);
//         return;
//     }else{
//         console.log("Read ");
//         console.log(data);
//     }
// });

// fs.appendFile('sample.txt','\nSemester: 3',(err) =>{

//     if(err){
//         console.log('Error updating file:',err);
//     }
//     else{
//         console.log('\nFile updated successfully!');
//     }
//     })

fs.unlink('example.txt',(err)=>{
    if(err){
        console.log('Error Deleting file:',err);
    }
    else{
        console.log('\n File deleted successfully!');
    }
})

async function renameFile(){
    try{
        await fs.rename("promis.txt","promise_new.txt");
        console.log("File renamed successfully,")
    }
    catch(error){
        console.log("error",error);
    }
}

renameFile();
