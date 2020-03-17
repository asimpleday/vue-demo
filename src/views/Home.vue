<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import urls from '@/utils/url.js'

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  created(){
    this.getUserInfo();
  },
  methods: {
    getUserInfo(){
      let data = {
        CurrentPage: 1,
        PageSize: 10,
        SysCode: "U02_ED2D955CF5E14468A7C2C421_01"
      }
      this.$postHttp(urls.mycheckList, data)
      .then((res) => {
        console.log(res);
      }).catch(res => {
        console.log(res);
      })
    }
  }
};
</script>
