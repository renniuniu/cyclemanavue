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
import DialogAdd from "./dialog/dialog-add.vue";
import DialogEdit from "./dialog/dialog-edit.vue";
export default {
  mixins: [page],
  components: {
    DialogAdd,
    DialogEdit

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
          ProductOutId: "1",
          ProductId: "P001",
          ProductOutNumber: 100,
          ProductOutTime: "2021-01-26",
          OrderId: "1",
          OrderNow: "400",

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
          label: "出库记录号",
          key: "ProductOutId"
        },
        {
          label: "产品编号",
          key: "ProductId"
        },
        {
          label: "成品出库数量",
          key: "ProductOutNumber"
        },
        {
          label: "成品出库时间",
          key: "ProductOutTime"
        },
        {
          label: "订单编号",
          key: "OrderId"
        },
        {
          label: "订单剩余数量",
          key: "OrderNow"
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
          name: "ProductOutId",
          type: "input",
          label: "出库记录号"
        },
        {
          name: "ProductId",
          type: "input",
          label: "产品编号"
        },
        {
          name: "ProductOutNumber",
          type: "number",
          label: "成品出库数量"
        },
        {
          name: "ProductOutTime",
          type: "date",
          label: "成品出库时间"
        },
        {
          name: "OrderId",
          type: "input",
          label: "订单编号"
        },
        {
          name: "OrderNow",
          type: "number",
          label: "订单剩余数量"
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
