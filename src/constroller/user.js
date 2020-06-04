const login = (username,pwd) => {
    console.log(username, pwd);
    if (username === 'zhangsan' && pwd === '111') {
        return true;
    }
    return false;
}

module.exports = {
    login,
}