<template>
  <div class="wrap">
    <ShouYinTop />
    <div class="main-container">
      <div class="wx-pay">
        <span>微信支付</span>
        <div>
          <p>
            距离二维码过期还剩
            <span>{{count}}秒</span>
            <br />过期后请刷新页面重新获取二维码
          </p>
          <img @click="clickJump()" src="../assets/images/erweima_03.jpg" alt />
        </div>
        <img src="../assets/images/phone_03.jpg" alt />
      </div>
    </div>
    <Foot />
  </div>
</template>

<script>
import ShouYinTop from "../components/ShouYinTop";
import Foot from "../components/Foot";
export default {
  name: "shouyintai",
  data() {
    return {
      count: 7
    };
  },
  methods: {
    clickJump() {
      const timejump = 7;
      if (!this.timer) {
        this.count = timejump;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= timejump) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
            this.$router.push({ path: "/paymc" });
          }
        }, 100);
      }
    }
  },
  components: {
    ShouYinTop,
    Foot
  }
};
</script>

<style>
.wx-pay {
  padding: 30px 50px 200px 50px;
  display: flex;
  background-color: #fff;
}
.wx-pay:first-child > span {
  font-size: 24px;
  margin-right: 142px;
}
.wx-pay div:nth-child(2) {
  margin-right: 145px;
}
.wx-pay div:nth-child(2) p {
  margin: 0;
  text-align: center;
  font-size: 14px;
}
.wx-pay div:nth-child(2) p span {
  color: red;
}
.wx-pay div:nth-child(2) img {
  margin-top: 20px;
}
</style>
