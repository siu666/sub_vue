import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import './public-path'
// createApp(App).use(store).use(router).mount('#app')
let instance:any = null
interface props{
    container:Element|any
}
function render(props = {}) {
    const { container } = <props>props
    console.log(container,'container')
    // 为了避免根id#app与其他DOM冲突，需要限制查找范围
    instance = createApp(App).use(router).mount(container ? container.querySelector('#sub-app') : '#sub-app')
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
    render()
}

//--------- 生命周期函数------------//
export async function bootstrap() {
    console.log('[vue] vue app bootstraped')
}
export async function mount(props:any) {
    console.log('[vue] props from main framework', props)
    render(props)
}
export async function unmount() {
    instance.$destroy()
    instance.$el.innerHTML = ''
    instance = null
}