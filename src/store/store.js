import { createStore } from '@mpxjs/core'

// 合并所有store
const stores = {}
const requireComponent = require.context('./modules', false, /\.js$/) // modules下任意js文件
requireComponent.keys().forEach(fileName => {
  const item = requireComponent(fileName)
  const moduleName = fileName
    .toLowerCase()
    .substring(0, fileName.length - 3)
    .replace(/[./]/g, '')
  stores[moduleName] = item.default // modules中文件的写法是export default
})

export default createStore({
  modules: stores
})
