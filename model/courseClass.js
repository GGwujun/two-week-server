const mongoose = require('mongoose');

module.exports = mongoose.model('courseClass', {
    className: String,//课程标题
	classId:Number,
	classIcon:'',
	status:Boolean //'状态。1：启用；2：禁用
});

