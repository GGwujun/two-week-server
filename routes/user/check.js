
module.exports = function (req, res, next) {
	console.log(req.session)
    if (req.session.username) {
        next();
    }
    else {
        //res.send({
          //  code: 10001,
          //  status: 'not login'
        //});
    }
	
	next();
}