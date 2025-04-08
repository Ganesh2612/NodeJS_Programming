http=require('http');
listener= (req,res)=>{
    res.writeHead(200,{'content-Type':'text\html'});
    res.end('<h1 style="text-align:center;,color:green;">Hello NodeJs</h1>');
};
server=http.createServer(listener);
server.listen('2000');
console.log("Server running at http://127.0.0.1:2000/");