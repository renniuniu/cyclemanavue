<template>
  <div class="lables">
    <!-- <div>{{ dialogInfo }}</div> -->
    <custom-modify
      :dialogInfo="dialogInfo"
      :form="form"
      :dialogWidth="dialogWidth"
      :formEditValue="formEditValue"
      :rules="rules"
    ></custom-modify>
  </div>
</template>

<script>
import modify from "@/common/mixins/common-modify.js";
import customModify from "../../../../components/common/custom-modify.vue";
export default {
  // props: {
  //   form: {
  //     type: Array,
  //     default: () => []
  //   },
  //   formValue: {
  //     type: Object,
  //     default: () => ({})
  //   }
  // },
  components: { customModify },
  mixins: [modify],
  data() {
    return {
      dialogWidth: "900px",
      rules: {
        AgvId: [
          {
            message: "请输入活动名称",
            trigger: "blur",
            disable: false
          }
        ]
      },
      form: [
        {
          name: "LineId",
          type: "input",
          label: "生产线编号"
        },
        {
          name: "ProductListId",
          type: "input",
          label: "产品配件清单编号"
        },
        {
          name: "ProductId",
          type: "input",
          label: "产品编号"
        },
        {
          name: "ProductName",
          type: "input",
          label: "产品名称"
        }
        // {
        //   name: "PartNumber",
        //   type: "input",
        //   label: "数量"
        // }
        // {
        //   name: "NodeId",
        //   type: "input",
        //   label: "节点编号"
        // },
        // {
        //   name: "Flag",
        //   type: "input",
        //   label: "工作状态"
        // }
        // {
        //   name: "productName",
        //   type: "select",
        //   label: "产品名称",
        //   placeholder: "请先选择产品名称",
        //   autosearchCondition: {
        //     key: "productName",
        //     api: "/creditApplication/getCreditApplicationName",
        //     otherParams: {
        //       matterType: ""
        //     }
        //   }
        // },
        // {
        //   name: "productCode",
        //   type: "select",
        //   label: "产品代码",
        //   placeholder: "请先选择产品代码",
        //   autosearchCondition: {
        //     key: "productCode",
        //     api: "/creditApplication/getCreditApplicationName",
        //     otherParams: {
        //       matterType: ""
        //     }
        //   }
        // },
        // {
        //   name: "counterpartyName",
        //   type: "select",
        //   label: "交易对手全称"
        // },
        // {
        //   name: "counterpartyName",
        //   type: "autoSearch",
        //   label: "交易对手全称",
        //   placeholder: "请先选择交易对手全称",
        //   autosearchCondition: {
        //     key: "counterpartyName",
        //     api: "/fundProduct/getCounterpartyName",
        //     otherParams: {
        //       matterType: ""
        //     }
        //   }
        // },
        // {
        //   name: "productType",
        //   type: "select",
        //   label: "产品类型"
        // },
        // {
        //   name: "accountno",
        //   type: "select",
        //   label: "银行账号",
        //   placeholder: "请先选择交易对手全称",
        //   autosearchCondition: {
        //     key: "accountno",
        //     api: "/creditApplication/getCreditApplicationName",
        //     otherParams: {
        //       matterType: ""
        // //     }
        //   }
        // },
        // {
        //   name: "status",
        //   type: "select",
        //   label: "申购/赎回/转换"
        // },
        // {
        //   name: "successTime",
        //   type: "date",
        //   label: "购买（转换）成功时间"
        // },
        // {
        //   name: "tradeAmount",
        //   type: "number",
        //   label: "实际购买（转入）金额"
        // },
        // {
        //   name: "successTime",
        //   type: "date",
        //   label: "赎回（转换）成功时间"
        // },
        // {
        //   name: "tradeAmount",
        //   type: "number",
        //   label: "实际赎回本金（转出金额）"
        // },
        // {
        //   name: "redeemProfit",
        //   type: "number",
        //   label: "实际赎回收益"
        // },
        // {
        //   name: "cashFlow",
        //   type: "number",
        //   label: "现金流"
        // },
        // {
        //   name: "accountInOutdoorType",
        //   type: "select",
        //   label: "账户"
        // },
        // {
        //   name: "termType",
        //   type: "select",
        //   label: "期限类型"
        // },
        // {
        //   name: "depositFinancingType",
        //   type: "select",
        //   label: "存款/理财"
        // },
        // {
        //   name: "investmentSubject",
        //   type: "select",
        //   label: "投资主体"
        // },
        // {
        //   name: "connectedTransactionFlag",
        //   type: "select",
        //   label: "是否为关联交易"
        // },

        // {
        //   name: "currency",
        //   type: "select",
        //   label: "币种"
        // },
        // {
        //   name: "annualizedReturnRate",
        //   type: "number",
        //   label: "(预计)年化收益率"
        // },
        // {
        //   name: "realizablePrescription",
        //   type: "number",
        //   label: "可变现时效（天）"
        // }
      ]
      // formEditValue: { PartNumber: "" }
    };
  }
};
</script>
<style lang="less" scoped>
/deep/ .lables .el-form-item__label {
  width: 120px !important;
}
.lables /deep/ .el-dialog {
  margin: 90px auto !important;
  height: 50%;
  overflow: hidden;
  overflow-y: auto;
}
.lables /deep/.p-3 {
  height: auto;
}
</style>
