const getList = (author, keyword) => {
  //先返回假数据
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1591196175353,
      author: '张三',
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1591196175353,
      author: '里斯',
    },
    {
      id: 3,
      title: '标题C',
      content: '内容C',
      createTime: 1591196179353,
      author: '王武',
    },
  ];
};

module.exports = {
  getList,
};
