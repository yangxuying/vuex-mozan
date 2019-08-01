<template>
  <div class="wrap">
    <ShouYin />

    <div class="mengban">
      <div class="black"></div>
      <div class="syt">
        <div class="syt-top">
          <span>
            <b>收银台</b>
          </span>
          <span>
            <b>×</b>
          </span>
        </div>
        <div class="syt-m">
          <p>
            请您在新打开的网上银行页面进行支付
            <br />支付完成前请不要关闭该窗口！
          </p>
          <router-link to="/paysuccess">
            <span>已完成支付</span>
          </router-link>
          <span>支付遇到问题</span>
        </div>
        <span class="otherpay">选择其他支付方式</span>
      </div>
    </div>
  </div>
</template>

<script>
import ShouYin from "../components/ShouYin";

export default {
  name: "paymc",
  components: {
    ShouYin
  }
};
</script>

<style>
.mengban .black {
  background-color: #ccccca;
  opacity: 0.4;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 555;
}
.syt {
  position: absolute;
  z-index: 999;
  top: 30%;
  left: 26%;
  width: 690px;
  height: 400px;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.syt-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #000;
  padding-bottom: 20px;
}
.syt-m {
  padding: 70px 100px;
  text-align: center;
  border-bottom: 2px solid #000;
}
.syt-m p {
  font-size: 14px;
  margin-bottom: 48px;
  margin-top: 0;
}
.syt-m span {
  padding: 10px 60px;
  background-color: #2b2e33;
  color: #fff;
  margin-right: 35px;
}
.otherpay {
  color: #00a0e9;
  font-size: 14px;
  display: block;
  text-align: center;
  margin-top: 30px;
}
</style>
