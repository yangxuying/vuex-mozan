<template>
  <div>
    <div class="fillIn_maskMain" v-if="isAddAddress">
      <div>
        <span>新增地址</span>
        <span @click="addAddress" class="iconfont icon-cuo">
          <b>×</b>
        </span>
      </div>
      <!--  -->
      <div class="addAddressMain">
        <div class="addone">
          <div class="addAddressMain_left">
            <div class="article">
              <span>
                <span class="Identification">*</span> 收货人
              </span>
              <span class="Identification" v-show="havName">请填写收货人！</span>
            </div>
            <input v-model="name" type="text" />
          </div>
          <div class="addAddressMain_right">
            <div class="article">
              <span>
                <span class="Identification">*</span> 联系电话
              </span>

              <span class="Identification" v-show="havPhoneNum">填写的手机号格式错误！</span>
            </div>
            <input v-model="phoneNum" type="text" />
          </div>
        </div>
        <!-- 第一个 -->
        <div class="addtwo">
          <div>
            <span>
              <span class="Identification">*</span> 所在地区
            </span>
            <span class="Identification" v-show="havWhere">请填写完整的所在地！</span>
          </div>
          <VDistpicker @selected="onSelected" :placeholders="placeholders"></VDistpicker>
        </div>
        <!-- 第二个 -->
        <div class="addthree">
          <div class="article">
            <span>
              <span class="Identification">*</span> 详细地址
            </span>
            <span class="Identification" v-show="havDetail">请填写详细地址！</span>
          </div>
          <input v-model="detailAddress" type="text" />
        </div>
        <div class="addfour">
          <div>
            <p>地址别名</p>
            <input v-model="alias" type="text" />
          </div>
          <div>
            <p>常用别名</p>
            <div>
              <span>家</span>
              <span>公司</span>
              <span>父母家</span>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div>
        <div>
          <span @click="addDefault">
            <span v-show="havDefault" class="iconfont icon-duihao"></span>
          </span>
          <span>设为默认地址</span>
        </div>
        <div>
          <button
            @click="addNewAddress(
          {
            province :nowProvince,
            city:nowCity,
            area:nowArea,
          }
          )"
          >保存地址</button>
        </div>
      </div>
    </div>
    <!-- 上边的是增加地址 -->
    <!-- 下边的是修改地址 -->
    <div class="fillIn_maskMain" v-if="modify">
      <div>
        <span>修改地址</span>
        <span @click="coloseModify" class="iconfont icon-cuo"></span>
      </div>
      <!--  -->
      <div class="addAddressMain">
        <div>
          <div class="addAddressMain_left">
            <div class="article">
              <span>
                <span class="Identification">*</span> 收货人
              </span>
              <span class="Identification" v-show="havName">请填写收货人！</span>
            </div>
            <input v-model="name" type="text" />
          </div>
          <div class="addAddressMain_right">
            <div class="article">
              <span>
                <span class="Identification">*</span> 联系电话
              </span>

              <span class="Identification" v-show="havPhoneNum">填写的手机号格式错误！</span>
            </div>
            <input v-model="phoneNum" type="text" />
          </div>
        </div>
        <!-- 第一个 -->
        <div>
          <div>
            <span>
              <span class="Identification">*</span> 所在地区
            </span>
            <span class="Identification" v-show="havWhere">请填写完整的所在地！</span>
          </div>
          <VDistpicker
            @selected="onSelected"
            :placeholders="placeholders"
            :province="whoseAddress.province"
            :city="whoseAddress.city"
            :area="whoseAddress.area"
          ></VDistpicker>
        </div>
        <!-- 第二个 -->
        <div>
          <div class="article">
            <span>
              <span class="Identi8fication">*</span> 详细地址
            </span>
            <span class="Identification" v-show="havDetail">请填写详细地址！</span>
          </div>
          <input v-model="detailAddress" type="text" />
        </div>
        <div>
          <div>
            <p>地址别名</p>
            <input v-model="alias" type="text" />
          </div>
          <div>
            <p>常用别名</p>
            <div>
              <span>家</span>
              <span>公司</span>
              <span>父母家</span>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div>
        <div>
          <span @click="addDefault">
            <span v-show="havDefault" class="iconfont icon-duihao"></span>
          </span>
          <span>设为默认地址</span>
        </div>
        <div>
          <button
            @click="modifyNewAddress(
          {
            province :nowProvince,
            city:nowCity,
            area:nowArea,
          }
          )"
          >保存地址</button>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { mapState, mapMutations } from "vuex";
