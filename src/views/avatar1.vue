<template>
<!-- 更换头像 （转化为blob格式）-->
  <div>
    <div id="one">
      <p class="picture" style="width: 108px; float: left">
        <img
          id="preview"
          :src="info"
          style="width: 48px; height: 48px; float: left; background-size: cover"
        />
      </p>
    </div>
    <div @click="change">
      <input
        type="file"
        name="file"
        accept="image/*"
        @change="handleFile($event)"
        class="hiddenInput"
        ref="avatarInput"
      />
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  props: {},
  data() {
    return {
      info: "",
    };
  },
  methods: {
    change() {
      // this.$el.querySelector(".hiddenInput").click();
    },
    handleFile: function (e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      this.info = window.URL.createObjectURL(e.target.files[0]);
      let params = {
        uid: this.$store.state.uid,
        file: this.info,
      };
      let param = JSON.stringify(params);
    //   axios({
    //     url: "http://116.62.181.150/api/img/post", //这里是后台接口需要换掉

    //     type: "POST",

    //     dataType: "json",

    //     cache: false,

    //     data: param,
    //     headers: {
    //       "content-type": "application/x-www-form-urlencoded",
    //       // "token": token //token换成从缓存获取
    //     },

    //     processData: false,

    //     contentType: false,
    //   })
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    },
  },
};

</script>
<style>
</style>