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
import DialogEdit from "./dialog/dialog-edit";
// import { delete, set } from 'vue/types/umd';
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
          ProductListId: "PL001",
          PartId: "P001",
          PartNumber: 1,
          index: 1
        },
        {
          PartId: "P002",
          ProductListId: "PL001",
          PartNumber: 1,
          index: 2
        },

        {
          PartId: "P003",
          ProductListId: "PL001",
          PartNumber: 1,
          index: 3
        },
        {
          PartId: "P004",
          ProductListId: "PL001",
          PartNumber: 1,
          index: 4
        },
        {
          PartId: "P005",
          ProductListId: "PL001",
          PartNumber: 1,
          index: 5
        },
        {
          PartId: "P006",
          ProductListId: "PL001",
          PartNumber: 1,
          index: 6
        },
        {
          PartId: "P007",
          ProductListId: "PL001",
          PartNumber: 1,
          index: 7
        },
        {
          PartId: "P008",
          ProductListId: "PL001",
          PartNumber: 1,
          index: 8
        },
        {
          PartId: "P009",
          ProductListId: "PL001",
          PartNumber: 2,
          index: 9
        },
        {
          PartId: "P010",
          ProductListId: "PL001",
          PartNumber: 4,
          index: 10
        },
        {
          PartId: "P011",
          ProductListId: "PL001",
          PartNumber: 3,
          index: 11
        },
        {
          PartId: "P012",
          ProductListId: "PL001",
          PartNumber: 1,
          index: 12
        },
        {
          PartId: "P013",
          ProductListId: "PL001",
          PartNumber: 1,
          index: 13
        },
        {
          PartId: "P014",
          ProductListId: "PL001",
          PartNumber: 1,
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
          label: "配置表编号",
          key: "ProductListId"
        },
        {
          label: "零件编号",
          key: "PartId"
        },
        {
          label: "零件数量",
          key: "PartNumber"
        },
        {
          type: "option"
        }
      ],
      form: [
        {
          name: "ProductListId",
          type: "input",
          label: "配置表编号"
        },
        {
          name: "PartId",
          type: "input",
          label: "零件编号"
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
      },
      formEditValue: {
        ProductListId: "",
        PartId: "",
        PartNumber: ""
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
