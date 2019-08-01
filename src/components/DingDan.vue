<template>
  <div>
    <div class="main-container">
      <div class="cart-top">
        <span>填写订单</span>
        <div>
          <span>购物车</span>
          <span>填写订单</span>
          <span>付款，购买成功</span>
        </div>
      </div>
      <img src="../assets/images/cart-top_03.jpg" alt />
      <ul class="dizhi">
        <div class="dizhi-top">
          <span>收货地址</span>
          <span>
            <span @click="addAddress" style="border:1px solid #000;">+</span> 新增地址
          </span>
        </div>
        <li
          v-for="address in addresses"
          :key="address.id"
          class="liInner"
          :class="address.isLiActive?'checked ':'bgBorder'"
          @click="changeLiactive({id:address.id})"
        >
          <div class="dizhi-left">
            <span>
              <img src="../assets/images/name_03.jpg" alt />
              {{address.name}}
            </span>
            <span>
              <img src="../assets/images/name_06.jpg" alt />
              <!-- {{address.address}} -->
              {{address.province}}
              {{address.city}}
              {{address.area}}
            </span>
            <span>
              <img src="../assets/images/name_08.jpg" alt />
              {{address.telephone}}
            </span>
          </div>
          <div class="dizhi-right">
            <span class="default" v-if="address.isDefault">默认</span>
            <span v-else @click="changeDefault({id:address.id})">设置默认</span>
            <span>编辑</span>
            <span>
              <div class="delBox" v-show="address.isDelAddress">
                <span @click="delLiAddress({id:address.id})">确定删除</span>
                <span @click="changeDelAddress({id:address.id})">不删除</span>
              </div>
              <span @click="changeDelAddress({id:address.id})">删除</span>
            </span>
          </div>
        </li>
        <img class="more" src="../assets/images/more_03.jpg" alt />
      </ul>
      <ul class="shangpin">
        <div class="shangpin-top">
          <span>商品信息</span>
          <span>返回购物车修改</span>
        </div>
        <li v-for="payGood in  needToPays" :key="payGood.id">
          <div class="shangpin-left">
            <img :src="payGood.pic" alt />
            <span>{{payGood.title}}</span>
          </div>
          <div class="shangpin-center">
            <span>款式: {{payGood.style}}</span>
            <span>尺码：{{payGood.size}}</span>
          </div>
          <div class="shangpin-price">
            <span>￥{{payGood.price}}</span>
          </div>
          <div class="shangpin-right">
            <span>×{{payGood.num}}</span>
          </div>
        </li>
      </ul>
      <div class="pay">
        <div>
          <span class="pay-one">支付方式</span>
          <span class="pay-last">在线支付</span>
        </div>
        <div>
          <span class="pay-one">物流方式</span>
          <span class="pay-last">普通快递</span>
        </div>
        <div>
          <span class="pay-one">发票信息</span>
          <span class="pay-last">不开发票</span>
          <span class="pay-last">开发票</span>
        </div>
        <div>
          <input type="text" />
          <span>保存</span>
        </div>
      </div>
      <div class="beizhu">
        <div class="beizhu-top">
          <span>备注</span>
        </div>
        <div class="beizhu-text"></div>
      </div>
      <div class="payon">
        <div class="payon-top">
          <span>数量</span>
          <span>单价</span>
          <span>小计</span>
          <span>优惠</span>
          <span>运费</span>
          <span>实际应付</span>
        </div>
        <div class="payon-price">
          <span>{{payGoodInfo.num}}</span>
          <span>×</span>
          <span>￥79.00</span>
          <span>=</span>
          <span>￥{{payGoodInfo.price}}</span>
          <span>-</span>
          <span>￥0.00</span>
          <span>+</span>
          <span>￥{{payGoodInfo.freight}}</span>
          <span>=</span>
          <span class="payon-price-last">￥{{payGoodInfo.money}}</span>
        </div>
        <router-link to="/vuex-mozan/shouyin">
          <span class="tijiao">提交订单</span>
        </router-link>
      </div>
    </div>
    <!-- 蒙版 -->
    <div class="fillIn_mask" v-if="isAddAddress||modify"></div>
    <AddAddress />
    <!-- end -->
  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import AddAddress from "./AddAddress";
