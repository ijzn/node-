const { SuccessModel, ErrorModel } = require('../module/index.js');
const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../constroller/blog.js');
const handleBolgRouter = (req, res) => {
  const method = req.method;

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.authoer || '';
    const keyWord = req.query.keyWord || '';
    const listData = getList();

    return new SuccessModel(listData);
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id || '';
    const detailData = getDetail(id);
    return new SuccessModel(detailData);
  }

  // 新建一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    const blogData = newBlog(req.body);
    return new SuccessModel(blogData);
  }

  // 更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const id = req.query.id || '';
    const result = updateBlog(id, req.body);
    if (result) {
      return new SuccessModel();
    } else {
      return new ErrorModel('更新博客失败');
    }
  }

  // 删除一篇博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    const id = req.query.id;
    const data = delBlog(id);
    if (data) {
      return new SuccessModel();
    } else {
      return new ErrorModel('删除博客失败')
    }
  }

};



module.exports = handleBolgRouter;
