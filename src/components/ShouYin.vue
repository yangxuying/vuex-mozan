<template>
  <div class="wrap">
    <div class="main-container">
      <div class="cart-top">
        <span>收银台</span>
        <div>
          <span>购物车</span>
          <span>填写订单</span>
          <span>付款，购买成功</span>
        </div>
      </div>
      <img style="display: block;" src="../assets/images/cart-top_03.jpg" alt />
      <div class="shouyin-main">
        <div class="shouyin-main-top">
          <span>
            <b>订单提交成功，请您尽快付款！</b>
          </span>
          <div>
            <span>
              请您在提交订单后
              <span>24小时</span>内完成支付，否则订单会自动取消。
            </span>
            <span>
              应付金额:
              <span>￥168.00</span>
            </span>
          </div>
        </div>
        <div class="shouyin-main-m">
          <div>
            <b>订单号：12345678912345</b>
          </div>
          <div>
            <div>
              <span>
                <img src="../assets/images/name_03.jpg" alt /> 迪力木拉提
              </span>
              <span>
                <img src="../assets/images/name_08.jpg" alt /> 186****0734
              </span>
            </div>
            <span>
              <img src="../assets/images/name_06.jpg" alt /> 河北省秦皇岛市海港区秦海路84号
            </span>
          </div>
        </div>
        <div class="shouyin-main-b">
          <span>
            <b>选择支付方式</b>
          </span>
          <span>
            <img src="../assets/images/pay_10.jpg" alt />
          </span>
          <span>
            <img src="../assets/images/pay_12.jpg" alt />
          </span>
          <span>
            <img src="../assets/images/pay_14.jpg" alt />
          </span>
          <span>
            <img src="../assets/images/pay_17.jpg" alt />
          </span>
        </div>
        <router-link to="/vuex-mozan/shouyintai">
          <span class="fukuan">付&nbsp;&nbsp;款</span>
        </router-link>
      </div>
    </div>
    <Foot />
  </div>
</template>

<script>
import Foot from "../components/Foot";
export default {
  name: "shouyin",
  components: {
    Foot
  }
};
</script>

<style>
.shouyin-main {
  padding: 0 50px 150px 50px;
  background-color: #fff;
}
.shouyin-main-top div span span {
  color: red;
}
.shouyin-main-top div span:nth-child(2) span {
  color: red;
  font-size: 22px;
}
.shouyin-main-top {
  border-bottom: 2px solid #2b2e33;
  padding-bottom: 20px;
}
.shouyin-main-top div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.shouyin-main-m {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #d1d7e3;
}
.shouyin-main-m div:nth-child(2) {
  text-align: right;
}
.shouyin-main-m div:nth-child(2) span:first-child {
  margin-right: 10px;
}
.shouyin-main-b {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid #2b2e33;
}
.shouyin-main-b span:first-child {
  border: none;
  margin-right: 0;
}
.shouyin-main-b span {
  display: block;
  width: 132px;
  line-height: 48px;
  text-align: center;
  border: 1px solid #d1d7e3;
  margin-right: 10px;
}
.shouyin-main-b span img {
  vertical-align: middle;
}
.fukuan {
  background-color: #fdd900;
  width: 222px;
  display: block;
  line-height: 60px;
  text-align: center;
  font-size: 24px;
  margin-top: 32px;
  margin-left: 878px;
}
</style>
