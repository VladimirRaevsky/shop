import { type BuildPaths } from '../build/types/config';
import path from 'path';
import webpack from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { env } from 'process';

export default ({
    config,
}: {
    config: webpack.Configuration;
}): webpack.Configuration => {
    
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        scssVar: path.resolve(__dirname, '..', '..', 'src', './app/styles/variables/_media-variables.scss')
    };

    config.resolve?.modules?.push(paths.src);

    config!.resolve!.alias = {
        ...config.resolve!.alias,
        'scss-variables': paths.scssVar
    }

    config.resolve?.extensions?.push('ts', 'tsx');

    if (config.module?.rules) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        config.module.rules = config.module?.rules?.map((rule: any) => {
            if (
                rule.test instanceof RegExp &&
                rule.test.toString().includes('svg')
            ) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module?.rules?.push(buildCssLoader(true));

    config.plugins?.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev),
    }),)

    return config;
};
