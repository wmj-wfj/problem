<template>
<div>
    <!-- 点击按钮更改input里面的内容及样式  -->
   <input
          type="text"
          v-model="text"
          placeholder="最多5个汉字"
          ref="input"
          :disabled="dis"
          :class="[is?'input':'inputs']"
          @blur="blur"
        />
        <button @click="ChangeName">点击</button>
</div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
         is:true,
         //禁止点击
      dis: true,
      //绑定
        text:'11'
    }
  },
methods:{
    // 更改昵称
    ChangeName() {
      this.is=!this.is;
      if(this.is==false){
         this.dis = false;
        this.$nextTick(() => {
          this.$refs.input.focus();
        });
      }
    },
    //失去焦点
    blur(){
    this.dis=true
    this.is=!this.is
    },
},
}
</script>
<style scoped>
.input{
    display: inline-block;
    position: relative;
    width: 80px;
    text-align: center;
    border:none;
    width: 80px;
    height: 25px;
    background:#f00;
}
.inputs{
    width: 80px;
    height: 25px;
    background: #fff;
border: none;
text-align: center;
margin-right: 20px;
}
</style>
