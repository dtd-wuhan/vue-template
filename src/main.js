import { createApp } from 'vue'
import {createPinia} from 'pinia'
import ElementPlus from 'element-plus'
import locale from "element-plus/dist/locale/zh-cn.mjs"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'element-plus/dist/index.css'


import App from './App.vue'

const pinia=createPinia()

pinia.use(piniaPluginPersistedstate)

const app=createApp(App)

app.use(ElementPlus,{locale})
app.use(pinia)

//对话框禁止点击其余区域关闭
app._context.components.ElDialog.props.closeOnClickModal.default = false

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
