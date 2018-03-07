const Class = require('../../model/courseClass');
const Methods = require('../../model/method');

module.exports = function(req, res) {

    const data = req.body;

	console.log(data)
    
    // 保存数据库
	Methods.save(Class,data)
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
