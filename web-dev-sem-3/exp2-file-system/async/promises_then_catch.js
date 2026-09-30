const { unlink } = require("fs");

const fs = require("fs").promises;

    async function writeFile(){
        try{
            await fs.writeFile("Promise.txt","Hello Studnets!");
            console.log("File cretaed and data written successfully");
        }
        catch(error){
            console.log("Error:",error);
        }
}

    async function unlinkFile(){
        try{
            await unlink("Promise.txt");
            console.log("File deleted successfully");
        }
        catch(error){
            console.log("Error:",error);
        }
    }



writeFile();
