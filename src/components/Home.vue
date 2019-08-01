<template>
  <div class="main">
    <!-- <div class="main-container"> -->
    <div class="banner">
      <div class="main-container">
        <el-carousel c indicator-position="none">
          <el-carousel-item>
            <img src="../assets/images/banner1_14.jpg" alt />
            <img class="center" src="../assets/images/banner_16.jpg" alt />
            <img src="../assets/images/banner_18.jpg" alt />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/images/banner1_14.jpg" alt />
            <img class="center" src="../assets/images/banner_16.jpg" alt />
            <img src="../assets/images/banner_18.jpg" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="yushou">
      <div class="main-container yushou-side">
        <div class="yushou-top">
          <div class="yushou-left">
            <div class="yushou-l-t">
              <img src="../assets/images/yushou_27.jpg" alt />
              <h3>
                龙之谷六周年限定礼包大
                <br />Boss冰龙款男士T恤
              </h3>
            </div>
            <div class="time">
              <div class="time-left">
                <span class="over">距预售结束</span>
                <div class="daojishi">
                  <span id="time1"></span>
                  <span>天时分秒</span>
                </div>
              </div>
              <div class="time-ri">
                <span class="over">相关专区</span>
                <img src="../assets/images/xiangguan_03.png" alt />
              </div>
            </div>
            <div class="time-bot">
              <div class="time-b-l">
                <img src="../assets/images/yuanwang_03.jpg" alt />
                <span>分享</span>
                <img src="../assets/images/fenxiang_06.jpg" alt />
              </div>
              <p>
                <span>注：</span>商品将于
                <span>2016/10/5</span>统一发货!
              </p>
            </div>
          </div>
          <div class="yushou-right">
            <ul v-for="index in indexs" :key="index.id">
              <li style="align-items: end;margin-bottom: 20px">
                <span class="sale-title">预售价</span>
                <div style="margin-top: -10px;">
                  <span class="index-price">￥{{index.price}}</span>
                  <span>
                    正价：
                    <span style="text-decoration:line-through">￥960.00</span>
                  </span>
                </div>
              </li>
              <li class="style">
                <span class="sale-title">款式</span>
                <div class="style-side">
                  <span
                    :class="activeClass==index?'active':''"
                    @click="getItem(index)"
                    v-for="(a,index) in index.style"
                    :key="a.title"
                  >{{a.title}}</span>
                </div>
              </li>
              <li class="size">
                <span class="sale-title">尺码</span>
                <div class="sizebox">
                  <span
                    :class="activeClas==inde?'active':''"
                    @click="getItems(inde)"
                    v-for="(s,inde) in index.size"
                    :key="s.title"
                  >{{s.title}}</span>
                </div>
              </li>
              <li style="margin-top: 28px;">
                <span class="sale-title">数量</span>
                <div class="num">
                  <span @click="sub">-</span>
                  <span>{{num}}</span>
                  <span @click="add">+</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="yushou-bot">
          <span>
            <router-link to="/vuex-mozan/addcart">立即预约</router-link>
          </span>
        </div>
      </div>
    </div>
    <div class="goods">
      <div class="main-container">
        <img src="../assets/images/goods-top_03.jpg" alt />
        <img style="display: block;" src="../assets/images/goods-bot_06.jpg" alt />
      </div>
    </div>
    <!-- </div> -->
    <footer>
      <div class="footer-top-side">
        <div class="main-container">
          <div class="footer-top">
            <img src="../assets/images/footer-logo_03.jpg" alt />
            <div class="foot-side">
              <div class="foot-top-l">
                <span>关注魔赞微信公众号</span>
                <span>获得更多礼包</span>
                <span>魔赞微信号：morethancc</span>
                <img src="../assets/images/footer-ma_07.jpg" alt />
              </div>
              <div class="foot-top-r">
                <span>
                  关于魔赞 / MORETHAN
                  <br />魔赞是开普乐旗下的IP周边专属品牌
                  <br />正版授权，原创设计
                  <br />超值礼包，一流品质
                  <br />这就是魔赞对周边的定义
                  <br />这更是魔赞对玩家的承诺
                  <br />我们称之为
                  <br />「magical & more」
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bot">
        <div class="main-container">
          <span>北京开普乐科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights reserved.</span>
          <span>地址：北京市朝阳区建国路93号院4号楼4层505</span>
        </div>
      </div>
    </footer>
    <router-view></router-view>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "home",
  data() {
    return {
      activeClass: -1,
      activeClas: -1,
      num: 1
    };
  },
  computed: {
    indexs() {
      return this.$store.state.indexs;
    }
  },
  methods: {
    getItem: function(index) {
      this.activeClass = index;
    },
    getItems: function(inde) {
      this.activeClas = inde;
    },
    add() {
      this.num++;
    },
    sub() {
      this.num--;
    }
  },
  mounted() {
    (function() {
      var Ticts = function Ticts() {
        this.ticts = {};
      };
      Ticts.prototype.createTicts = function(id, dealline) {
        var ticts = this;
        var time = moment(dealline).diff(moment());
        var _ticts = (this.ticts[id] = {
          dealine: dealline,
          id: id,
          time: time,
          interval: setInterval(function() {
            var t = null;
            var d = null;
            var h = null;
            var m = null;
            var s = null;
            //js默认时间戳为毫秒,需要转化成秒
            t = _ticts.time / 1000;
            d = Math.floor(t / (24 * 3600));
            h = Math.floor((t - 24 * 3600 * d) / 3600);
            m = Math.floor((t - 24 * 3600 * d - h * 3600) / 60);
            s = Math.floor(t - 24 * 3600 * d - h * 3600 - m * 60);
            //这里可以做一个格式化的处理,甚至做毫秒级的页面渲染,基于DOM操作,太多个倒计时一起会导致页面性能下降
            document.getElementById(id).innerHTML =
              [d < 10 ? "0" + d : d] +
              "&nbsp" +
              ":" +
              "&nbsp" +
              [h < 10 ? "0" + h : h] +
              "&nbsp" +
              ":" +
              "&nbsp" +
              [m < 10 ? "0" + m : m] +
              "&nbsp" +
              ":" +
              "&nbsp" +
              [s < 10 ? "0" + s : s];
            _ticts.time -= 1000;
            if (_ticts.time < 0) ticts.deleteTicts(id); //判断是否到期,到期后自动删除定时器
          }, 1000)
        });
      };
      Ticts.prototype.deleteTicts = function(id) {
        clearInterval(this.ticts[id].interval); //清楚定时器的方法,需要定时器的指针作为参数传入clearInterval
        delete this.ticts[id]; //通过delete的方法删除对象中的属性
      };
      //新建一个ticts对象,放到window全局函数中,那么在html页面是(或者其他js文件)可以访问该对象
      window.Ticts = new Ticts();
    })();
    Ticts.createTicts("time1", "2019-12-25 00:00:00");
  }
};
</script>

