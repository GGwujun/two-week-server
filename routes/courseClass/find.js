const Class = require('../../model/courseClass');
const Methods = require('../../model/method');


module.exports = function(req, res) {
	if(req.body.id){
		var param = {_id:req.body.id}
	}else{
		var param={};
	}

    Methods.find(Class,param)
        .then(docs => {
            console.log('获取好友列表成功');
            res.send({
                code: 10000,
                status: 'get friends success',
                article_info:docs[0]
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
