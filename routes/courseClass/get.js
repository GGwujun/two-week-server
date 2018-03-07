const Class = require('../../model/courseClass');
const Methods = require('../../model/method');


module.exports = function(req, res) {
    Methods.find(Class,{})
        .then(docs => {
            console.log('获取好友列表成功');
            res.send({
                code: 10000,
                status: 'get friends success',
                list:{data:docs}
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
