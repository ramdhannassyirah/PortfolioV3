import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

window.onerror = function (msg, url, line, col, error) {
  alert(`
Message: ${msg}
File: ${url}
Line: ${line}
Column: ${col}
Error: ${error}
  `)
}
