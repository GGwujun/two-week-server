const User = require('../../model/user');
const Method = require('../../model/method');

module.exports = function (req, res) {
    const data = req.body;
	
    // 检查用户
    Method.find(User,data)
        .then(docs => {
            if (docs.length === 0) {
                console.log('用户不存在');
                res.send({
                    code: 99999,
                    status: 'user not exist'
                });
                return;
            }

            // 保存session
            req.session.username = data.username;
            // 返回 成功代码、状态说明
            res.send({
				userinfo:docs[0],
                code: 10000,
                status: 200
            });

            console.log('用户%s已登录', req.session.username);
        })
        .catch(err => {
            console.log('保存数据库出错');
            res.send({
                code: 99999,
                status: 'data base error'
            });
        });
}
