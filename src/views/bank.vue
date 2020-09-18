<template>
  <div>
    <v-refresh :on-refresh="onRefresh">
      <!-- 下拉刷新页面 -->
      <img src="@/assets/logo.png" alt />
      <p>下拉刷新</p>
    </v-refresh>
  </div>
</template>

<script>
import mynew from "@/components/mynew.vue";
export default {
  components: {
      "v-refresh": mynew,
  },

  props: {},
  data() {
    return {};
  },
  methods: {
    onRefresh(done) {
      // 如果下拉刷新和上拉加载同时使用，下拉时初始化上拉的数据
      //   this.getStartPullUpState()
      //   this.getPullUpDefData()
      done(); // call done
    },
  },
};
</script>
<style scoped>
</style>