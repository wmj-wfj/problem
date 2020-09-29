<template>
<div>
    <button @click="qq">qq登陆</button>
</div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
methods:{
    qq(){
        window.open(
            'http://www.wwyyyy.shop/Admin/login/Hindex',
            'newwindow',
            'height=500,width=500,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no'
        )
    }
},
}
</script>
<style scoped>
</style>