const User = require('../../model/user');
const Methods = require('../../model/method');

module.exports = function(req, res) {

    const id = req.body.id;
    
    // 保存数据库
	Methods.remove(User,id)
		.then(user => {
			res.send({
				code: 10000,
				status: 'register success'
			});
		})
		.catch(err => {
			console.log('保存数据库出错');
			res.send({
				code: 99999,
				status: 'data base error'
			});
		});
}
