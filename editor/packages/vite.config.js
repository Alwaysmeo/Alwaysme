import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteRemoveConsole from 'vite-plugin-remove-console'

export default defineConfig(({ mode }) => {
	const { VITE_HOST, VITE_PORT, VITE_HMR, VITE_OUTDIR } = loadEnv(mode, __dirname)
	console.log(loadEnv(mode, __dirname))

	return {
		root: { production: resolve(__dirname, './'), development: resolve(__dirname, '../examples') }[mode],
		plugins: [
			vue(),
			vueJsx(),
			visualizer({ open: true }),
			viteRemoveConsole({ externalValue: ['version'] })
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import './styles/index.scss';`
				}
			}
		},
		resolve: {
			alias: {
				'@': resolve(__dirname, './'),
				'@components': resolve(__dirname, './components'),
				'@hooks': resolve(__dirname, './hooks'),
				'@utils': resolve(__dirname, './utils'),
				'@styles': resolve(__dirname, './styles'),
				'@assets': resolve(__dirname, './assets'),
				'@iconfont': resolve(__dirname, './iconfont')
			}
		},
		build: {
			target: 'modules',
			outDir: VITE_OUTDIR,
			minify: true,
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
			port: VITE_PORT,
			open: false,
			hmr: VITE_HMR
		}
	}
})
