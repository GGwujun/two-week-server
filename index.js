// 创建express应用
const app = require('express')();
app.set('trust proxy', 1);


// 路由
require('./routes')(app);

// 启动一个http服务器
app.listen(3000, function () {
    console.log('Server is running on: ', this.address().port);
});

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization,Origin, X-Requested-With,Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 连接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/school');

const db = mongoose.connection;

db.on('error', () => {
    console.log('连接数据库失败');
});
db.once('open', () => {
    console.log('连接数据库成功');
});