export default {
  name: "dingdan",
  components: {
    AddAddress
  },
  computed: {
    addresses() {
      return this.$store.state.addresses;
    },
    goods() {
      return this.$store.state.goods;
    },
    ...mapState({
      isAddAddress: state => state.isAddAddress,
      addresses: state => state.addresses,
      showAll: state => state.showAll,
      uninvoiceStyle: state => state.uninvoiceStyle,
      invoiceStyle: state => state.invoiceStyle,
      modify: state => state.modify
    }),
    ...mapGetters({
      payGoodInfo: "payGoodInfo",
      needToPays: "needToPays",
      addressesShow: "addressesShow"
    })
  },
  methods: {
    ...mapMutations({
      changeDelAddress: "changeDelAddress",
      delLiAddress: "delLiAddress",
      changeDefault: "changeDefault",
      changeLiactive: "changeLiactive",
      changeShow: "changeShow",
      uninvoice: "uninvoice",
      invoice: "invoice",
      addAddress: "addAddress",
      changeModify: "changeModify"
    }),
    goShopCart() {
      this.$router.push(`${this.$publicUrl}shopcart`);
    },
    goCashier() {
      this.$router.push(`${this.$publicUrl}cashier`);
    }
  }
};
</script>

<style>
.dizhi .dizhi-top,
.shangpin .shangpin-top,
.beizhu .beizhu-top {
  border-bottom: 2px solid #000;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
}
.dizhi li,
.shangpin li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 22px;
}
.shangpin li {
  border-bottom: 1px solid #d1d7e3;
}
.dizhi li .dizhi-left span {
  display: block;
  display: flex;
  align-items: center;
}
.dizhi li .dizhi-left span img {
  margin-right: 10px;
}
.dizhi li .dizhi-right span {
  margin-right: 46px;
}
.dizhi,
.shangpin,
.pay,
.beizhu,
.payon {
  padding: 0 50px;
  margin-right: 0;
}
.dizhi li .dizhi-right span:last-child {
  margin-right: 0;
}
.dizhi .more {
  width: 100%;
  margin-top: 20px;
}
.shangpin-left img {
  width: 67px;
  margin-right: 10px;
}
.shangpin-left {
  display: flex;
  align-items: center;
}
.shangpin-center span {
  color: #797c83;
  font-size: 14px;
  margin-right: 26px;
}
.shangpin li:last-child {
  border-bottom: 2px solid #000;
}
.pay .pay-one {
  margin-right: 20px;
}
.pay .pay-last {
  width: 130px;
  text-align: center;
  border: 2px solid #797c83;
  font-size: 14px;
  line-height: 42px;
}
.pay {
  padding: 28px 50px;
  justify-content: space-between;
}
.pay,
.pay div {
  display: flex;
  align-items: center;
}
.pay div:nth-child(2) {
  margin: 0 50px;
}
.pay div:nth-child(3) .pay-last {
  width: 104px;
  margin-right: 10px;
}
.pay div:nth-child(4) span {
  background-color: #fdd900;
  width: 55px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
  margin-left: 10px;
}
.pay div:nth-child(4) input {
  line-height: 38px;
}
.beizhu > .beizhu-text {
  height: 108px;
  width: 100%;
  border-bottom: 1px solid #d1d7e3;
}
.payon .payon-top {
  display: flex;
  justify-content: space-between;
}
.payon .payon-price {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}
.payon .payon-price-last {
  color: red;
  font-size: 26px;
}
.payon .tijiao {
  width: 222px;
  line-height: 56px;
  background-color: #fdd900;
  display: block;
  text-align: center;
  font-size: 24px;
  margin-left: 880px;
  margin-top: 46px;
}

.dizhi li .dizhi-right {
  display: flex;
}
.dizhi li .dizhi-right span:nth-child(3) {
  position: relative;
}
.dizhi li .dizhi-right .delBox {
  position: absolute;
  width: 150px;
  top: 30px;
  right: 0;
}
.dizhi li .dizhi-right .delBox span {
  margin-right: 0;
}
.payon-price span:nth-child(2) {
  margin: 0 85px;
}
.payon-price span:nth-child(4) {
  margin: 0 68px;
}
.payon-price span:nth-child(6) {
  margin: 0 70px;
}
.payon-price span:nth-child(8) {
  margin: 0 75px;
}
.payon-price span:nth-child(10) {
  margin: 0 60px;
}
.fillIn_mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(87, 87, 87, 0.644);
  z-index: 333;
}
.bgBorder {
  border-bottom: 1px solid #d1d7e3;
}
.checked {
  /* background-image: url("./../assets/images/border_10.jpg"); */
  border: 2px solid #fdd900;
  /* background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 10px; */
}
.default {
  padding: 3px 8px;
  background-color: rgba(34, 34, 34, 0.863);
  color: rgba(231, 229, 229, 0.925);
}
</style>
