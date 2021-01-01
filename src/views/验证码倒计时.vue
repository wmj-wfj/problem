<template>
  <div>
    <button v-show="show" @click="getCode">获取验证码</button>
    <button v-show="!show" class="count">{{ count }} 秒</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      show: true,
      count: "",
      timer: null,
    };
  },
  methods: {
    getCode() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
  },
};
</script>
<style scoped>
</style>