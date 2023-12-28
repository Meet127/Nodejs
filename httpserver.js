const http = require('http')

const port = process.env.PORT || 8080;

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Typae','text/html')
    res.end('<h1>This is Code with Harry </h1><p>Hey this is to rock the world!</p>');

})

server.listen(port, ()=>{
    console.log(`Server is listening on post ${port}`)

});