import { defineConfig, loadEnv } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { resolve } from 'path'
import viteDts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(({ mode }) => {
	const { VITE_HOST, VITE_PORT, VITE_OPEN, VITE_HMR, VITE_OUTDIR } = loadEnv(mode, __dirname)
	console.log(loadEnv(mode, __dirname))

	return {
		root: { production: resolve(__dirname, './'), development: resolve(__dirname, '../examples') }[mode],
		plugins: [
			vue(),
			vueJsx(),
			viteDts({
				outDir: `${VITE_OUTDIR}/es`,
				tsconfigPath: './tsconfig.json'
			}),
			visualizer()
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import './style/index.scss';`
				}
			}
		},
		resolve: {
			alias: {
				'@': resolve(__dirname, './'),
				'@components': resolve(__dirname, './components'),
				'@config': resolve(__dirname, './config'),
				'@hooks': resolve(__dirname, './hooks'),
				'@utils': resolve(__dirname, './utils'),
				'@style': resolve(__dirname, './style')
			}
		},
		build: {
			target: 'modules',
			outDir: `${VITE_OUTDIR}`,
			minify: true, // 压缩
			cssCodeSplit: false,
			lib: {
				entry: resolve(__dirname, './index.js'),
				name: 'alwaysme'
			},
			rollupOptions: {
				external: ['vue'],
				input: {
					main: resolve(__dirname, './index.js')
				},
				output: [
					{
						dir: `${VITE_OUTDIR}/es`,
						format: 'es',
						entryFileNames: '[name].mjs',
						preserveModules: true
					},
					{
						dir: `${VITE_OUTDIR}/lib`,
						format: 'cjs',
						entryFileNames: '[name].js',
						preserveModules: true
					}
				]
			}
		},
		server: {
			host: VITE_HOST,
			port: Number(VITE_PORT),
			open: VITE_OPEN,
			hmr: VITE_HMR
		}
	}
})
