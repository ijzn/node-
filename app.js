const qs = require('querystring');
const handleBlogRouter = require('./src/router/blog.js');
const handleUserRouter = require('./src/router/user.js');

const serverHandle = (req, res) => {
  // 设置res返回格式
  res.setHeader('Content-Type', 'application/JSON');

  const url = req.url;
  req.path = url.split('?')[0];
  req.query = qs.parse(url.split('?')[1]);

  // 处理blog路由
  const blogData = handleBlogRouter(req, res);
  if (blogData) {
    res.end(JSON.stringify(blogData));
    return;
  }

  // 处理user路由
  const userData = handleUserRouter(req, res);
  if (userData) {
    res.end(JSON.stringify(userData));
    return;
  }

  // 未命中路由 404
  res.end(JSON.stringify({ state: 404, msg: '该接口不存在' }));
  // res.writeHeader(404, {"Content-Type": "text/plain"})
  // res.write('404 Not Fount\n');
  // res.end();
};

module.exports = serverHandle;
