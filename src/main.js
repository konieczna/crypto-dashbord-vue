import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import BaseButton from './components/atoms/BaseButton.vue'
import BaseCard from './components/atoms/BaseCard.vue'
import BaseSmallText from './components/atoms/BaseSmallText.vue'

const app = createApp(App)

app.use(router)
app.use(store)

app.component('base-button', BaseButton)
app.component('base-card', BaseCard)
app.component('base-small-text', BaseSmallText)

app.mount('#app')
