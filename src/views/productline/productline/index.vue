<template>
  <!-- 估值处理[估值模板设置] -->

  <div class="page">
    <!-- <div>11111{{ formValue.t7 }}</div> -->
    <header>
      <custom-search :form="form" :formValue="formValue"></custom-search>

      <div class="d-flex justify-content-between">
        <el-button plain @click="openAdd">新增</el-button>
      </div>
    </header>
    <section>
      <table-basic
        ref="table"
        :tdWidth="tdWidth"
        :header="header"
        :footer="footer"
        :formEditValue.sync="formEditValue"
        :dialogInfo="dialogInfo"
        @currentChange="currentChange"
        :tableData="tableData"
      ></table-basic>
    </section>
    <dialog-add :dialogInfo="dialogInfo"></dialog-add>
    <dialog-edit
      :dialogInfo="dialogInfo"
      :formEditValue="formEditValue"
    ></dialog-edit>
    <!-- <dialog-modify
      :dialogState="dialogState"
      :formEditValue="formEditValue"
    ></dialog-modify> -->
  </div>
</template>

<script>
import page from "@/common/mixins/common-page.js";
import DialogEdit from "./dialog/dialog-edit.vue";
import DialogAdd from "./dialog/dialog-add.vue";

export default {
  mixins: [page],
  components: {
    DialogEdit,
    DialogAdd

    // dialogModify
  },
  data() {
    return {
      tdWidth: [200],
      footer: false,
      tableData: [
        {
          // OrderId: "1",
          // OrderName: "代购1号",
          // OrderDate: "2020-03-15",
          NodeId: "N001",
          LineId: "L001",
          LineName: "生产线1",
          // PartId: "P001"

          index: 1
        },
        {
          // OrderId: "1",
          // OrderName: "代购1号",
          // OrderDate: "2020-03-15",
          NodeId: "N002",
          LineId: "L001",
          LineName: "生产线1",
          // PartId: "P001"

          index: 2
        }
      ],
      header: [
        {
          label: "序号",
          type: "index",
          key: "index"
        },
        {
          label: "生产线编号",
          key: "LineId"
        },
        {
          label: "节点编号",
          key: "NodeId"
        },
        {
          label: "生产线名称",
          key: "LineName"
        },

        {
          type: "option"
        }
      ],
      form: [
        {
          name: "NodeId",
          type: "input",
          label: "节点编号"
        },
        {
          name: "LineId",
          type: "input",
          label: "生产线编号"
        },
        {
          name: "LineName",
          type: "input",
          label: "生产线名称"
        }
        // {
        //   name: "PartId",
        //   type: "input",
        //   label: "零件编号"
        // },
        // {
        //   name: "NodeMin",
        //   type: "number",
        //   label: "节点零件数量警戒线"
        // },
        // {
        //   name: "NodeNow",
        //   type: "number",
        //   label: "节点零件现有量"
        // }
        // {
        //   name: "Flag",
        //   type: "input",
        //   label: "工作状态"
        // }
        // {
        //   name: "counterpartyName",
        //   type: "input",
        //   label: "交易对手全称"
        // }
        // {
        //   name: "productType",
        //   type: "checkbox",
        //   label: "产品类型"
        // }
        // {
        //   name: "status",
        //   type: "checkbox",
        //   label: "申购/赎回/转换"
        // },

        // {
        //   name: "accountInOutdoorType",
        //   type: "checkbox",
        //   label: "账户"
        // },
        // {
        //   name: "termType",
        //   type: "checkbox",
        //   label: "期限类型"
        // },
        // {
        //   name: "depositFinancialType",
        //   type: "checkbox",
        //   label: "存款/理财"
        // },
        // {
        //   name: "investmentSubject",
        //   type: "checkbox",
        //   label: "投资主体"
        // },
        // {
        //   name: "connectedTransactionFlag",
        //   type: "checkbox",
        //   label: "是否为关联交易"
        // },
        // {
        //   name: "currency",
        //   type: "checkbox",
        //   label: "币种"
        // }
      ],
      formValue: {
        tradeMarket: "",
        securityCode: ""
      }
    };
  },
  methods: {
    currentChange(val) {
      //debugger;
      this.formEditValue = val;
      //debugger;
      console.log(this.formEditValue);
    }
  }
};
</script>

<style lang="less" scoped></style>
