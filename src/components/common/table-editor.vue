<template>
  <div class="table-editor">
    <div class="button-group d-flex justify-content-end px-2 pt-2">
      <slot></slot>
      <el-button type="primary" @click="save">{{
        optionType === "add" ? "添加" : "修改"
      }}</el-button>
    </div>
    <custom-form ref="form" :form="form" :formValue="formValue"></custom-form>
    <el-table :data="data" border :height="360">
      <template v-for="(item, index) in header">
        <el-table-column
          :index="index"
          :key="'level_one' + index"
          :prop="item.key"
          :label="item.label"
          :width="tdWidth instanceof Array ? tdWidth[index] : tdWidth"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
      </template>
      <el-table-column fixed="right" label="操作" :width="150">
        <template slot-scope="scope">
          <!-- 修改,删除 -->
          <el-button
            type="text"
            size="small"
            class="option-button"
            @click="modify(scope.row)"
            >修改</el-button
          >
          <el-button
            type="text"
            size="small"
            class="option-button"
            @click="destroy(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Array,
      default: () => {
        return [];
      }
    },
    tdWidth: {
      type: [Array, String],
      default: () => {
        return "";
      }
    },
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      currentEditRow: {},
      optionType: "add",
      header: [],
      formValue: {}
    };
  },
  methods: {
    save() {
      let flag = this.$refs.form.validate();
      if (!flag) {
        this.$message.warning("存在不合法字段");
        return;
      }
      if (this.optionType === "add") {
        this.data.push(JSON.parse(JSON.stringify(this.formValue)));
        this.$message.success("添加成功");
      } else {
        this.$message.success("修改成功");
        this.currentEditRow.test3 = "test";

        for (let key in this.currentEditRow) {
          this.currentEditRow[key] = this.formValue[key];
        }

        this.optionType = "add";
      }
      this.$refs.form.reset();
    },
    modify(val) {
			// console.log(val)
      this.optionType = "modify";
      this.currentEditRow = val;
      this.formValue = JSON.parse(JSON.stringify(val));
    },
    destroy(val) {
			this.data.splice(val, 1);
    }
  },
  created() {
    let form_value = {};
    this.form.forEach(item => {
      this.header.push({
        key: item.name,
        label: item.label
      });
      form_value[item.name] = "";
    });
    this.formValue = form_value;
    this.$parent.formValue = this.formValue;
	},
	beforeDestroy() {
		this.$refs.form.reset();
	}
};
</script>
