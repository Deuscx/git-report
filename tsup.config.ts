import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/cli.mts'],
    clean: true,
    dts: true,
    outDir: 'dist',
    format: ['cjs', 'esm'],
})
