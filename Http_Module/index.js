const http=require('http');

const server=http.createServer((req,res) =>{
if(req.url=='/'){
    res.write('<h1>Hello Node Js ! </h1>');
}
res.end();
});
server.listen(5000);
console.log('The Http Server Is Running On Port : 5000');