<style>
.main {
  background-image: url("../assets/images/headerbg.png");
  background-repeat: no-repeat;
  background-size: 2100px 1307px;
  background-position: top;
}
.yushou-right .style-side .active,
.yushou-right .size .sizebox .active {
  color: #fdd900;
  border-color: #fdd900;
}
.main-container {
  width: 1200px;
  margin: 0 auto;
}
/* .banner {
  background-image: url("../assets/images/banner-bg_21.jpg");
} */
.el-carousel {
  padding: 28px 50px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-image: url("../assets/images/banner-bg_21.jpg");
}
.el-carousel__item {
  background-image: url("../assets/images/banner-bg_21.jpg");
}
.el-carousel__container {
  height: 348px;
}
.el-carousel__arrow {
  width: 35px;
  height: 120px;
  opacity: 0.6;
  background-color: #000;
  border-radius: 0;
}
.el-carousel__arrow--left {
  left: -50px;
}
.el-carousel__arrow--right {
  right: -50px;
}
.el-carousel__item img {
  width: 348px;
  height: 348px;
}
.el-carousel__item .center {
  margin: 0 28px;
}
.yushou .yushou-side {
  background-color: #2b2e33;
  padding: 30px 50px 20px 50px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.yushou-top {
  border-bottom: 2px solid #4f4f4f;
  margin-bottom: 18px;
  display: flex;
  padding-bottom: 20px;
}
.yushou-bot {
  padding-bottom: 18px;
  border-bottom: 2px solid #4f4f4f;
}
.yushou-bot span a {
  width: 100%;
  text-align: center;
  color: #fdd900;
  display: block;
  padding: 28px 0;
  border: 3px solid #fdd900;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
}
.yushou-left {
  width: 670px;
  border-right: 2px solid #707378;
}
.yushou-left .yushou-l-t {
  display: flex;
  margin-bottom: 60px;
}
.yushou-left .yushou-l-t h3 {
  margin: 0;
  padding: 0;
  font-size: 36px;
  font-weight: normal;
  color: #fff;
  margin-left: 30px;
}
.yushou-left .time .over {
  color: #616368;
  padding-bottom: 3px;
  display: block;
}
.yushou-left .time .daojishi {
  width: 418px;
  height: 64px;
  padding: 0 24px;
  background-color: #707378;
  border-radius: 5px;
  text-align: center;
}
.yushou-left .time .daojishi span:nth-child(2) {
  color: #fdd900;
  letter-spacing: 54px;
  margin-left: 67px;
}
.yushou-right {
  width: 450px;
  padding-left: 16px;
}
.yushou-right li {
  display: flex;
  align-items: center;
  color: #fff;
}
.yushou-right li .sale-title {
  width: 64px;
  padding: 2px 0;
  background-color: #fff;
  border-radius: 10px;
  color: #000;
  text-align: center;
  font-size: 14px;
  margin-right: 48px;
}

.yushou-right .style-side span {
  padding: 2px 6px;
  border: 1px solid #fff;
  border-radius: 10px;
  margin-right: 3px;
}
.yushou-right .size .sizebox {
  width: 280px;
  margin-top: 10px;
  margin-top: 34px;
}
.yushou-right .size .sizebox span {
  float: left;
  padding: 2px 0;
  display: block;
  width: 65px;
  border: 1px solid #fff;
  border-radius: 10px;
  margin-right: 3px;
  text-align: center;
  margin-bottom: 3px;
}
.index-price {
  font-size: 40px;
  color: #fdd900;
  display: block;
  flex-grow: 1;
}
.num span:first-child,
.num span:last-child {
  padding: 10px 30px;
  border: 1px solid #fff;
  border-radius: 10px;
}
.num > span:nth-child(2) {
  margin: 0 65px;
}
#time1 {
  text-align: center;
  color: #fdd900;
  font-size: 32px;
  display: block;
}
.time {
  display: flex;
}
.time-bot p {
  color: #fff;
}
.time-bot p span {
  color: #fdd900;
}
.time-bot {
  display: flex;
  align-items: center;
}
.time-bot .time-b-l {
  display: flex;
  align-items: center;
  margin-right: 170px;
}
.time-bot .time-b-l span {
  color: #fff;
  font-size: 14px;
  margin: 0 15px;
}
.time-left {
  margin-right: 10px;
}
.goods {
  background-image: url("../assets/images/bg.jpg");
}
.goods img:first-child {
  padding-bottom: 80px;
  display: block;
  background-color: #fff;
}
.footer-top {
  padding: 35px 390px;
  font-size: 14px;
  color: #fff;
}
.footer-top-side {
  background-color: #000;
}
.footer-top img:first-child {
  margin: 0 auto;
  display: block;
  margin-bottom: 40px;
}
.foot-top-l span {
  display: block;
  text-align: right;
}
.foot-top-l {
  margin-right: 28px;
  position: relative;
}
.foot-top-r {
  line-height: 22px;
}
.foot-top-l img {
  position: absolute;
  right: 0;
}
.foot-side {
  display: flex;
}
.footer-bot {
  background-color: #2b2e33;
  color: #707479;
  font-size: 12px;
  text-align: center;
  padding: 30px 0;
}
.footer-bot span {
  display: block;
}
</style>
