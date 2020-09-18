<template>
  <div>
    <!-- 点击显示头像 -->
    <button @click="myshow">点击显示弹框</button>

    <div class="dlog" v-if="showModel" @click="dlog"></div>
    <div class="mask" v-if="showModel">
      <p>内容</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      showModel: false,
    };
  },
  methods: {
    myshow() {
      this.showModel = !this.showModel;
    },
    dlog() {
      this.showModel = !this.showModel;
    },
  },
};
</script>
<style scoped>
/* 弹框 */
.dlog {
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.mask {
  width: 60vw;
  height: 49vw;
  background-color: #fff;
  position: fixed;
  top: 36%;
  left: 16%;
  z-index: 2;
  padding: 4vw 15vw;
  border-radius: 5px;
  color: #000;
  margin: 2vw 7.4vw;
  padding: 0;
  overflow: hidden;
}
</style>