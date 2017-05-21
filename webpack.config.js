const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
module.exports = {
	devtool: 'source-map',
	entry: path.join(__dirname, 'app', 'client', 'Client.jsx'),
	output: {
		path: path.join(__dirname, 'public', 'js'),
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
		new ExtractTextPlugin('../../public/css/app.css')
	]
};