<template>
  <!-- 修改功能 -->
  <el-dialog
    :title="title"
    :visible.sync="dialogInfo.showEdit"
    :width="dialogWidth"
    top="12vh"
    :before-close="closeEdit"
  >
    <section class="p-3">
      <custom-form
        :rules="rules"
        ref="childRules"
        :form="form"
        labelWidth="130px"
        :formValue="formEditValue"
      ></custom-form>
    </section>
    <div slot="footer">
      <el-button @click="closeEdit">取 消</el-button>
      <el-button type="primary" @click="modify">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import rules from "@/common/mixins/common-rules.js";
export default {
  mixins: [rules],
  props: {
    dialogWidth: {
      type: String,
      default: "820px"
    },
    title: {
      type: String,
      default: "修改"
    },
    dialogInfo: {
      type: Object,
      default: () => ({})
    },
    form: {
      type: Array,
      default: () => []
    },
    formEditValue: {
      type: Object,
      default: () => ({})
    },
    api: {
      type: String,
      default: ""
    }
  },

  methods: {
    closeEdit() {
      this.dialogInfo.showEdit = false;
    },
    modify() {
      let flag = this.$refs.childRules.validate();
      if (flag) {
        this.axios
          .post(this.api, {
            data: this.formEditValue
          })
          .then(() => {
            this.$message.success("修改成功");
            this.closeEdit();
          });
      } else {
        this.$message.error("表单信息不完整，请继续填写");
      }
    }
  }
};
</script>
