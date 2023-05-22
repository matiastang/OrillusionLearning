/*
 * @Author: your name
 * @Date: 2021-10-15 17:10:16
 * @LastEditTime: 2023-05-22 17:14:30
 * @LastEditors: matiastang
 * @Description: In User Settings Edit
 * @FilePath: /OrillusionLearning/src/main.ts
 */
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { store, key } from '@/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
import { createPinia } from 'pinia'
import '@/pinia/customProperties'
import '@/pinia/stateProperties'
import { myPiniaPlugin } from '@/pinia/plugin'
import {
    piniaPersistedState,
    createPersistedState,
    PERSISTED_STATE_KEY,
} from 'matias-pinia-persisted-state'
import _package from '../package.json'
import VConsole from 'vconsole'
// 默认主题（如果是其他预编译样式可以配置vite默认导入）
import '@/common/themes/default.css'

const app = createApp(App)

// pinia
// 初始化
const pinia = createPinia()
console.log(`matias-pinia-persisted-state默认的key:${PERSISTED_STATE_KEY}`)
// 不配置使用
// pinia.use(piniaPersistedState)
// 配置key使用
pinia.use(
    createPersistedState({
        key: 'pinia-key',
    })
)
console.log(`matias-pinia-persisted-state设置的key:${PERSISTED_STATE_KEY}`)
// 本地插件
pinia.use(myPiniaPlugin)
// 直接使用
// const main = useAuthUserStore(pinia)
// console.log(main)
// 加载pinia
app.use(pinia)

// Element-plus组件
// app.use(ElementPlus, {
//     locale: zhCn,
// })
// 状态
app.use(store, key)
// 路由
app.use(router)
// axios
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios) // provide 'axios'
// 挂载
app.mount('#app')

if (import.meta.env.PROD) {
    console.log = () => {
        // 线上环境屏蔽log
    }
} else {
    console.info(`当前Vue版本为${app.version}`)
    const vConsole = new VConsole()
}
const print = (key: string, value: string) =>
    console.log(
        `%c ${key} %c ${value} %c `,
        'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
        'background:rgb(65, 184, 131) ;padding: 1px; border-radius: 0 3px 3px 0;  color: #fff; font-weight: bold;',
        'background:transparent'
    )
print(_package.name, _package.version)
print('build time', `${import.meta.env.VITE_APP_BUILD_TIME}`)
