<template>
  <div class="wrap">
    <div class="main-container">
      <div class="cart-top">
        <span>
          购物车
          <span>[{{goods.length}}件]</span>
        </span>
        <div>
          <span>购物车</span>
          <span>填写订单</span>
          <span>付款，购买成功</span>
        </div>
      </div>
      <img style="display:block" src="../assets/images/cart-top_03.jpg" alt />
      <div class="cartone">
        <table class="cart-goods">
          <thead>
            <tr class="one">
              <div style="display: flex;">
                <input class="checkbox" type="checkbox" id="all" />
                <label @click="changeAll" :class="checkType?'labelBg':''" for="all" class="text">
                  <span v-show="checkType">√</span>
                </label>
                <span>全选</span>
              </div>
              <th>商品</th>
              <th>单价</th>
              <th>数量</th>
              <th>小计</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="good in goods"
              :key="good.id"
              :class="good.status==='on'?'goodInfoBox':'goodInfoBox lineBg'"
            >
              <td class="td-one">
                <input class="checkbox" type="checkbox" :id="good.id" />
                <label
                  class="text"
                  :class="good.isCheck?'labelBg':''"
                  @click="changeCheck({id:good.id})"
                  :for="good.id"
                >
                  <span v-show="good.isCheck">√</span>
                </label>
                <!-- <div> -->
                <img :src="good.pic" alt />
                <div>
                  <h4>{{good.title}}</h4>
                  <div class="xiangxi">
                    <span>款式: {{good.style}}</span>
                    <span>尺码：{{good.size}}</span>
                  </div>
                </div>
              </td>
              <td>￥{{good.price}}</td>
              <td class="goodnum">
                <span @click="$store.commit('addNum',{id:good.id})" class="numchange">+</span>
                <span class="changenum">{{good.num}}</span>
                <span @click="$store.commit('subNum',{id:good.id})" class="numchange">-</span>
              </td>
              <td class="xiaoji">{{(good.price*good.num).toFixed(2)}}</td>
              <!-- </div> -->
              <div class="delside">
                <td @click="delMain({id:good.id})">×</td>
                <div class="delBox" v-show="good.isDel">
                  <span @click="delCartLists({id:good.id})">确定删除</span>
                  <span @click="delMain({id:good.id})">不删除</span>
                </div>
              </div>
            </tr>
          </tbody>
        </table>
        <div class="cart-foot">
          <div class="cart-foot-l">
            <div class="cart-foot-l-s">
              <input class="checkbox" type="checkbox" id="all" />
              <label
                class="text cart-f-text"
                @click="changeAll"
                :class="checkType?'labelBg':''"
                for="all"
              >
                <span v-show="checkType">√</span>
              </label>
              <span>全选</span>
              <div class="alldel" @click="delMainFooter">
                <div class="delBox" v-show="delMainF">
                  <span @click="delAll">确定删除</span>
                  <span @click="noDel">不删除</span>
                </div>
                <span class="cart-del">删除</span>
              </div>
              <img src="../assets/images/wish_03.jpg" alt />
              <div class="choice">
                <p>
                  共
                  <span>{{goods.length}}</span>件商品,已选择
                  <span>{{checkNum}}</span>件
                </p>
              </div>
              <div class="side-right">
                <div>
                  <span>合计:</span>
                  <span>[不含运费]</span>
                </div>
                <div>
                  <h3>￥{{totals}}</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="cart-foot-r">
            <span @click="login">去结算</span>
          </div>
        </div>
      </div>
    </div>
    <Foot />
    <!-- 蒙层 -->
    <div class="shoppingCart">
      <div class="black" v-if="isLogin"></div>
      <div class="login" v-if="isLogin">
        <div>
          <p>
            <span @click="close"></span>
          </p>
          <img src="../assets/images/shop.jpg" alt />
        </div>
        <div class="ownInfo">
          <div>
            <span>
              <img src="../assets/images/login_03.jpg" alt />
            </span>
            <input v-model="val" type="text" placeholder="请输入手机号" />
          </div>
          <div>
            <span>
              <img src="../assets/images/login_07.jpg" alt />
            </span>
            <input v-model="text" type="password" placeholder="请输入密码" />
          </div>
          <div>
            <input v-model="code" placeholder="请输入验证码" type="text" />
            <img src="../assets/images/yanzheng_11.jpg" alt />
          </div>
          <div>
            <button
              @click="submission({
            value:val,
            text:text,
            code:code,
            jumpPag:jumpPag
          })"
            >登录</button>
          </div>
        </div>
        <div>
          <span>忘记密码？</span>
          <span>注册</span>
        </div>
        <div>
          <span>
            <img src="../assets/images/cart-share_15.jpg" alt />
          </span>
          <span>
            <img src="../assets/images/cart-share_18.jpg" alt />
          </span>
          <span>
            <img src="../assets/images/cart-share_20.jpg" alt />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import Foot from "./Foot";
