import webpack from "webpack";
import 'webpack-dev-server';
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";
import { buildPlugins } from "./buildPlugins";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options:BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        optimization: {
            minimize: false,
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolve(options),
        plugins: buildPlugins(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
    }
}