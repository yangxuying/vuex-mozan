<template>
  <div class="footer">
    <div class="foot-top">
      <div class="main-container">
        <div class="foot-t-wrap">
          <div class="foot-t-l">
            <h3>帮助信息</h3>
            <div class="ul-side">
              <ul>
                <li>
                  <img src="../assets/images/4_03.jpg" alt /> 购物指南
                </li>
                <li>
                  <img src="../assets/images/4_16.jpg" alt />支付方式
                </li>
                <li>
                  <img src="../assets/images/4_22.jpg" alt />配送方式
                </li>
                <li>
                  <img src="../assets/images/4_25.jpg" alt />售后服务
                </li>
              </ul>
              <ul>
                <li>
                  <img src="../assets/images/4_05.jpg" alt />服务中心
                </li>
                <li>
                  <img src="../assets/images/4_17.jpg" alt />关于我们
                </li>
                <li>
                  <img src="../assets/images/4_21.jpg" alt />免责条款
                </li>
                <li>
                  <img src="../assets/images/4_26.jpg" alt />友情链接
                </li>
              </ul>
            </div>
          </div>
          <div class="foot-t-c">
            <h3>关注我们</h3>
            <img src="../assets/images/share_11.jpg" alt />
            <img src="../assets/images/share_13.jpg" alt />
          </div>
          <div class="foot-t-r">
            <h3>客服热线</h3>
            <div class="phone">
              <img src="../assets/images/4_12.jpg" alt />
              <div>
                <span class="haoma">400 113 5353</span>
                <br />
                <span class="shijian">[周一至周五9:00-18:00]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot-bot">
      <div class="main-container">
        <div class="foot-bot-side">
          <img src="../assets/images/logo_03.jpg" alt />
          <div class="compony">
            <span>北京开普乐科技有限公司@版权所有 Copyright 2015-2025 Morethan.cc All rights reserved.</span>
            <span>地址：北京市朝阳区建国路93号院4号楼4层505</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jiao"
};
</script>

<style>
ul {
  margin: 0;
  padding: 0;
  margin-right: 42px;
}
li {
  list-style: none;
}
.ul-side li {
  color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.ul-side {
  display: flex;
}
.foot-t-wrap {
  display: flex;
  padding: 60px 0;
}
.foot-t-l {
  padding: 0 76px;
}
.foot-top h3 {
  color: #fff;
  font-size: 26px;
}
.foot-t-l img {
  margin-right: 12px;
}
.foot-top {
  background-color: #000;
  display: flex;
}
.foot-t-c {
  margin-right: 160px;
}
.foot-t-c img {
  margin-right: 30px;
}
.foot-t-r .phone {
  display: flex;
  align-items: center;
}
.foot-t-r .phone img {
  margin-right: 18px;
}
.foot-t-r span {
  color: #fff;
}
.foot-t-r .phone .haoma {
  font-size: 26px;
}
.foot-t-r .phone .shijian {
  font-size: 16px;
}
.foot-bot {
  background-color: #2b2e33;
}
.foot-bot-side {
  padding: 14px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.foot-bot-side img {
  margin-right: 407px;
}
.compony {
  text-align: right;
}
.compony span {
  font-size: 14px;
  color: #717479;
}
</style>
