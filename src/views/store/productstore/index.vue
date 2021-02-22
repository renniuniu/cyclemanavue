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
          ProductStoreId: "ParS001",
          ProductStoreName: "成品仓1",
          ProductStoreMax: 800,
          ProductId: "P001",
          ProductStoreMin: 100,
          ProductStoreNow: 800,
          index: 1
        }
        // {
        //   ProductId: "P002",
        //   ProductName: "前轮",
        //   index: 2
        // },

        // {
        //   ProductId: "P003",
        //   ProductName: "后轮",
        //   index: 3
        // },
        // {
        //   ProductId: "P004",
        //   ProductName: "座垫",
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
          key: "ProductStoreId"
        },
        {
          label: "产品仓库名",
          key: "ProductStoreName"
        },
        {
          label: "产品仓库最大容量",
          key: "ProductStoreMax"
        },
        {
          label: "产品编号",
          key: "ProductId"
        },
        {
          label: "产品仓库最低警戒线",
          key: "ProductStoreMin"
        },
        {
          label: "产品仓库现有库存",
          key: "ProductStoreNow"
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
          name: "ProductStoreId",
          type: "input",
          label: "仓库编号"
        },
        {
          name: "ProductStoreName",
          type: "input",
          label: "产品仓库名"
        },
        {
          name: "ProductStoreMax",
          type: "number",
          label: "产品仓库最大容量"
        },
        {
          name: "ProductId",
          type: "input",
          label: "产品编号"
        },
        {
          name: "ProductStoreMin",
          type: "number",
          label: "产品仓库最低警戒线"
        },
        {
          name: "ProductStoreNow",
          type: "number",
          label: "产品仓库现有库存"
        }
        // {
        //   name: "Flag",
        //   type: "input",
        //   label: "工作状态"
        // }
        // {
        //   name: "counterProductyName",
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
