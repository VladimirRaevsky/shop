import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoader(options: BuildOptions): webpack.RuleSetRule[] {
	const scssLoader = buildCssLoader(options.isDev)

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
