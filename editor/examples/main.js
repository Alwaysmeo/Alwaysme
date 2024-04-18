import { createApp } from 'vue'
import App from './App.vue'

// packages
import AlwaysMe from '../packages/index'

const app = createApp(App)

app.use(AlwaysMe).mount('#app')
