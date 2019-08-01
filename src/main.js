import Vue from 'vue';
import App from './App.vue';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';

Vue.config.productionTip = false;
Vue.use(ElementUI);
//将app组件内的虚拟dom结构，转化成真实dom，把这个真实dom挂载到#app这个元素身上
//框架写的是虚拟dom

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
