import '@/assets/styles/css/index.css'
import { createApp } from 'vue'
import vue3GoogleLogin from 'vue3-google-login'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(router)
app.use(vue3GoogleLogin, {
    clientId: '665792818414-ruu3v5c2baa179g41vlp6pt6j457jn4s.apps.googleusercontent.com'
  })
app.mount('#app')