const mongoose = require('mongoose');

module.exports = mongoose.model('courses', {
    title: String,//课程标题
	content :String,//'课程内容',
	summary:String,//简洁
	coursepath:[String],//课程路径
	cate :String, //'课程分类',
	tabs:[String],//'课程标签，不能超过5个',
	status:Boolean, //'状态。1：启用；2：禁用',
	uid:String, //'用户ID',
	create_time:{type: Date, default: Date.now },    //'创建时间',
	update_time:{type: Date, default: Date.now },   //'更新时间',
	pid:{type: String, default: '0' },
	pTitle:{type: String, default: '' }
});

