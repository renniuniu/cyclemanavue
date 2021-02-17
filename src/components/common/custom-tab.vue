<template>
  <div>
    <el-tabs v-model="active" class="custom-tab" type="card">
      <el-tab-pane
        :label="item"
        :name="item"
        class="mt-3"
        v-for="(item, index) in tabsArr"
        :key="index"
      >
      </el-tab-pane>
    </el-tabs>
    <section>
      <slot :active="active"></slot>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    tabsArr: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      active: this.tabsArr[0]
    };
  }
};
</script>

<style lang="less">
.custom-tab {
  .el-tabs__nav-scroll {
    .el-tabs__nav {
      margin-left: 0px !important;
    }
  }
}
</style>
