import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogin: false,
    delMainF: false,
    //
    isAddAddress: false,
    showAll: false,
    uninvoiceStyle: false,
    invoiceStyle: true,
    modify: false,
    whoseAddress: null,
    indexs: [
      {
        price: '700.00',
        style: [
          { title: 'iPhone5' },
          { title: 'iPhone6' },
          { title: 'iPhone6+' }
        ],
        size: [
          { title: 'XXS' },
          { title: 'XS' },
          { title: 'S' },
          { title: 'M' },
          { title: 'L' },
          { title: 'XL' },
          { title: 'XXL' }
        ],
        num: 3
      }
    ],
    goods: [
      {
        id: 111,
        isCheck: true,
        title: '龙之谷六周年限定礼包大Boss冰龙款男士T恤',
        price: '79.00',
        pic:
          'https://github.com/liu-sir666/mozan/blob/master/src/assets/images/2_03.jpg?raw=true',
        style: 'iphone 5',
        size: 'XL',
        num: 1,
        status: 'on',
        isDel: false
      },
      {
        id: 112,
        isCheck: true,
        title: '龙之谷六周年限定礼包大Boss冰龙款男士T恤',
        pic:
          'https://github.com/liu-sir666/mozan/blob/master/src/assets/images/2_03.jpg?raw=true',
        price: '79.00',
        style: 'iphone 5',
        size: 'XL',
        num: 1,
        status: 'on',
        isDel: false
      },
      {
        id: 113,
        isCheck: true,
        title: '龙之谷六周年限定礼包大Boss冰龙款男士T恤',
        pic:
          'https://github.com/liu-sir666/mozan/blob/master/src/assets/images/2_03.jpg?raw=true',
        price: '79.00',
        style: 'iphone 5',
        size: 'XL',
        num: 1,
        status: '售罄',
        isDel: false
      },
      {
        id: 114,
        isCheck: true,
        title: '龙之谷六周年限定礼包大Boss冰龙款男士T恤',
        pic:
          'https://github.com/liu-sir666/mozan/blob/master/src/assets/images/2_03.jpg?raw=true',
        price: '79.00',
        style: 'iphone 5',
        size: 'XL',
        num: 1,
        status: '已下架',
        isDel: false
      }
    ],
    addresses: [
      {
        id: 'n111',
        name: '阿不来提 · 阿不都热西提',
        province: '河北省',
        city: '秦皇岛市',
        area: '海港区',
        addressDetailed: '秦海路84号',
        address: '河北省秦皇岛市海港区秦海路84号',
        telephone: '18713516698',
        isLiActive: false,
        isDefault: false,
        isDelAddress: false
      },
      {
        id: 'n222',
        name: '阿不来提 · aaa',
        province: '河北省',
        city: '秦皇岛市',
        area: '海港区',
        addressDetailed: '秦海路84号',
        address: '河北省秦皇岛市海港区秦海路84号',
        telephone: '18713516698',
        isLiActive: false,
        isDefault: true,
        isDelAddress: false
      },
      {
        id: 'n333',
        name: '阿不来提 · abb',
        province: '河北省',
        city: '秦皇岛市',
        area: '海港区',
        addressDetailed: '秦海路84号',
        address: '河北省秦皇岛市海港区秦海路84号',
        telephone: '18713516698',
        isLiActive: true,
        isDefault: false,
        isDelAddress: false
      }
    ],
    havName: false,
    havPhoneNum: false,
    havWhere: false,
    havDetail: false,
    havDefault: false,
    //
    name: '',
    phoneNum: '',
    detailAddress: '',
    alias: ''
  },
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    addNum(state, payload) {
      state.goods.find(item => item.id == payload.id).num++;
    },
    subNum(state, payload) {
      if (state.goods.find(item => item.id == payload.id).num > 1) {
        state.goods.find(item => item.id == payload.id).num--;
      } else {
        alert('no');
      }
    },
    delMain(state, payload) {
      const nowChange = state.goods.find(item => item.id === payload.id);
      nowChange.isDel = !nowChange.isDel;
    },
    delCartLists(state, payload) {
      state.goods = state.goods.filter(item => item.id != payload.id);
    },
    delMainFooter(state) {
      state.delMainF = !state.delMainF;
    },
    noDel(state) {
      state.delMainF = !state.delMainF;
    },
    delAll(state) {
      state.goods = [];
    },
    changeCheck(state, payload) {
      const nowChange = state.goods.find(item => item.id === payload.id);
      nowChange.isCheck = !nowChange.isCheck;
    },
    changeAll(state) {
      if (!state.goods.find(item => item.isCheck === false)) {
        // const nowShop =
        state.goods = state.goods.map(item => {
          return {
            id: item.id,
            isCheck: false,
            pic: item.pic,
            title: item.title,
            style: item.style,
            size: item.size,
            price: item.price,
            num: item.num
            // status: item.status
          };
        });
      } else {
        state.goods = state.goods.map(item => {
          return {
            id: item.id,
            isCheck: true,
            pic: item.pic,
            title: item.title,
            style: item.style,
            size: item.size,
            price: item.price,
            num: item.num
            // status: item.status
          };
        });
      }
    },
    submission(state, payload) {
      if (
        payload.value === 12345 &&
        payload.text === 111111 &&
        payload.code === 'hvdhn'
      ) {
        payload.jumpPag();
      } else if (payload.value != 15130376662) {
        alert('用户名不对');
      } else if (payload.text != 111111) {
        alert('密码不对');
      } else if (payload.code != 'hvdhn') {
        alert('验证码不对，请重新输入');
      }
    },
    //地址地址
    changeDelAddress(state, payload) {
      const nowDel = state.addresses.find(item => item.id === payload.id);
      nowDel.isDelAddress = !nowDel.isDelAddress;
    },
    changeDefault(state, payload) {
      const nowDel = state.addresses.find(item => item.id === payload.id);
      const oldDefault = state.addresses.find(item => item.isDefault === true);
      oldDefault.isDefault = !oldDefault.isDefault;
      nowDel.isDefault = !nowDel.isDefault;
    },
    changeLiactive(state, payload) {
      const nowDel = state.addresses.find(item => item.id === payload.id);
      const oldDefault = state.addresses.find(item => item.isLiActive === true);
      oldDefault.isLiActive = !oldDefault.isLiActive;
      nowDel.isLiActive = !nowDel.isLiActive;
    },
    delLiAddress(state, payload) {
      state.addresses = state.addresses.filter(item => item.id != payload.id);
    },
    addAddress(state) {
      state.isAddAddress = !state.isAddAddress;
    },
    /////////////
    changeName(state, newName) {
      state.name = newName;
    },
    changePhoneNum(state, newPhoneNum) {
      state.phoneNum = newPhoneNum;
    },
    changeDetailAddress(state, newDetailAddress) {
      state.detailAddress = newDetailAddress;
    },
    changeAlias(state, newAlias) {
      state.alias = newAlias;
    },
    changeShow(state) {
      state.showAll = !state.showAll;
    },
    uninvoice(state) {
      state.uninvoiceStyle = true;
      state.invoiceStyle = false;
    },
    invoice(state) {
      state.uninvoiceStyle = false;
      state.invoiceStyle = true;
    },
    addDefault(state) {
      state.havDefault = !state.havDefault;
    },
    addNewAddress(state, payload) {
      const addNew = {
        id: 'sdasda',
        name: state.name,
        telephone: state.phoneNum,
        province: payload.province,
        city: payload.city,
        area: payload.area,
        addressDetailed: state.detailAddress + '(' + state.alias + ')',
        isLiActive: false,
        isDefault: state.havDefault,
        isDelAddress: false
      };
      if (state.name === '') {
        state.havName = !state.havName;
      } else if (state.phoneNum === '') {
        state.havPhoneNum = !state.havPhoneNum;
      } else if (
        payload.province === '' &&
        payload.city === '' &&
        payload.area === ''
      ) {
        state.havWhere = !state.havWhere;
      } else if (state.detailAddress === '') {
        state.havDetail = !state.havDetail;
      } else if (
        state.name != '' &&
        state.phoneNum != '' &&
        payload.province != '' &&
        payload.city != '' &&
        payload.area != '' &&
        state.detailAddress != ''
      ) {
        state.addresses.push(addNew);
        const oldDefault = state.addresses.find(
          item => item.isDefault === true
        );
        oldDefault.isDefault = false;
        state.isAddAddress = !state.isAddAddress;
        state.havName = false;
        state.havPhoneNum = false;
        state.havWhere = false;
        state.havDetail = false;
      }
    },
    modifyNewAddress(state, payload) {
      const oidDrtail = state.addresses.find(item => item.isDefault === true);
      const addNew = {
        id: state.whoseAddress.id,
        name: state.name,
        telephone: state.phoneNum,
        province: payload.province || state.whoseAddress.province,
        city: payload.city || state.whoseAddress.city,
        area: payload.area || state.whoseAddress.area,
        addressDetailed: state.detailAddress + '(' + state.alias + ')',
        isLiActive: false,
        isDefault: state.havDefault,
        isDelAddress: false
      };
      if (addNew.name === '') {
        addNew.havName = !addNew.havName;
      } else if (addNew.phoneNum === '') {
        addNew.havPhoneNum = !addNew.havPhoneNum;
      } else if (
        addNew.province === '' &&
        addNew.city === '' &&
        addNew.area === ''
      ) {
        addNew.havWhere = !addNew.havWhere;
      } else if (addNew.detailAddress === '') {
        addNew.havDetail = !addNew.havDetail;
      } else if (
        addNew.name != '' &&
        addNew.phoneNum != '' &&
        addNew.province != '' &&
        addNew.city != '' &&
        addNew.area != '' &&
        addNew.detailAddress != ''
      ) {
        if (oidDrtail.id === addNew.id) {
          const changeWho = state.addresses.find(item => item.id === addNew.id);
          changeWho.id = addNew.id;
          changeWho.name = addNew.name;
          changeWho.province = addNew.province;
          changeWho.city = addNew.city;
          changeWho.area = addNew.area;
          changeWho.addressDetailed = addNew.addressDetailed;
          changeWho.telephone = addNew.telephone;
          changeWho.isLiActive = addNew.isLiActive;
          changeWho.isDefault = true;
          changeWho.isDelAddress = addNew.isDelAddress;
          state.havName = false;
          state.havPhoneNum = false;
          state.havWhere = false;
          state.havDetail = false;
        } else {
          if (addNew.isDefault === true) {
            oidDrtail.isDefault = false;
          }
          const changeWho = state.addresses.find(item => item.id === addNew.id);

          changeWho.id = addNew.id;
          changeWho.name = addNew.name;
          changeWho.province = addNew.province;
          changeWho.city = addNew.city;
          changeWho.area = addNew.area;
          changeWho.addressDetailed = addNew.addressDetailed;
          changeWho.telephone = addNew.telephone;
          changeWho.isLiActive = addNew.isLiActive;
          changeWho.isDefault = addNew.isDefault;
          changeWho.isDelAddress = addNew.isDelAddress;
          state.havName = false;
          state.havPhoneNum = false;
          state.havWhere = false;
          state.havDetail = false;
        }
        state.isAddAddress = !state.isAddAddress;
      }
    },
    changeModify(state, payload) {
      state.modify = !state.modify;
      state.whoseAddress = state.addresses.find(item => item.id === payload.id);
      state.name = state.whoseAddress.name;
      state.phoneNum = state.whoseAddress.telephone;
      state.detailAddress = state.whoseAddress.addressDetailed;
    },
    coloseModify(state) {
      state.modify = !state.modify;
    }
  },
  getters: {
    checkType(state) {
      return !state.goods.find(item => item.isCheck === false);
    },
    checkNum(state) {
      return state.goods.filter(item => item.isCheck === true).length;
    },
    totals(state) {
      const nowCheck = state.goods.filter(item => item.isCheck === true);
      return nowCheck
        .reduce((res, item) => {
          return (res = item.price * item.num + res);
        }, 0)
        .toFixed(2);
    },
    choise(state) {
      return state.goods.find(item => item.isCheck === true);
    },
    needToPays(state, getters, rootState) {
      const havGoods = state.goods.filter(item => item.status === 'on');
      return havGoods.filter(item => item.isCheck === true);
    },
    payGoodInfo(state, getters) {
      const payNum = getters.needToPays.length;
      const payPrice = getters.needToPays.reduce((res, item) => {
        return (res = res + item.price * item.num);
      }, 0);
      const payDiscount = 0;
      const payFreight = 10;
      const payMoney = payPrice - payDiscount + payFreight;
      const payInfo = {
        id: 'asudyoaisu',
        num: payNum,
        price: payPrice.toFixed(2),
        discount: payDiscount.toFixed(2),
        freight: payFreight.toFixed(2),
        money: payMoney.toFixed(2)
      };
      return payInfo;
    },
    addressesShow(state) {
      return state.addresses.slice(0, 3);
    }
  }
});
export default store;
