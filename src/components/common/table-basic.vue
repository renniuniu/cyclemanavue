<template>
  <div class="table-basic">
    <el-table
      :data="data"
      ref="table"
      border
      size="mini"
      @selection-change="handleSelectionChange"
      highlight-current-row
      :height="tableHeight"
      @current-change="handleCurrentRowChange"
      v-loading="loading"
      :style="{ width: table_width }"
    >
      <template v-for="(item, index) in header">
        <!-- 序号 -->
        <el-table-column
          :index="index"
          :key="'level_one_' + index"
          :prop="item.key"
          :label="item.label"
          :width="tdWidth instanceof Array ? tdWidth[index] : tdWidth"
          show-overflow-tooltip
          align="center"
          v-if="item.type === 'index'"
        ></el-table-column>
        <!-- 选择 -->
        <el-table-column
          v-else-if="item.type === 'select'"
          type="selection"
          :width="tdWidth instanceof Array ? tdWidth[index] : tdWidth"
          :key="'level_one_' + index"
        >
        </el-table-column>
        <!-- 弹窗 -->
        <el-table-column
          v-else-if="item.type === 'dialog'"
          :label="item.label"
          :width="tdWidth instanceof Array ? tdWidth[index] : tdWidth"
          :key="'level_one_' + index"
        >
          <template slot-scope="scope">
            <span class="dialog" @click="openDialog(item.text, scope.row)">
              {{ item.text }}
            </span>
          </template>
        </el-table-column>
        <!-- 操作 -->
        <el-table-column
          fixed="right"
          label="操作"
          v-else-if="item.type === 'option'"
          :width="item.modes ? 80 + item.modes.length * 35 : 150"
          :key="'level_one_' + index"
        >
          <template slot-scope="scope">
            <!-- 功能按钮,默认修改删除 -->
            <template
              v-for="(button, i) in (item.modes = item.modes
                ? item.modes
                : [
                    { function: 'edit', text: '修改' },
                    { function: 'destroy', text: '删除' }
                  ])"
            >
              <el-button
                :key="'button' + i"
                @click="clickButton(button, scope.row)"
                type="text"
                size="small"
                class="option-button"
                >{{ button.text }}</el-button
              >
            </template>
          </template>
        </el-table-column>

        <!-- 金额的列 -->
        <el-table-column
          v-else-if="item.type === 'amount'"
          :label="item.label"
          :prop="item.key"
          :width="tdWidth instanceof Array ? tdWidth[index] : tdWidth"
          :key="'level_one_' + index"
        >
          <template slot-scope="scope">
            <div>{{ scope.row[item.key] | amount }}</div>
          </template>
        </el-table-column>

        <!-- 常规列 -->
        <el-table-column
          v-else
          :index="index"
          :key="'level_one_' + index"
          :prop="item.key"
          :label="item.label"
          :width="tdWidth instanceof Array ? tdWidth[index] : tdWidth"
          show-overflow-tooltip
          align="center"
        >
          <el-table-column
            :label="child.label"
            :prop="child.key"
            :width="tdWidth instanceof Array ? tdWidth[index] : tdWidth"
            v-for="(child, i) in item.children"
            show-overflow-tooltip
            :key="'level_two_' + i"
          >
          </el-table-column>
        </el-table-column>
      </template>
    </el-table>
    <!-- 底部功能菜单 -->
    <footer
      class="d-flex justify-content-between align-items-center mt-2"
      v-if="footer"
    >
      <el-button icon="el-icon-upload2" plain>导出</el-button>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        background
        :page-sizes="pageSizes"
        :pageSize="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
      >
      </el-pagination>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 是否第一次搜索
      firstSearch: true,
      // 当前页
      currentPage: 1,
      // 页数
      pageSize: 10,
      // 表格数据
      data: [],
      // 总页数
      totalCount: 10,
      // 是否显示loading
      loading: false
    };
  },
  props: {
    // 对话框状态
    dialogInfo: {
      type: Object,
      default: () => ({})
    },
    // 删除条件 支持数组(多删除条件)，字符串
    delCondition: {
      type: [String, Array],
      default: ""
    },
    // 删除一行的接口
    delApi: {
      type: String,
      default: ""
    },
    // 作废接口
    discardApi: {
      type: String,
      default: ""
    },
    // 获取数据的接口
    api: {
      type: String,
      default: "/api/getTable"
    },
    // 是否显示底部功能菜单
    footer: {
      type: Boolean,
      default: true
    },
    // 列头及对应的键值
    header: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // 分页可选择数
    pageSizes: {
      type: Array,
      default: () => {
        return [1, 10, 20, 30, 50];
      }
    },
    // 表格高度
    tableHeight: {
      type: [Number, String],
      default: "100%"
    },
    // 每列宽度 不传值表示按最大宽度等比例自适应 传100表示每列都为100 传[100,200,'',300]控制每列宽度
    tdWidth: {
      type: [Number, String, Array],
      default: ""
    },
    // 直接传给表格数据
    tableData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // 表格宽度
    tableWidth: {
      type: [Number, String],
      default: ""
    }
  },
  computed: {
    // 查询参数
    searchParameter() {
      return this.$store.state.Common.searchParameter;
    },
    // 表格总宽度
    table_width() {
      return this.tableWidth ? this.tableWidth : "";
    }
    // 字典表
    // dictionary() {
    //   return this.$store.state.Dictionary.dictionary;
    // }
  },
  watch: {
    currentPage() {
      this.getTable();
    },
    pageSize() {
      this.getTable();
    }
  },
  methods: {
    // 功能按钮
    clickButton(button, val) {
      this.$emit("giveFormValue", val);
      // 将'modify'等字符串转为'showModify'
      let show = button.function;
      show = "show" + show.substring(0, 1).toUpperCase() + show.substring(1);
      // 打开弹窗，删除按钮,修改按钮特殊处理
      switch (button.function) {
        case "destroy":
          this.destroy(val);
          break;
        case "discard":
          this.discard(val);
          break;
        case "edit":
          this.dialogInfo[show] = true;
          this.dialogInfo["type"] = "modify";
          break;
        case "set":
          this.dialogInfo[show] = true;
          this.dialogInfo["type"] = "modify";
          break;
        default:
          this.dialogInfo[show] = true;
      }
    },
    // 删除表格数据
    destroy(val) {
      let del_condition = {};
      if (this.delCondition instanceof Array) {
        // 删除条件--多个条件时--数组
        this.delCondition.forEach(item => {
          del_condition[item] = val[item];
        });
      } else {
        // 删除条件--单个条件时--字符串
        del_condition[this.delCondition] = val[this.delCondition];
      }
      this.$confirm("确定要删除该条记录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.axios.post(this.delApi, del_condition).then(res => {
            this.$message.success("删除成功");
            this.getTable();
          });
        })
        .catch(() => {
          this.$message.info("已取消删除");
        });
    },
    // 作废
    discard(val) {
      let del_condition = {};
      if (this.delCondition instanceof Array) {
        // 删除条件--多个条件时--数组
        this.delCondition.forEach(item => {
          del_condition[item] = val[item];
        });
      } else {
        // 删除条件--单个条件时--字符串
        del_condition[this.delCondition] = val[this.delCondition];
      }
      this.$confirm("确定要作废该条记录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.axios.post(this.discardApi, del_condition).then(res => {
            this.$message.success("作废成功");
            this.getTable();
          });
        })
        .catch(() => {
          this.$message.info("已取消删除");
        });
    },
    // 获取表格数据
    getTable() {
      if (this.tableData.length !== 0) {
        this.data = this.tableData;
        return;
      }
      this.currentPage = this.firstSearch ? 1 : this.currentPage;
      this.firstSearch = false;
      this.data = [];
      this.loading = true;

      this.axios
        .post(this.api, {
          page: this.currentPage,
          limit: this.pageSize,
          ...this.searchParameter
        })
        .then(res => {
          // 计算序号
          res.data.forEach((item, index) => {
            let pageIndex = this.pageSize * (this.currentPage - 1) + 1 + index;
            item["index"] = pageIndex;
          });
          this.data = res.data;
          this.data.forEach(item => {
            for (var i in item) {
              if (this.dictionary[i]) {
                this.dictionary[i].forEach(dic => {
                  if (dic.code == item[i]) {
                    item["conv_" + i] = dic.name;
                    return false;
                  }
                });
              }
            }
          });
          this.totalCount = res.total;
          this.loading = false;
        });
    },
    // 打开对话框
    openDialog(type, row) {
      this.$emit("openDialog", type, row);
    },
    // 每页数量变化时
    handleSizeChange(val) {
      this.pageSize = val;
    },
    // 页数变化时
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    // 选中的当前行变化时
    handleCurrentRowChange(val) {
      this.$emit("currentChange", val);
    },
    // 选择框选中值变化时
    handleSelectionChange(val) {
      this.$store.commit("Common/setMultipleSelection", val);
    }
  },
  // Element table组件刷新布局
  beforeUpdate() {
    this.$nextTick(() => {
      this.$refs["table"].doLayout();
    });
  },
  mounted() {
    this.getTable();
    // this.header.forEach(item => {
    //   if (this.dictionary[item.key]) {
    //     item.key = "conv_" + item.key;
    //   }
    // });
  }
};
</script>

<style lang="less">
.table-basic {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
