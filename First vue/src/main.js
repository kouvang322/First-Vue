import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


import App from './App.vue'
import router from './router'

import './assets/reset.css'

library.add(faCartShopping)
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"