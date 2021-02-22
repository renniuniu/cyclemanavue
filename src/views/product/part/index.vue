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
import dialogAdd from "./dialog/dialog-add";
//import DialogEdit from "../productlist/dialog/dialog-edit.vue";
import DialogEdit from "./dialog/dialog-edit.vue";
// import dialogModify from "./dialog/dialog-modify";
export default {
  mixins: [page],
  components: {
    dialogAdd,
    DialogEdit

    // dialogModify
  },
  data() {
    return {
      tdWidth: [200],
      footer: false,
      tableData: [
        {
          PartId: "P001",
          PartName: "车架",
          index: 1
        },
        {
          PartId: "P002",
          PartName: "前轮",
          index: 2
        },

        {
          PartId: "P003",
          PartName: "后轮",
          index: 3
        },
        {
          PartId: "P004",
          PartName: "座垫",
          index: 4
        },
        {
          PartId: "P005",
          PartName: "前盖",
          index: 5
        },
        {
          PartId: "P006",
          PartName: "后盖",
          index: 6
        },
        {
          PartId: "P007",
          PartName: "传动轴",
          index: 7
        },
        {
          PartId: "P008",
          PartName: "脚踏中轴",
          index: 8
        },
        {
          PartId: "P009",
          PartName: "脚踏板",
          index: 9
        },
        {
          PartId: "P010",
          PartName: "螺母",
          index: 10
        },
        {
          PartId: "P011",
          PartName: "螺栓",
          index: 11
        },
        {
          PartId: "P012",
          PartName: "车铃",
          index: 12
        },
        {
          PartId: "P013",
          PartName: "车把",
          index: 13
        },
        {
          PartId: "P014",
          PartName: "支腿",
          index: 14
        }
      ],
      header: [
        {
          label: "序号",
          type: "index",
          key: "index"
        },
        {
          label: "零件编号",
          key: "PartId"
        },
        {
          label: "零件名称",
          key: "PartName"
        },
        {
          type: "option"
        }
      ],
      form: [
        {
          name: "PartId",
          type: "input",
          label: "零件编号"
        },
        {
          name: "PartName",
          type: "input",
          label: "零件名称"
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
