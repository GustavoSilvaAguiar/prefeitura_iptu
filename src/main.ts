import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persistedState from 'pinia-plugin-persistedstate'
import 'vuetify/styles'
import vuetify from './plugins/vuetifyPlugin'
import options from './plugins/vuetoastificationPlugin'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'

/* const vuetify = createVuetify({
  components,
  directives,
})
 */

const pinia = createPinia()

pinia.use(persistedState)

const app = createApp(App)

app.use(pinia)
app.use(Toast, options)
app.use(router)
app.use(vuetify)

app.mount('#app')
