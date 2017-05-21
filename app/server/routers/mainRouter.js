const passport = require('passport')  
const session = require('express-session')  
const RedisStore = require('connect-redis')(session)
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")
const express = require("express")
const exhbs = require("express-handlebars")
const path = require("path")
const app = express()
const config = require('../../config/config')

const webpackConfig = require('../../../webpack.dev.config')
let compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {colors: true}
}))
app.use(webpackHotMiddleware(compiler, {
    log: console.log
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

require("../auth/auth")(app)

app.use(express.static('public'))


app.use(session({
	store: new RedisStore({
		port: config.redisStore.port,
		host: config.redisStore.host,
  		prefix:'sess'
	}),
	secret: config.redisStore.secret,
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize())
app.use(passport.session())


app.engine(".hbs", exhbs({
	defaultLayout: "main",
	extname: ".hbs",
	layoutsDir:path.join(__dirname, "../../../views/layout"),
	partialsDir:path.join(__dirname, "../../../views/partial")

}))
app.set("view engine", ".hbs")
app.set('engine', path.join(__dirname, 'views'))






app.use((err, req, resp, next)=>{
	if (err) {
		resp.status(500).send(err);
	}
})

require("./userRouter").init(app)
require("./appRouter").init(app)


module.exports = app;