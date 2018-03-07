const mongoose = require('mongoose');

module.exports = mongoose.model('courses', {
    id: String,
    title: String,//文章标题
    owner: String,
    create_time: String,
	content :String,//'文章内容',
	cate :String //'文章分类',
	tabs :String,//'文章标签，不能超过5个',
	status:String, //'状态。1：启用；2：禁用',
	uid:String, //'用户ID',
	create_time:String, //'创建时间',
	update_time:String //'更新时间',
});
