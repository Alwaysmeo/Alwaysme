import { App } from 'vue'
import components from '@/component'

// Import components completely
const install = function (app: App) {
    components.forEach((component) => {
        app.use(component as unknown as { install: () => any })
    })
}

export default { install }
