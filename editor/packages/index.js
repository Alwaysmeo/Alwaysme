import components from './component'

// Import components completely
const install = (app) => {
	components.forEach((component) => {
		component.install = (app) => app.component(`Alwaysme${component.name}`, component)
		app.use(component)
	})
}

export default { install }
