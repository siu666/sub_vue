/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
interface MyWindow extends Window {
  __POWERED_BY_QIANKUN__: boolean;
}

declare var window: MyWindow;
console.log('2112 ')