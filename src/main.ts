import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/styles/tailwind.css'
import '@/assets/styles/global.css'
import { registerGlobalComponents } from '@/utils/import'
import {loadFonts} from '@/configs/webfontloader'
import {auth} from "@/configs/firebase"
import { onAuthStateChanged } from 'firebase/auth'
await loadFonts()
let app: any

onAuthStateChanged(auth, () => {
  if(!app) {
    app = createApp(App)
    registerGlobalComponents(app)
    app.use(createPinia())
    app.use(router)
    app.mount('#app')
  }
})
