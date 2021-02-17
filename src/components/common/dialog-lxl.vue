<template>
  <el-dialog
    :title="title"
    :visible.sync="l_visible"
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
    <template v-slot:footer>
      <slot name="function">
        <!-- <el-button type="primary" @click="$emit('pass')">通 过</el-button> -->
        <!-- <el-button type="primary" @click="$emit('reject')">驳 回</el-button> -->
      </slot>
    </template>
  </el-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    // dialogInfo: {
    //   type: Object,
    //   default: () => {
    //     return {};
    //   }
		// },
		visible: {
			type: Boolean,
			default: false
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
			active: this.tabsArr[4],
			// l_visible: this.visible,
    };
	},
	computed: {
		l_visible: {
			get: function() {
				return this.visible
			},
			set: function(val) {
				this.$emit("update:visible",val);
			}
		},
	},
  methods: {
    close() {
      this.l_visible = false;
    }
	},
	// watch: {
	// 	l_visible(val){
	// 		console.log(val);
	// 		this.$emit("update:visible",val);
	// 	}
	// }
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
