<template>
  <el-dialog
    width="1210px"
    title="选择"
    :visible.sync="innerVisible"
    append-to-body
    :before-close="close"
  >
    <div v-if="dialogData.selectSearch">
      <custom-search
        :form="dialogData.selectSearch.form"
        @getTable="getTable"
      ></custom-search>
      <table-basic
        style="height:500px"
        ref="table"
        :tdWidth="dialogData.selectSearch.tdWidth"
        :header="dialogData.selectSearch.header"
        :api="dialogData.selectSearch.api"
        @currentChange="selectRow"
      ></table-basic>
    </div>
    <div slot="footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="add">添 加</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    innerVisible: {
      type: Boolean,
      default: false
    },
    tdWidth: {
      type: [Number, String, Array],
      default: () => {
        return [60];
      }
    },
    // 需要添加的值
    addKey: {
      type: String,
      default: ""
    },
    dialogData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      selectedRow: {}
    };
  },
  methods: {
    close() {
      this.$emit("update:innerVisible", false);
    },
    getTable() {
      this.$refs.table.getTable();
    },
    selectRow(val) {
      this.selectedRow = val;
    },
    add() {
      let addData = {};
      addData[this.dialogData.name] = this.selectedRow[this.dialogData.name];
      this.$emit("addSelected", addData);
    }
  },
  created() {
    if (this.tdWidth.length === 0) {
      this.header.forEach(item => {
        switch (item.type) {
          case "select":
            this.tdWidth.push(40);
            break;
          case "index":
            this.tdWidth.push(60);
            break;
          default:
            this.tdWidth.push(150);
        }
      });
    }
  }
};
</script>
