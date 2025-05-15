import {defineConfig, mergeConfig} from 'vitest/config'
import {UserConfig} from 'vite';
import viteConfig from './vite.config';

export default mergeConfig(viteConfig as UserConfig, defineConfig({
    test: {
        reporters: ['verbose'],
        globals: true,
        environment: 'jsdom',
        pool: 'forks',
        coverage: {
            provider: 'v8',
            reportsDirectory: './coverage',
            include: ['src/**/*.{ts,tsx}'],
            exclude: [
                'src/app',
                'src/test'
            ]
        },
        setupFiles: ['src/test/setupTests.ts'],
    }
}))
