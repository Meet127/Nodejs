const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 4000;

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type','text/html')
    console.log(req.url)

    if (req.url== '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
    }
    else if (req.url == '/cwh') {
        res.statusCode = 200;
        res.end('<h1>This is Code with Harry </h1><p>Hey this is to rock the world!</p>');
    }
    else if (req.url== '/about') {
        res.statusCode = 200;
        res.end('<h1>About Page </h1><p>Hey this is About Page to rock the world!</p>');
    }
    else{
        // res.harry();
        res.statusCode = 404;
        res.end('<h1>This Page is Not Found</h1><p>Hey The page notfound!</p>');
    }
})

server.listen(port, ()=>{
    console.log(`Server is listening on post ${port}`)

});