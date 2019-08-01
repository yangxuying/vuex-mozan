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
      <img style="display:block" src="../assets/images/cart-top_03.jpg" alt />
      <div class="success">
        <img src="../assets/images/afterpay1.jpg" alt />
        <div class="payok">
          <span class="payok-s">
            <b>支付成功！</b>
          </span>
          <div class="payok-side">
            <div class="payok-left">
              <span>订单号：12345678912345</span>
              <span>成功支付：￥168.00</span>
            </div>
            <div class="payok-right">
              <router-link to="/vuex-mozan/Cart">
                <span>继续逛逛</span>
              </router-link>
              <span>查看订单</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Foot />
  </div>
</template>

<script>
import Foot from "./Foot";
export default {
  name: "paysuccess",
  components: {
    Foot
  }
};
</script>

<style>
.wrap {
  background-image: url("../assets/images/bg.jpg");
}
.success {
  padding: 0 50px;
  display: flex;
  align-items: center;
  padding-bottom: 170px;
  background: #fff;
}
.success .payok {
  margin-left: 30px;
  flex-grow: 1;
}
.success .payok .payok-s {
  font-size: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #000;
  display: block;
}
.payok-side {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.payok-side .payok-left span {
  display: block;
}
.payok-side .payok-right span {
  width: 222px;
  background-color: #fdd900;
  padding: 16px 54px;
  margin-left: 10px;
}
</style>
