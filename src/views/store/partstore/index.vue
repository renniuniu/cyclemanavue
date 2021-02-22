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
          PartStoreId: "ParS001",
          PartStoreName: "零件仓1",
          PartStoreMax: 1000,
          PartId: "P001",
          PartStoreMin: 100,
          PartStoreNow: "1000",
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
          label: "仓库编号",
          key: "PartStoreId"
        },
        {
          label: "零件仓库名",
          key: "PartStoreName"
        },
        {
          label: "零件仓库最大容量",
          key: "PartStoreMax"
        },
        {
          label: "零件编号",
          key: "PartId"
        },
        {
          label: "零件仓库最低警戒线",
          key: "PartStoreMin"
        },
        {
          label: "零件仓库现有库存",
          key: "PartStoreNow"
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
          name: "PartStoreId",
          type: "input",
          label: "仓库编号"
        },
        {
          name: "PartStoreName",
          type: "input",
          label: "零件仓库名"
        },
        {
          name: "PartStoreMax",
          type: "number",
          label: "零件仓库最大容量"
        },
        {
          name: "PartId",
          type: "input",
          label: "零件编号"
        },
        {
          name: "PartStoreMin",
          type: "number",
          label: "零件仓库最低警戒线"
        },
        {
          name: "PartStoreNow",
          type: "number",
          label: "零件仓库现有库存"
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
