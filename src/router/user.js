const handleUserRouter = (req, res) => {
    const method = req.method;
    // 更新一篇博客
    if (method === "POST" && req.path === "/api/user/login") {
        return {
            msg: "这是一个登录的接口"
        }  
    }
}

module.exports = handleUserRouter;