export default {
  name: "cart",
  data() {
    return {
      val: 12345,
      text: 111111,
      code: "hvdhn"
    };
  },
  components: {
    Foot
  },
  computed: {
    ...mapState({
      isLogin: state => state.isLogin,
      goods: state => state.goods,
      isDel: state => stateisDel,
      delMainF: state => state.delMainF,
      isLogin: state => state.isLogin
    }),
    goods() {
      return this.$store.state.goods;
    },
    ...mapGetters({
      totals: "totals",
      checkType: "checkType",
      checkNum: "checkNum"
    })
  },
  methods: {
    ...mapMutations({
      changeCheck: "changeCheck",
      changeAll: "changeAll",
      login: "login",
      delMain: "delMain",
      delCartLists: "delCartLists",
      delMainFooter: "delMainFooter",
      noDel: "noDel",
      delAll: "delAll"
    }),
    ...mapMutations({ submission: "submission", close: "close" }),
    jumpPag() {
      this.$router.push("dingdan");
    }
  }
};
</script>

<style>
.labelBg {
  background-color: #fdd900;
}
.cart-top {
  padding: 22px 50px;
  display: flex;
  align-items: center;
  background-color: #fdd900;
}
.cart-top > span:first-child {
  border-left: 2px solid black;
  font-size: 30px;
  padding-left: 18px;
}
.cart-top > span:first-child span {
  font-size: 22px;
}
.cart-top div {
  font-size: 18px;
  flex-grow: 1;
  text-align: right;
}
.cart-top div span {
  margin-right: 18px;
}
.cart {
  padding: 0 50px;
}
.cartone {
  padding: 0 50px 50px 50px;
  background-color: #fff;
}
.cartone table {
  width: 100%;
}
.one th {
  text-align: left;
}
.cart-goods tr img {
  width: 96px;
  height: 96px;
  margin-right: 10px;
}
.cart-goods tr h4 {
  margin: 0;
  width: 280px;
}
.cart-goods tr {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #d1d7e3;
}
.cart-goods .xiangxi span {
  color: #797c83;
  display: block;
  font-size: 14px;
}
.td-one {
  display: flex;
  align-items: center;
  width: 484px;
  margin-right: 120px;
}
.checkbox {
  display: none;
}
.text {
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 20px;
  margin-right: 46px;
  margin-left: 20px;
}
/* .text > span {
  display: none;
} */
/* .checkbox:checked + .text {
  background-color: #fdd900;
  border: 1px solid #fdd900;
} */
.checkbox:checked + .text > span {
  display: block;
}
.one th:first-child {
  display: flex;
}
tbody {
  border-bottom: 2px solid #000;
  display: block;
}
.one {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
}
.one th:nth-child(2) {
  margin-left: 30px;
  margin-right: 490px;
}
.one th:nth-child(4) {
  margin-left: 154px;
  margin-right: 142px;
}
.one th:nth-child(5) {
  margin-right: 40px;
}
.one .text {
  margin-left: 0;
  margin-right: 10px;
}
.one th:first-child {
  width: 96px;
}
.numchange {
  padding: 14px;
  border: 1px solid #000;
}
.goodnum {
  margin-left: 68px;
  margin-right: 50px;
  display: flex;
  align-items: center;
}
.changenum {
  width: 106px;
  display: block;
  text-align: center;
}
.xiaoji {
  margin-right: 42px;
}
.cart-foot {
  display: flex;
  align-items: center;
}
.cart-foot .cart-foot-l-s {
  display: flex;
  align-items: center;
}
.cart-foot .cart-foot-l {
  background-color: #2b2e33;
  color: #fff;
  width: 880px;
}
.cart-foot .cart-f-text {
  margin-right: 10px;
}
.cart-foot-l {
  padding: 20px 0;
}
.cart-foot-l .cart-del {
  margin-left: 10px;
  margin-right: 20px;
  font-size: 14px;
}
.cart-foot-l p {
  margin: 0;
}
.cart-foot-l p span {
  color: #fdd900;
}
.cart-foot-l .choice {
  border-left: 2px solid #6f7277;
  padding-left: 20px;
  margin-left: 20px;
}
.cart-foot-l .side-right {
  display: flex;
  align-items: center;
  margin-left: 210px;
  margin-right: 20px;
}
.cart-foot-l .side-right span {
  display: block;
}
.cart-foot-l .side-right h3 {
  color: #fdd900;
  font-size: 36px;
  margin: 0;
  font-weight: normal;
}
.cart-foot-r {
  text-align: center;
  display: block;
  flex-grow: 1;
  background-color: #fdd900;
  font-size: 30px;
  line-height: 86px;
}
.delside,
.alldel {
  position: relative;
}
.delside .delBox {
  position: absolute;
  left: -120px;
  top: 48px;
}
.delBox > span:first-child {
  background-color: #f50000;
  padding: 5px 8px;
  color: #fff;
}
.delBox > span:last-child {
  background-color: #2b2e33;
  padding: 5px 10px;
  color: #fff;
}
.alldel .delBox {
  position: absolute;
  top: -34px;
  width: 200px;
}
.shoppingCart .black {
  background-color: #000;
  opacity: 0.4;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 555;
}
.shoppingCart .login {
  position: absolute;
  width: 422px;
  z-index: 888;
  left: 35%;
  top: 30%;
  background-color: #fff;
  padding: 20px;
}
.shoppingCart .login > div:first-child {
  padding-bottom: 20px;
}
.shoppingCart .login p {
  text-align: right;
}
.shoppingCart .login img {
  display: block;
  margin: 0 auto;
  padding-top: 8px;
}
.shoppingCart .ownInfo > div {
  margin-bottom: 15px;
  display: flex;
}
.shoppingCart .ownInfo > div > span {
  border: 1px solid #babec9;
  color: #babec9;
  width: 46px;
  text-align: center;
  line-height: 46px;
  flex-shrink: 0;
}
.shoppingCart .ownInfo > div > input {
  border: 1px solid #babec9;
  border-left: none;
  line-height: 46px;
  flex-grow: 1;
  outline: none;
  padding-left: 10px;
}
.shoppingCart .ownInfo > div > img {
  display: block;
  width: 137px;
  padding-top: 0;
}
.shoppingCart .ownInfo > div:nth-child(3) > input {
  border-left: 1px solid #babec9;
  margin-right: 10px;
}
.shoppingCart .ownInfo > div:nth-child(4) > button {
  border: none;
  background: #fff500;
  width: 100%;
  line-height: 46px;
  font-size: 20px;
  color: #000;
  border-radius: 5px;
  margin-top: 10px;
  outline: none;
}
.shoppingCart .login > div:nth-child(3) {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
.shoppingCart .login > div:nth-child(4) {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
.lineBg {
  background-image: url("./../assets/images/cart-bg.jpg");
}
</style>
