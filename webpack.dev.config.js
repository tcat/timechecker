const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const config = require('./app/config/config');
const webpack = require('webpack');
module.exports = {
	devtool: 'source-map',
	entry: [
		'webpack/hot/dev-server',
    	'webpack-hot-middleware/client',
		path.join(__dirname, 'app', 'client', 'Client.jsx')
	],
	output: { 
	    path: '/',
	    publicPath: 'http://localhost:'+config.server.port+'/js/',
	    filename: 'client.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loaders: ['babel-loader?presets[]=react,presets[]=latest,cacheDirectory=true'], // <-- changed line
				exclude: /node_modules/
			},
			{
                test: /\.css$/,
                include: /node_modules/,
                loader:  ['style-loader','css-loader']
            },
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: ["css-loader","sass-loader"]
		        })
			}	
		]
	},
	plugins: [
		new ExtractTextPlugin('../../public/css/app.css'),
		new webpack.EnvironmentPlugin([
		  "NODE_ENV"
		]),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
	],
	target: 'web'
};