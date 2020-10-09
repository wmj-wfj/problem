<template>
<!-- 更换头像  （更换为base64码格式）-->
<div class="img">
        <img alt :src="info" class='myimg'/>
        <input
          type="file"
          accept="image/*"
          @change.stop="handleFile"
          class="hiddenInput"
          style="display:none"
        />
        <button @click="change">点击更换头像</button>
     
</div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
        info: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=62d46c39067b020818c437b303b099b6/d4628535e5dde7119c3d076aabefce1b9c1661ba.jpg',
    }
  },
methods:{
     // 更换头像
    change() {
      this.$el.querySelector(".hiddenInput").click();
    },
    // 将头像显示
    handleFile: function (e) {
      let $target = e.target || e.srcElement; //调用各种属性
      let file = $target.files[0]; //表示取第一张图

      var reader = new FileReader();
      reader.onload = (data) => {
        let res = data.target || data.srcElement;
        this.info = res.result;
      };
      reader.readAsDataURL(file); //将文件编码成Data Url
    },
    upload(){
      let params={
        
      }
      let param=JSON.stringify(params)
    }
},
}
</script>
<style scoped>
.img {
    text-align: center;
    width: 100%;
    border-radius: 50%;
}
.myimg {
    width: 76px;
    height: 76px;
    border-radius: 50%;
    margin-top: 5vw;
    position: relative;
}
.img>i{
    position: absolute;
    top: 36vw;
    left: 63vw;
}
</style>