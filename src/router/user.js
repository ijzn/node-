
const { login } = require('../constroller/user.js');
const { SuccessModel, ErrorModel } = require('../module/index.js')



const handleUserRouter = (req, res) => {
    const { method, path } = req;
    // 更新一篇博客
    if (method === "POST" && path === "/api/user/login") {
        const { username, pwd } = req.body;
        const result = login(username, pwd);
        if (result) {
            return new SuccessModel();
        } else {
            return new ErrorModel('登录失败')
        }
    }
}

module.exports = handleUserRouter;