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

const getDetail = (id) => {
  //先返回假数据
  return {
    id: 1,
    title: '标题A',
    content: '内容A',
    createTime: 1591196175353,
    author: '张三',
  };
};

const newBlog = (blogData = {}) => {
  console.log(blogData);
  // blogData 是个对象，包含title 和 content 属性
  // 表示新建blog表格. 插入数据库的id
  return {
    id: 3
  }
} 

const updateBlog = (id, blogData = {}) => {
  // blogData 是个对象，包含title 和 content 属性
  // 表示新建blog表格. 插入数据库的id
  return true
} 

const delBlog = id =>{
  return false
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
};
