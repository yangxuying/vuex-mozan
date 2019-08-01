import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import AddCart from './components/AddCart.vue';
import Cart from './components/Cart.vue';
import DingDan from './components/DingDan.vue';
import ShouYin from './components/ShouYin.vue';
import ShouYinTai from './components/ShouYinTai.vue';
import PaySuccess from './components/PaySuccess.vue';
import PayMC from './components/PayMC.vue';
Vue.use(VueRouter);
const routes = [
  {
    component: Home,
    path: '/vuex-mozan'
  },
  {
    component: AddCart,
    path: '/vuex-mozan/addcart'
  },
  {
    component: Cart,
    path: '/vuex-mozan/cart'
  },
  {
    component: DingDan,
    path: '/vuex-mozan/dingdan'
  },
  {
    component: ShouYin,
    path: '/vuex-mozan/shouyin'
  },
  {
    component: ShouYinTai,
    path: '/vuex-mozan/shouyintai'
  },
  {
    component: PaySuccess,
    path: '/vuex-mozan/paysuccess'
  },
  {
    component: PayMC,
    path: '/vuex-mozan/paymc'
  }
];
const router = new VueRouter({
  //路由页面
  routes,
  //路由模式 默认为hash模式(通过锚点切换组件)/#/
  //有history模式
  mode: 'hash'
});
export default router;
