<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogInfo.showEdit"
    :width="dialogWidth"
    top="12vh"
    :before-close="close"
  >
    <el-tabs v-model="active" class="custom-tab-dialog" type="card">
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
    <div slot="footer">
      <el-button
        type="primary"
        @click="$emit('save')"
        v-if="dialogInfo.type === 'add'"
        >确 定</el-button
      >
      <el-button
        type="primary"
        @click="$emit('push')"
        v-else-if="dialogInfo.type === 'push'"
        >确认推送</el-button
      >
      <template v-else>
        <el-button @click="$emit('save')">保 存</el-button>
        <el-button type="primary" @click="$emit('submit')">提 交</el-button>
      </template>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    dialogInfo: {
      type: Object,
      default: () => {
        return {};
      }
    },
    tabsArr: {
      type: Array,
      default: () => {
        return [];
      }
    },
    dialogWidth: {
      type: String,
      default: "880px"
    }
  },
  data() {
    return {
      active: this.tabsArr[0]
    };
  },
  methods: {
    close() {
      this.dialogInfo.showEdit = false;
    }
  }
};
</script>

<style lang="less">
.custom-tab-dialog {
  .el-tabs__nav-scroll {
    .el-tabs__nav {
      margin-left: 0px !important;
      border: none;
      .el-tabs__item {
        background-color: rgb(238, 238, 238);
        margin-right: 8px;
        height: 37px;
        border-radius: 4px 4px 0 0;
        border: none;
        &.is-active {
          background-color: @bg-blue;
          color: white;
        }
      }
    }
  }
}
</style>
