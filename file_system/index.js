// Asynchronous way to read file

const fs=require('fs');
console.log('READ START');



fs.readFile( 'input.txt',function(err,data){
    if(err){
        console.log('Error',err);
        return err;
    }
    console.log('Data',data.toString());
    console.log('READ END');
    return data;
})
console.log('Other start');

// Output

// READ START
// Other start
// Data Helllo from Satish kumar !

// --Pw skills
// READ END

// Synchronous way to read file

const fs=require('fs');
console.log('READ START');
var data=fs.readFileSync('input.txt');

console.log('data:',data.toString());
console.log("READ END");
console.log('Other STUFF');

// Output

// READ START
// data: Helllo from Satish kumar !

// --Pw skills
// READ END
// Other STUFF


Read > Open + read 
const fs=require('fs');
const buf = new Buffer(1024);

fs.open('input.txt','r+',function(err, fd) {
    if(err){
        console.log('Error in opening file:',err);
    }
    console.log("File open Successfully!");
    fs.read(fd,buf,0,buf.length,0,function(er,bytes){
        if(er){
            console.log('Error in readig file!');
        }
        console.log('Data',bytes);
        console.log('Data',buf.slice(0,bytes).toString());
        fs.close(fd,function(err){
            if(err){
                console.log('Error is closing file');
            }else{
                console.log('Success is closing file');
            }
        })
    })
});

// Output

// (node:10020) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
// (Use `node --trace-deprecation ...` to show where the warning was created)
// File open Successfully!
// Data 41
// Data Helllo from Satish kumar !

// --Pw skills
 
// (node:3600) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
// (Use `node --trace-deprecation ...` to show where the warning was created)
// File open Successfully!
// Data 40
// Data Pw Skills (Physics Wala)----Satish kumar
// Success is closing file


//Writing to file ( Over write)

const fs=require('fs');
fs.writeFile('input.txt','Pw Skills (Physics Wala)',function(err){
    if(err){
        console.log('Error in writing file !');

    }else{
        console.log('SuccessFully in writing file !');
    }
   
})

//Output
//SuccessFully in writing file !

//Append to file

const fs=require('fs');
fs.appendFile('input.txt','----Satish kumar','utf8',function(err){
    if(err){
        console.log("Error in Appending file!");
    }else{
        console.log("Successfully in Appending file!");
    }
});

//Output
//Successfully in Appending file!


// Deleting file

const fs= require('fs');
fs.unlink('input.txt',function(err){
    if(err){
        console.log("Error In Delete File");
    }else{
        console.log("Successfully delete file");
    }
       
    
})