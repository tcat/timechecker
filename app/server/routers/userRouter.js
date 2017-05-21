const passport = require('passport') 

const init = (app)=>{
	//web part
	app.get("/login", (req, resp)=>{
		resp.render("login" , { title: 'Login', isAuthorized: false});
	});

	//api part
	app.post('/login', function(req, res, next) {
	  passport.authenticate('local', function(err, user, info) {
	  	console.log(err, user, info)
	    if (err) { return next(err); }
	    if (!user) { return res.redirect('/login'); }
	    req.logIn(user, function(err) {
	      if (err) { return next(err); }
	      return res.redirect('/calendar');
	    });
	  })(req, res, next);
	});
}




module.exports = {
	init : init
}