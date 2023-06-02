var http=require("http"); //Import node is core module
//Creating server
// function samp(request, response)
// {
// //Handling incoming request


// response.writeHead(200,{"Content-Type":"text/html"}); 
// response.write("Hello");
// response.write("<h1>Hello World</h1>");
// response.end("<html><body>Home, URL was: "+request.url+"</body></html>"); 
// console.log("Request received");
// }
// var server=http.createServer(samp);


// server.listen(8000); // Listen for incoming request at this port

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write('<h1>bhava</h1>');
}).listen(8000);