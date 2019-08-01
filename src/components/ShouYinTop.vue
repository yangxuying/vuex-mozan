<template>
  <div>
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
      <div class="shouyin-mainone">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shouyintop"
};
</script>

<style>
.shouyin-mainone {
  padding: 0 50px;
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
</style>
