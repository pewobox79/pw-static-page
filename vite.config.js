import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";
import {manifest} from "./manifest.js";


export default defineConfig({
    plugins: [react(),
        VitePWA({
            injectRegister: 'auto',
            manifest: manifest,
            strategies: 'injectManifest',
            devOptions: {
                enabled: true
            },
            workbox: {
                runtimeCaching: [{
                    handler: 'NetworkOnly',
                    urlPattern: /api/,
                    method: 'POST',
                    options: {
                        backgroundSync: {
                            name: 'myQueueName',
                            options: {
                                maxRetentionTime: 24 * 60
                            }
                        }
                    }
                }],
                navigateFallbackDenylist:["/^\/demo/"]
            }
        })],
    server: {
        port: '3000',
    },
    compilerOptions: {
        types: [
            "vite-plugin-pwa/client"
        ]
    }

})
