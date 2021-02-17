<template>
  <!-- 新增功能 -->
  <el-dialog
    :title="title"
    :visible.sync="dialogInfo.showEdit"
    :width="dialogWidth"
    top="12vh"
    :before-close="closeAdd"
  >
    <section class="p-3">
      <custom-form
        :formValue="formValue"
        ref="childRules"
        :form="form"
        labelWidth="100px"
      ></custom-form>
    </section>
    <div slot="footer">
      <el-button @click="closeAdd">取 消</el-button>
      <el-button type="primary" @click="add">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogWidth: {
      type: String,
      default: "880px"
    },
    dialogInfo: {
      type: Object,
      default: () => ({})
    },
    form: {
      type: Array,
      default: () => []
		},
		formValue: {
      type: Object,
      default: () => ({})
		},
		formValue_empty:{
      type: Object,
      default: () => ({})
		},
    api: {
      type: String,
      default: ""
		},
		title:{
			type: String,
			default: ""
		}
	},
  methods: {
    closeAdd() {
      this.dialogInfo.showEdit = false;
			// this.formValue = this.formValue_empty;
			Object.assign(this.formValue,this.formValue_empty);
    },
    add() {
      let flag = this.$refs.childRules.validate();
      if (flag) {
        this.axios
          .post(this.api, {
            ...this.formValue
          })
          .then(() => {
            this.$message.success("新增成功");
            this.$parent.getTable();
            this.closeAdd();
          });
      } else {
        this.$message.error("表单信息不完整，请继续填写");
      }
    }
	},
	computed: {
		autoSearchObject(){
			return this.$store.state.Common.autoSearchObject;
		}
	},
	watch: {
		"autoSearchObject"(val){
			this.formValue.referenceId = val.referenceId
		}
	},
  // // 表单生成默认值
  // created() {
  //   let form_value = {};
  //   this.form.forEach(item => {
  //     item.type === "checkbox"
  //       ? (form_value[item.name] = [])
  //       : (form_value[item.name] = "");
  //   });
	// 	this.formValue = form_value;
	// },
};
</script>
