import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const scssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resourcePath: string) =>
							Boolean(resourcePath.includes(".module.")),
						localIdentName: options.isDev
							? "[path][name]__[local]--[hash:base64:5]"
							: "[hash:base64:5]",
					},
				},
			},
			// Compiles Sass to CSS
			"sass-loader",
		],
	};

	const tsLoaders = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	const svgLoader = {
		test: /\.svg$/i,
		use: ["@svgr/webpack"],
	};

	const fileLoader = {
		test: /\.(gif|png|jpe?g|woff2|woff)$/i,
		use: [
			"file-loader",
			{
				loader: "image-webpack-loader",
				options: {
					bypassOnDebug: true,
					disable: true,
					mozjpeg: {
						progressive: true,
					},
					optipng: {
						enabled: true,
					},
					pngquant: {
						quality: [0.65, 0.9],
						speed: 4,
					},
					gifsicle: {
						interlaced: false,
					},
					webp: {
						quality: 75,
					},
				},
			},
		],
	};

	return [svgLoader, fileLoader, tsLoaders, scssLoader];
}
