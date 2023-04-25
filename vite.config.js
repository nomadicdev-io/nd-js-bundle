import { defineConfig } from "vite";
import {resolve} from 'path';

export default defineConfig({
    server: {
        port: 3001,
    },
    root: 'src',
    base: './',
    publicDir: resolve(__dirname, 'public'),
    build: {
        outDir: '../dist',
        rollupOptions: {
            output: {
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                
                assetFileNames: ({name}) => {
                if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')){
                    return 'assets/images/[name]-[hash][extname]';
                }
                
                if (/\.css$/.test(name ?? '')) {
                    return 'assets/css/[name]-[hash][extname]';   
                }

                if (/\.(woff|woff2|eot|ttf)$/.test(name ?? '')) {
                    return 'assets/fonts/[name]-[hash][extname]';   
                }
        
                // default value
                // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                return 'assets/[name]-[hash][extname]';
                },
            },
        }
  },
})