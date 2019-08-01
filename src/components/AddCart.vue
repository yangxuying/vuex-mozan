<template>
  <div class="cart-one">
    <div class="main-container">
      <img class="tou" src="../assets/images/successcart_03.jpg" alt />
      <div class="good-side">
        <div class="good">
          <img src="../assets/images/good_03.jpg" alt />
          <span class="title">龙之谷六周年限定礼包大Boss冰龙款男士T恤</span>
          <div class="xiangqing">
            <span>款式：iphone 5</span>
            <span>尺码：XL</span>
            <span>数量：x1</span>
          </div>
          <span class="back" @click="back">返回</span>
          <router-link to="/vuex-mozan/cart">
            <span>去购物车结算</span>
          </router-link>
        </div>
        <div class="need">
          <span class="maybe">您可能还需要</span>
          <div class="card-all">
            <div class="card">
              <img src="../assets/images/shop1.jpg" alt />
              <span class="title">龙之谷六周年限定礼包大Boss冰龙款...</span>
              <div class="card-price">
                <span>￥88.00</span>
                <img src="../assets/images/cart_07.jpg" alt />
              </div>
            </div>
            <div class="card">
              <img src="../assets/images/shop1.jpg" alt />
              <span class="title">龙之谷六周年限定礼包大Boss冰龙款...</span>
              <div class="card-price">
                <span>￥88.00</span>
                <img src="../assets/images/cart_07.jpg" alt />
              </div>
            </div>
            <div class="card">
              <img src="../assets/images/shop1.jpg" alt />
              <span class="title">龙之谷六周年限定礼包大Boss冰龙款...</span>
              <div class="card-price">
                <span>￥88.00</span>
                <img src="../assets/images/cart_07.jpg" alt />
              </div>
            </div>
            <div class="card">
              <img src="../assets/images/shop1.jpg" alt />
              <span class="title">龙之谷六周年限定礼包大Boss冰龙款...</span>
              <div class="card-price">
                <span>￥88.00</span>
                <img src="../assets/images/cart_07.jpg" alt />
              </div>
            </div>
            <div class="card">
              <img src="../assets/images/shop1.jpg" alt />
              <span class="title">龙之谷六周年限定礼包大Boss冰龙款...</span>
              <div class="card-price">
                <span>￥88.00</span>
                <img src="../assets/images/cart_07.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Foot />
  </div>
</template>

<script>
import Foot from "../components/Foot";
export default {
  name: "addcart",
  methods: {
    back() {
      this.$router.back(-1);
    }
  },
  components: {
    Foot
  }
};
</script>

<style>
.tou {
  display: block;
}
.cart-one {
  background-image: url("../assets/images/bg.jpg");
}
.good-side {
  padding: 0 50px;
  background-color: #fff;
  padding-bottom: 220px;
}
.good {
  padding: 10px;
  border-top: 2px solid #b8beca;
  border-bottom: 2px solid #b8beca;
  display: flex;
  align-items: center;
  margin-bottom: 78px;
}
.good .title {
  margin-left: 10px;
  margin-right: 20px;
  font-size: 20px;
  width: 264px;
}
.good .xiangqing {
  border-left: 2px solid #fdd900;
  padding: 5px 215px 5px 20px;
}
.good .xiangqing span {
  display: block;
  color: #7b7b83;
}
.back {
  background-color: #2b2e33;
  color: #fff;
  padding: 12px 48px;
  margin-right: 10px;
}
.good a {
  padding: 12px 52px;
  background-color: #fdd900;
  text-decoration: none;
  color: #000;
}
.card {
  width: 196px;
  border: 1px solid #d1d7e3;
  padding-bottom: 5px;
  margin-right: 30px;
}
.card .title {
  padding: 0 12px;
  display: block;
}
.card .card-price {
  margin-top: 40px;
  padding: 0 2px;
  display: flex;
}
.card .card-price span {
  font-size: 24px;
  color: #dd2324;
  margin-right: 32px;
}
.need .card-all {
  display: flex;
}
.need .maybe {
  margin-bottom: 30px;
  display: block;
}
</style>
