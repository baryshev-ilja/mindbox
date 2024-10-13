import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        svgr({
            svgrOptions: {
                exportType: 'default',
            },
        }),
        react(),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: '/src',
            },
        ],
    },
    // css: {
    //     modules: {
    //         localsConvention: (name: string): string => {
    //             const camelCase = /-(\w)/g;
    //             return name.replace(camelCase, (match) => match.charAt(1).toUpperCase());
    //         },
    //         generateScopedName: '[name]__[local]--[hash:base64:5]',
    //     },
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData: '@import "src/app/styles/breakpoints";',
    //         },
    //     },
    // },
});
