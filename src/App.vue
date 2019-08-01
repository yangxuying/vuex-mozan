<template>
  <div>
    <nav>
      <div class="nav-container">
        <img src="./assets/images/mianbao_03.jpg" alt />
        <img class="logo" src="./assets/images/logo_03.jpg" alt />
        <img src="./assets/images/serch_03.jpg" alt />
        <img class="cart" src="./assets/images/cart_05.jpg" alt />
        <span>登录/注册</span>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import Home from "./components/Home";
export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
nav,
.nav-container {
  background-color: #2b2e33;
}
.nav-container {
  width: 1200px;
  margin: 0 auto;
  padding: 15px 38px 15px 57px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.nav-container .logo {
  margin-left: 400px;
  margin-right: 224px;
}
.nav-container .cart {
  margin-left: 20px;
}
.nav-container span {
  color: #707378;
}
.main-container {
  width: 1200px;
  margin: 0 auto;
}
</style>
