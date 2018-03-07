const express = require('express');

// Session
const session = require('express-session')({
    name: 'school_user',
    secret: 'school',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
});

module.exports = function (app) {


    // 静态资源
    app.use('/', express.static('www'));

	// 解决跨域问题
    app.use((req, res, next) => {
        res.set({
            // 跨域cookie 不能为通配符 *
            'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers':"Authorization,Origin, X-Requested-With,Content-Type, Accept",
            'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
			"Content-Type": "application/json;charset=utf-8",
            // 跨域cookie必须为true
            'Access-Control-Allow-Credentials': true
        });
        next();
    });

	console.log(session)
	
	
    // session
    app.use(session);

    // 用户
    app.use('/user', require('./user'));
	
	// 用户
    app.use('/Course', require('./course'));
	
	// 用户
    app.use('/Class', require('./courseClass'));

    //const checkLogin = require('./user/check');
    // 好友
    //app.use('/friend', checkLogin, require('./friend'));

    // 话题
    //app.use('/topic', checkLogin, require('./topic'));

    // 消息管理
    //app.use('/message', checkLogin, require('./message'));
}

