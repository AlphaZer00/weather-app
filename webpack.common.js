const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = {
	entry: {
		index: "./src/index.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new WebpackPwaManifest({
			name: "Weather App",
			icons: [
				{ src: path.resolve("./icon-192.png"), sizes: "192x192" },
				{ src: path.resolve("./icon-512.png"), sizes: "512x512" },
			],
		}),
	],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},
};
