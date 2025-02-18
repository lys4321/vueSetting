import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import path from 'path'; // 정적 import로 변경
export default defineConfig({
	plugins: [
		vue(),
		vuetify({
			autoImport: true,
		}),
	],
	server: {
		port: 4444,
	},
	define: { 'process.env': {} },
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
