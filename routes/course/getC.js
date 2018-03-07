const Course = require('../../model/course');
const Methods = require('../../model/method');


module.exports = function (req, res) {
    var pid = req.query.pid;
	console.log(pid)
    Methods.find(Course, { 'pid': pid })
        .then(docs => {
            console.log('获取好友列表成功');
            res.send({
                code: 10000,
                status: 'get friends success',
                list: { data: docs }
            });
        })
        .catch(err => {
            console.log('数据库错误');
            res.send({
                code: 99999,
                status: 'data base error'
            });
        });
};
