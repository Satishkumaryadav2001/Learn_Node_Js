const path = require("path");

console.log(path.sep);

//  \ -> (Window)  / -> (mac,lunix)

console.log(process.env.PATH);
//;
console.log(path.delimiter);

// ;

const filepath='/public_html\index.html';
const currentFilePath=__filename
console.log("currentFilePath>", currentFilePath);

//C:\Users\hp\Desktop\Full Stack Web Development\node_js\path\index.js

let result=path.basename(currentFilePath);
console.log("Basename>",result);

//Basename> index.js

let basenameWithoutExt=path.basename(currentFilePath,'.js');
console.log("basenameWithoutExt>",basenameWithoutExt);

//basenameWithoutExt> index

let dirname=path.dirname(currentFilePath);
console.log("dirname>",dirname);

//dirname> C:\Users\hp\Desktop\Full Stack Web Development\node_js\path


console.log("ext>-1",path.extname(currentFilePath));

//ext>1 .js


console.log("ext>-2",path.extname('index_html.css'));

// ext>-2 .css



let pathToFile=path.format({
    dir:'/public_html/home',
    base:'index.html'
});

console.log('pathTofille>',pathToFile);

//pathTofille> /public_html/home\index.html
console.log('IsAbsolute',path.isAbsolute(currentFilePath));

//IsAbsolute true


console.log('IsAbsolute',path.isAbsolute('/index.html'));

// IsAbsolute true

console.log('IsAbsolute',path.isAbsolute('./index.html'));
//IsAbsolute false

console.log('IsAbsolute',path.isAbsolute('../index.html'));

//IsAbsolute false

let pathToDir=path.join('/home','js','dist','index.js');
console.log(pathToDir);

//\home\js\dist\index.js

console.log('parse>',path.parse(currentFilePath));

// parse> {
//     root: 'C:\\',
//     dir: 'C:\\Users\\hp\\Desktop\\Full Stack Web Development\\node_js\\path',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }


console.log('relative path>',path.relative('/home/user/config','/home/user/js/'));

// relative path> ..\js

console.log('resolve>',path.resolve());

//resolve> C:\Users\hp\Desktop\Full Stack Web Development\node_js\path

console.log('normalize>',path.normalize('//home//user//js'));
// normalize> \\home\user\js