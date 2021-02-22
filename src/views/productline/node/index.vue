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
//import DialogAdd from "./dialog/dialog-add.vue";
// import dialogModify from "./dialog/dialog-modify";
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
          NodeName: "车架翻转",
          NodeMax: "50",
          PartId: "P001",
          NodeMin: 5,
          NodeNow: 50,

          index: 1
        }
        // {
        //   PartId: "P002",
        //   PartName: "前轮",
        //   index: 2
        // },

        // {
        //   PartId: "P003",
        //   PartName: "后轮",
        //   index: 3
        // },
        // {
        //   PartId: "P004",
        //   PartName: "座垫",
        //   index: 4
        // }
      ],
      header: [
        {
          label: "序号",
          type: "index",
          key: "index"
        },
        {
          label: "节点编号",
          key: "NodeId"
        },
        {
          label: "节点名称",
          key: "NodeName"
        },
        {
          label: "节点对零件容量",
          key: "NodeMax"
        },
        {
          label: "零件编号",
          key: "PartId"
        },

        {
          label: "节点零件数量警戒线",
          key: "NodeMin"
        },
        {
          label: "节点零件现有量",
          key: "NodeNow"
        },
        // {
        //   label: "产品数量",
        //   key: "ProductNumber"
        // },
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
          name: "NodeName",
          type: "input",
          label: "节点名称"
        },
        {
          name: "NodeMax",
          type: "number",
          label: "节点对零件容量"
        },
        {
          name: "PartId",
          type: "input",
          label: "零件编号"
        },
        {
          name: "NodeMin",
          type: "number",
          label: "节点零件数量警戒线"
        },
        {
          name: "NodeNow",
          type: "number",
          label: "节点零件现有量"
        }
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
      this.formEditValue = val;
    }
  }
};
</script>

<style lang="less" scoped></style>
