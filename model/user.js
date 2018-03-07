const mongoose = require('mongoose');

module.exports  = mongoose.model('users', {
	pid:{ type: Number, default: 0 },
    username: String,    // 注册用户名
    password: String,   // 用户密码
	token: String, //NOT NULL COMMENT 'token',
	email:String,
	status: { type: Number, default: 1 },// '状态。1->启用；2->禁用。默认为1.',
    name: { type: String, default: '默认昵称' },  // 用户昵称
    age: { type: Number, default: Math.round(Math.random() * 100) },
    sex: { type: String, default: '3' }, //'性别。1->男；2->女；3->保密'
    about_me: { type: String, default: '岁月静好，可你还不来' },
    registed_time: {type: Date, default: Date.now },   // 注册时间
	address:String,
	birthday:String,
	create_time:String,
	update_time:String,
	web_routers:String,//拥有的web端页面路由
	api_routers:String,//拥有的API接口路由
	default_web_routers:String,//当访问没有权限的页面时默认跳转的地方
	access_status:{type: Number, default: 2}  //是否开启权限。1:开启;2:关闭
});
