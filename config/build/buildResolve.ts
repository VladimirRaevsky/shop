import { type ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolve (options: BuildOptions):ResolveOptions {
    
    const { paths: { src } } = options;

    return {
        extensions: ['.tsx', '.ts', '.js'],
        mainFiles: ['index'],
        preferAbsolute: true,
        modules: [src, 'node_modules'],
        alias: {},
    }
}