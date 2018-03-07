const router = require('express').Router();

// 解析body
const bodyParser = require('body-parser');
const bodys = [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true })
];


// 添加课程
router.post('/saveCourse', bodys, require('./add'));

// 删除课程
router.post('/deleteCourse', bodys, require('./delete'));


// 获取课程列表
router.get('/selectCourse', require('./get'));

// 获取课程列表
router.get('/selectPCourse', require('./getP'));


//获取课程子
router.get('/selectCCourse', require('./getC'));

// 获取课程列表
router.post('/findCourse', bodys, require('./find'));


module.exports = router;
