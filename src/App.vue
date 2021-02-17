<template>
  <div id="app">
    <keep-alive>
      <router-view :max="10"></router-view>
    </keep-alive>
    <!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    $test() {
      this.$message.success("测试");
    }
  },
  created() {
    this.$store.commit("User/initLogin");
  }
};
</script>

<style lang="less">
::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 0;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 5px;
  background: #f0f2f5;
  transition: color 0.2s ease;
}

::-webkit-scrollbar-corner {
  background: #f0f2f5;
}

body {
  /*三角箭头的颜色*/
  scrollbar-arrow-color: rgb(74, 76, 80);
  /*滚动条滑块按钮的颜色*/
  scrollbar-face-color: rgb(51, 55, 61);
  /*滚动条整体颜色*/
  // scrollbar-highlight-color: #0099dd;
  /*滚动条阴影*/
  /*滚动条轨道颜色*/
  scrollbar-track-color: rgb(29, 33, 39);
  /*滚动条3d亮色阴影边框的外观颜色——左边和上边的阴影色*/
  // scrollbar-3dlight-color: #0099dd;
  /*滚动条3d暗色阴影边框的外观颜色——右边和下边的阴影色*/
  // scrollbar-darkshadow-color: #0099dd;
  /*滚动条基准颜色*/
  scrollbar-base-color: #0099dd;
}
</style>
