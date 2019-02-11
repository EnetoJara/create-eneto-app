const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = env => {
	return {
		target: "node",
		node: {
			__filename: false,
			__dirname: false,
		},
		externals: [nodeExternals()],
		entry: process.env.BUILDING ? "./server/prod.js" : "./server/index.js",
		devtool: "source-map",
		mode: process.env.NODE_ENV,
		output: {
			filename: "[name]-bundle.js",
			chunkFilename: "[name].chunk.js",
			path: path.resolve(__dirname, "../dist"),
			publicPath: "/",
			libraryTarget: "commonjs2",
		},
		optimization: {
			splitChunks: {
				automaticNameDelimiter: "_",
				cacheGroups: {
					vendor: {
						name: "vendor",
						test: /[\\/]node_modules[\\/]/,
						chunks: "initial",
						minChunks: 2,
					},
				},
			},
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [
						{
							loader: "babel-loader",
						},
					],
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: "file-loader",
						},
					],
				},
			],
		},
	};
};