import VDistpicker from "v-distpicker";
export default {
  name: "addAddress",
  data() {
    return {
      placeholders: {
        province: "请选择",
        city: "请选择",
        area: "请选择"
      },
      nowProvince: "",
      nowCity: "",
      nowArea: ""
    };
  },
  components: {
    VDistpicker
  },
  computed: {
    ...mapState({
      isAddAddress: state => state.isAddAddress,
      havName: state => state.havName,
      havPhoneNum: state => state.havPhoneNum,
      havWhere: state => state.havWhere,
      havDetail: state => state.havDetail,
      havDefault: state => state.havDefault,
      whoseAddress: state => state.whoseAddress,
      modify: state => state.modify
    }),
    name: {
      get() {
        return this.$store.state.name;
      },
      set(newName) {
        this.$store.commit("changeName", newName);
      }
    },
    phoneNum: {
      get() {
        return this.$store.state.phoneNum;
      },
      set(phoneNum) {
        this.$store.commit("changePhoneNum", phoneNum);
      }
    },
    detailAddress: {
      get() {
        return this.$store.state.detailAddress;
      },
      set(newDetailAddress) {
        this.$store.commit("changeDetailAddress", newDetailAddress);
      }
    },
    alias: {
      get() {
        return this.$store.state.alias;
      },
      set(newAlias) {
        this.$store.commit("changeAlias", newAlias);
      }
    }
  },
  methods: {
    onSelected(data) {
      this.nowProvince = data.province.value;
      this.nowCity = data.city.value;
      this.nowArea = data.area.value;
    },
    ...mapMutations({
      addAddress: "addAddress",
      addDefault: "addDefault",
      addNewAddress: "addNewAddress",
      changeModify: "changeModify",
      modifyNewAddress: "modifyNewAddress",
      coloseModify: "coloseModify"
    })
  }
};
</script>

<style>
.fillIn_maskMain {
  position: fixed;
  top: 10%;
  left: 25%;
  width: 600px;
  background-color: #fff;
  z-index: 999;
  width: 700px;
  padding: 20px;
}
.fillIn_maskMain > div:first-child {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 2px solid #222;
}
.fillIn_maskMain > div:first-child > span:first-child {
  font-size: 18px;
  font-weight: bold;
}
.fillIn_maskMain > div:last-child {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
}
.fillIn_maskMain > div:last-child > div {
  display: flex;
  align-items: center;
}
.fillIn_maskMain > div:last-child > div > span:first-child {
  border: 1px solid rgb(158, 157, 157);
  width: 20px;
  height: 20px;
  display: block;
}
.fillIn_maskMain > div:last-child > div > span:first-child > span {
  line-height: 20px;
  text-align: center;
}
.fillIn_maskMain > div:last-child > div > button {
  background-color: #fdd900;
  padding: 15px 35px;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: bold;
}
.addAddressMain {
  padding: 20px;
}
.fillIn .addAddressMain input {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
}
.Identification {
  color: red;
}
.fillIn .addAddressMain > div {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.fillIn .addAddressMain > div:last-child > div {
  flex-shrink: 0;
}
.fillIn .addAddressMain > div:last-child > div p {
  margin-bottom: 0;
}
.fillIn .addAddressMain > div:last-child > div:first-child {
  flex-grow: 1;
  margin-right: 20px;
}
.fillIn .addAddressMain > div:last-child > div:first-child > input {
  width: 100%;
  padding: 8px;
}
.fillIn .addAddressMain > div:last-child > div > div {
  display: flex;
}
.addAddressMain .addfour div:first-child {
  flex-grow: 1;
  margin-right: 10px;
}
.addAddressMain .addfour div:first-child input {
  width: 100%;
}
.addAddressMain > div:last-child > div > div {
  display: flex;
}
.addAddressMain > div:last-child > div > div span {
  border: 1px solid #333;
  width: 66px;
  text-align: center;
  margin-left: 5px;
  line-height: 22px;
  display: block;
}
.fillIn .article {
  display: flex;
  justify-content: space-between;
}
.addAddressMain_left {
  flex-shrink: 0;
  width: 210px;
  margin-right: 10px;
}
.fillIn .addAddressMain_right {
  flex-grow: 1;
}
.fillIn .addAddressMain > div:nth-child(3) {
  display: block;
}
.fillIn .addAddressMain > div:nth-child(2) {
  display: block;
}
.fillIn .addAddressMain > div:nth-child(2) > div:first-child {
  display: flex;
  justify-content: space-between;
}
.fillIn .addAddressMain select {
  width: 33%;
  border: 1px solid #ccc;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  /* background: url("./../assets/images/select_07.jpg") no-repeat scroll right
    center transparent; */
  background-size: contain;
}
.fillIn .addAddressMain .distpicker-address-wrapper {
  display: flex;
  justify-content: space-between;
}
.distpicker-address-wrapper select {
  padding: 5px;
  width: 208px;
}
.addAddressMain .addone {
  display: flex;
  margin-bottom: 20px;
}
.addAddressMain_right {
  flex-grow: 1;
}
.addAddressMain_right input {
  width: 100%;
}
.addAddressMain .addtwo,
.addthree {
  margin-bottom: 20px;
}
.addAddressMain .addfour {
  display: flex;
}
.addAddressMain .addfour p {
  margin: 0;
}
</style>