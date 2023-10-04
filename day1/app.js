const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'data.txt');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/html')
        res.write('<h3>Hello user</h3>' + "\n" + "<h1>Welcome to My First App using Nodejs</h1>" + "\n"
            + "<a href='/form'>Form Page</a>")
        res.end();
    } else if (req.url === "/form") {
        res.setHeader('Content-Type', 'text/html')
        res.write('<form action="/submit" method="POST"><input name="data"  value="Syed" /><input name="data" value="Shayan" /><button>Submit</button></form>');
        res.end();
    } else if (req.url === "/submit") {
        let data = "";
        req.on("data", chunk => {
            data += chunk;
        });
        req.on("end", () => {
            fs.readFile('data.txt', 'utf8', (_, fileData) => {
                res.setHeader('Content-Type', 'text/html')
                const newData = fileData + "\n" + data;
                fs.writeFile(filePath, newData, () => {
                    res.write("Data Received");
                    res.end();
                });
            });
        });
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('404 - Error Page Not Found' + "\n" + "<a href='/'>Home Page</a>");
        res.end();
    }

});

server.listen(3000);