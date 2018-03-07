/**
 * 获取用户信息
 * 1. 不带参数：获取所有在线的用户
 * 2. 带参数 username：获取指定用户的详细信息
 */
const User = require('../../model/user');
const Method = require('../../model/method');

module.exports = function(req, res) {
		var  param = req.query.username?req.query:{}
        Method.find(User,{})
            .then(docs => {
                if (docs.length === 0) {
                    // 用户不存在
                    console.log('用户不存在');
                    res.send({
                        code: 99999,
                        status: 'user not exist'
                    });
                    return;
                }

                // 用户存在
                console.log('找到用户：', docs);
 
                // 判断是否是好友关系
                //const friendly = docs[0].friends.includes(req.session.username);

               

                res.send({
                    code: 10000,
                    status: 'search user success',
                    list:docs
                });
            })
            .catch(err => {
                console.log('数据库出错');
                res.send({
                    code: 99999,
                    status: 'data base error'
                });
            });
}
