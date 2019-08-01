import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import pay from "./modules/pay";
import fillIn from "./modules/fillIn";
import checkgoods from "./modules/checkgoods";
Vue.use(Vuex);
export default new Vuex.Store({
  mutations: {
    submission(state, payload) {
      console.log(payload);
      if (
        payload.value === 15130376662 &&
        payload.text === 111111 &&
        payload.code === "hvdhn"
      ) {
        payload.jumpPag();
      } else if (payload.value != 15130376662) {
        alert("用户名不对");
      } else if (payload.text != 111111) {
        alert("密码不对");
      } else if (payload.code != "hvdhn") {
        alert("验证码不对，请重新输入");
      }
    }
  },
  modules: {
    home,
    pay,
    checkgoods,
    fillIn
  }
});
