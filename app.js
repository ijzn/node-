const http = require('http');
const qs = require('querystring')

const PORT = 4002;

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];
    const query =  qs.parse(url.split('?')[1]);

    res.setHeader('Content-Type', 'application/JSON');

    // 返回数据
    resData ={
        method,
        url,
        path,
        query
    }

    if (method === 'GET') {
        res.end(JSON.stringify(resData));
    }
    if (method === "POST") {
        let postData = '';
        req.on('data', chunk => {
            postData = postData + chunk.toString();
        })
        req.on('end', () => {
            resData.postData = postData;
            console.log(postData);
            res.end(JSON.stringify(resData))
        })
    }
});

server.listen(PORT)

console.log(`server is runing port localhost:${PORT}`);