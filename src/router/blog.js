const { SuccessModel } = require('../module/index.js');
const { getList, getDetail } = require('../constroller/blog.js');
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
    return {
      msg: '这是一个新建博客的接口',
    };
  }

  // 更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '这是一个更新博客的接口',
    };
  }
};

module.exports = handleBolgRouter;
