const router = require('express').Router();

// 解析body
const bodyParser = require('body-parser');
const bodys = [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true })
];


// 添加课程
router.post('/saveClass', bodys,require('./add'));

// 删除课程
router.post('/deleteClass', bodys,require('./delete'));


// 获取课程列表
router.get('/selectClass', require('./get'));


// 获取课程列表
router.post('/findClass',bodys, require('./find'));


module.exports = router;
