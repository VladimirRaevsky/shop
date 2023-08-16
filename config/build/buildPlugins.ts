import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins(
	options: BuildOptions
): webpack.WebpackPluginInstance[] {
	const { paths, isDev } = options;

	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[id].[contenthash:8].css",
		}),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
		new webpack.ProgressPlugin(),
	];
}
