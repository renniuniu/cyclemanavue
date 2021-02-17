<template>
  <el-table
    :data="tableData"
    ref="table"
    border
    size="mini"
    highlight-current-row
    :height="tableHeight"
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
</template>

<script>
	export default {
		props: {
    // 列头及对应的键值
    header: {
      type: Array,
      default: () => {
        return [];
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
      default: ["","","","","","","","","","",]
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
	}
</script>

<style lang="scss" scoped>
</style>