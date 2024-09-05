<template>
  <view>
    <button @click="login" v-if="!userRole">登录</button>
    <button @click="register">注册</button>
    <button @click="createFowl">创建家禽</button>
  </view>
</template>

<script>
  import config from '../../utils/config.js'
  import { registerFun } from '../../API/me.js'
  export default {
    data() {
      return {
        "userAccount": '123456789',
        "userPassword": '123456789',
        "checkPassword": '123456789',
        "userRole":''
      };
    },
    methods:{
      async register(e) {
        console.log(e);
        uni.showLoading({
          title:"注册中"
        })
       const res = await registerFun(config.host+'/api/user/register','12345678','12345678','12345678')
        console.log(res);
      },
      async login(e) {
        console.log(e);
        uni.showLoading({
          title:"登录中"
        })
        const res = await registerFun(config.host+'/api/user/login','123456789','123456789')
        console.log(res);
      },
      async createFowl(e) {
        console.log(e);
        uni.showLoading({
          title:"创建中"
        })
        const res = await registerFun(config.host+'/api/user/login','123456789','123456789')
        console.log(res);
      },
    }
  }
</script>

<style lang="less">

</style>
