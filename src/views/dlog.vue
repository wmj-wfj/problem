<template>
<div>
    <!-- 点击显示头像 -->
    <button @click="show">点击显示弹框</button>

    <div class="dlog" v-if="showModel"></div>  <!--遮蔽罩-->
    <div class="mask" v-if="showModel">
        <p>内容</p>
    </div>
</div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
        showModel:false,
    }
  },
methods:{
    show(){
        this.show=!this.show
    }
},
}
</script>
<style scoped>
</style>