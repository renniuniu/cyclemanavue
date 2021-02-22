query index
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
      tdWidth: [60],
      footer: false,
      tableData: [
        {
          AgvId: "12345",
          NodeId: "1",
          LineId: "sdafjk",
          index: 1,
          CycleIndex: "111",
          Flag: "23435"
          // status: "123"
        }
      ],
      header: [
        {
          label: "序号",
          type: "index",
          key: "index"
        },
        {
          label: "Agv编号",
          key: "AgvId"
        },
        {
          label: "节点编号",
          key: "NodeId"
        },
        {
          label: "生产线编号",
          key: "LineId"
        },
        {
          label: "已工作次数",
          key: "CycleIndex"
        },
        {
          label: "工作状态",
          key: "Flag"
        },
        {
          type: "option"
        }
        // {
        //   label: "申购/赎回/转换",
        //   key: "status"
        // }
        // {
        //   label: "购买（转换）成功时间",
        //   key: "successTime"
        // },
        // {
        //   label: "实际购买（转入）金额",
        //   key: "tradeAmount"
        // },
        // {
        //   label: "赎回（转换）成功时间",
        //   key: "successTime"
        // },
        // {
        //   label: "实际赎回（转出）金额",
        //   key: "tradeAmount"
        // },
        // {
        //   label: "实际赎回收益",
        //   key: "redeemProfit"
        // },
        // {
        //   label: "现金流",
        //   key: "cashFlow"
        // }
      ],
      form: [
        {
          name: "AgvId",
          type: "input",
          label: "Agv编号"
        },
        {
          name: "LineId",
          type: "input",
          label: "生产线编号"
        },
        {
          name: "Flag",
          type: "input",
          label: "工作状态"
        }
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
      ormEditValue: {
        AgvId: "",
        PartId: "",

        LineId: "",
        CycleIndex: "",
        Flag: ""
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
