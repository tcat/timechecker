let app = require ("./app/server/routers/mainRouter.js")
let env = require("node-env-file");
let path = require("path")
let envPath = path.join(__dirname, './.env')
env(envPath);


//Check required parameters in .env file
let parameterNames = ["NODE_SERVER_PORT"]
parameterNames.forEach((name)=>{
	if (!process.env[name]) {
		throw new Error("Fill "+name+" parameter in .env file");
	}
})

app.listen(process.env["NODE_SERVER_PORT"], (err)=>{
	if (err) return console.log("Can't start server")
	return console.log("Server is running on port ", process.env["NODE_SERVER_PORT"]);
})