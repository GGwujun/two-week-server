const router = require('express').Router();

// 解析body
const bodyParser = require('body-parser');
const bodys = [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true })
];

const checkLogin = require('./check');

// 获取用户
router.post('/getusers', require('./get'));

// 获取用户
router.post('/saveuser',bodys, require('./add'));

// 获取用户
router.post('/deleteuser',bodys, require('./delete'));

// 获取自己的用户信息
//router.get('/finduser', require('./find'));


// 获取自己的用户信息
router.get('/self', checkLogin, require('./self'));

// 注册
router.post('/register', bodys, require('./register'));
// 登录
router.post('/login', bodys, require('./login'));
// 检查登录
router.get('/login', checkLogin, function (req, res) {
    res.send({
        code: 10000,
        status: 'logged in'
    })
});

router.get('/login', function () {
    console.log(2323)
});
// 注销
router.get('/logout', require('./logout'));


module.exports = router;
