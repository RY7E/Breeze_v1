import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), resolve({
		extensions: ['.js', '.jsx'],
	  }),],
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target: "https://breeze-eight.vercel.app/",
			},
		},
	},
});
