const http =require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
console.log(req.url,req.method);

//set header content type

res.setHeader('content-type','text/html');
// res.write('<head><link rel="stylesheet" href="#"></head>')


// res.write('<p> Hello,Ninjas</p>');
// res.write('<p> hello again</p>')
// res.end();



let path='./views/';
switch(req.url){
    case '/':
        path +='index.html';
        break;
    case '/about':
        path +='about.html';
        break;
    default:
        path +='404.html'
}

//sending file path
fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err)
        res.end();
    }
    else{
        
        res.end(data);
    }
})
})


server.listen(3000,'localhost',()=>{
    console.log("server is listening on port 3000")
});
