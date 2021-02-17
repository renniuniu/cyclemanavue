export default {
  namespaced: true,
  // 用户模块
  state: {
    // 临时校验规则  
    rules: {
      //用户模块
      counterpartyMajorType: [
        { required: true, message: "请选择交易对手大类", trigger: "change" }
      ],
      setupDate: [
        { required: true, message: "请选择成立时间", trigger: "change" }
      ],
      registerAddress: [
        { required: true, message: "请选择注册地", trigger: "change" }
      ],
      legalRepresentative: [
        { required: true, message: "输入法人代表", trigger: "change" }
      ],
      interBankNumber: [
        { required: true, message: "请选择联行号", trigger: "change" }
      ],
      counterpartyMinorType: [
        { required: true, message: "请选择交易对手小类", trigger: "change" }
      ],
      counterpartyName: [
        { required: true, message: "请选择交易对手全称", trigger: "change" }
      ],
      oneLevelCounterparty: [
        { required: true, message: "请选择一级交易对手", trigger: "change" }
      ],
      unifiedSocialCreditCode: [
        { required: true, message: "请输入办公地址", trigger: "change" },
        { pattern:/^[A-Z0-9]{18}$/, message: "长度18位，只可填入大写英文字母和数字", trigger: "change" }
      ],
      registerCaptial: [
        { required: true, message: "请输入注册资本（万元）", trigger: "change" }
      ],
      officeAddress: [
        { required: true, message: "请输入办公地址", trigger: "change" },
        { pattern:/.{1,50}/, message: "不能超过50个字符", trigger: "change" }
      ],
      counterpartyShortName: [
        { required: true, message: "请输入交易对手简称", trigger: "change" }
      ],
      counterpartyMinorType: [
        { required: true, message: "请选择交易对手小类", trigger: "change" }
      ],
      oneLevelCounterparty: [
        { required: true, message: "请选择一级交易对手", trigger: "change" }
      ],
      twoLevelCounterparty: [
        { required: true, message: "请选择二级交易对手", trigger: "change" }
      ],
      threeLevelCounterparty: [
        { required:false, message: "请输入三级交易对手", trigger: "change" }
      ],
      swiftCode: [
        { required: true, message: "请输入swiftCode", trigger: "change" }
      ],
      relatedParty: [
        { required: true, message: "请选择关联方", trigger: "change" }
      ],
      householdBank: [
        { required: true, message: "请选择管户行", trigger: "change" }
      ],
      accountbelong: [
        { required: true, message: "请选择账号归属地", trigger: "change" }
      ],
      accounttype: [
        { required: true, message: "请选择账号类型", trigger: "change" }
      ],
      accountname: [
        { required: true, message: "请输入账户名", trigger: "change" }
      ],
      accountno: [
        { required: true, message: "请输入账户号", trigger: "change" }
      ],
      headbank: [
        { required: true, message: "请选择总行", trigger: "change" }
      ],
      bankcity: [
        { required: true, message: "请选择城市", trigger: "change" }
      ],
      bankbranch: [
        { required: true, message: "请选择分行", trigger: "change" }
      ],
      fullbank: [
        { required: true, message: "请选择开户行全称", trigger: "change" }
      ],
      largePaymentAcc: [
        { required: false, message: "请输入大额支付行号", trigger: "change" }
      ],
      currency: [
        { required: true, message: "请选择币种", trigger: "change" }
      ],
      investmentSubject: [
        { required: true, message: "请选择投资主体", trigger: "change" }
      ],
      fundAcc: [
        { required: true, message: "请选择基金账号", trigger: "change" }
      ],
      tradeAcc: [
        { required: true, message: "请选择交易账号", trigger: "change" }
      ],
      bondAcc: [
        { required: true, message: "请选择资金账号", trigger: "change" }
      ],
      bondAccName: [
        { required: true, message: "请选择三方存管账户名", trigger: "change" }
      ],
      bondAccNumber: [
        { required: true, message: "请选择三方存管账户号", trigger: "change" }
      ],
      bondAcc: [
        { required: true, message: "请选择资金账号", trigger: "change" }
      ],
      accountFunction: [
        { required: true, message: "请输入账户功能", trigger: "change" }
      ],
      bondAccNumber: [
        { required: false, message: "请选择账号用途", trigger: "change" }
      ],
      //产品信息
      productType: [
        { required: true, message: "请选择产品类型", trigger: "change" }
      ],
      productName: [
        { required: true, message: "请输入产品名称", trigger: "change" }
      ],
      productCode: [
        { required: true, message: "请输入产品代码", trigger: "change" },
        { pattern:/^[0-9a-zA-Z.]{1,}$|^无d{0}$/, message: "如无代码可填写‘无’，否则可填入英文字母，数字和英文点.字符", trigger: "change" }
      ],
      occupyManagerCreditFlag: [
        { required: true, message: "请选择是否占用管理人授信额度", trigger: "change" }
      ],
      termType: [
        { required: true, message: "请选择期限类型", trigger: "change" }
      ],
      guaranteePrincipalFlag: [
        { required: true, message: "请选择是否保证本金", trigger: "change" }
      ],
      earlyRedemptionFlag: [
        { required: true, message: "请选择是否可提前赎回", trigger: "change" }
      ],
      guaranteeProfitFlag: [
        { required: true, message: "请选择是否保证收益", trigger: "change" }
      ],
      accountInOutdoorType: [
        { required: true, message: "请选择账户内/账户外", trigger: "change" }
      ],
      issueDate: [
        { required: true, message: "请输入发行日期", trigger: "change" }
      ],
      productScale: [
        { required: true, message: "请输入产品规模", trigger: "change" },
        { pattern:/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)\.\d{1,2}$)$/, message: "展示形式为1,000,000.00", trigger: "change" }
      ],
      connectedTransactionFlag: [
        { required: true, message: "请选择是否关联交易", trigger: "change" }
      ],
      shareCarryForwardFrequency: [
        { required: true, message: "请输入份额结转频率", trigger: "change" }
      ],
      realizablePrescription: [
        { required: false, message: "请输入可变现时效", trigger: "change" },
        { pattern:/^T[+]\d$/, message: "T+N", trigger: "change" }

      ],
      fundTrustee: [
        { required: true, message: "请输入基金托管人", trigger: "change" }
      ],
      remarks: [
        { required: true, message: "请输入备注", trigger: "change" }
      ],
      //申购
      buyingMethod: [
        { required: true, message: "请选择购买方式", trigger: "change" }
      ],
      purchasingChannel: [
        { required: true, message: "请选择购买渠道", trigger: "change" }
      ],
      estimatedPurchaseDate: [
        { required: false, message: "请选择预计购买时间", trigger: "change" }

      ],
      tradeDeadline: [
        { required: true, message: "请输入交易截止时间", trigger: "change" }
      ],
      annualizedReturnRate: [
        { required: true, message: "请输入（预计）年化收益率（%）", trigger: "change" },
        { pattern:/^[1-9]\d*$/, message: "展示形式为1,000,000.00", trigger: "change" }

      ],
      
      buyingAmount: [
        { required: true, message: "请输入购买金额", trigger: "change" },
        { pattern:/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)\.\d{1,2}$)$/, message: "展示形式为1,000,000.00", trigger: "change" }

      ],
      tradeFee: [
        { required: true, message: "请输入认购费率/申购费率(%)", trigger: "change" }

      ],
      managementFee: [
        { required: true, message: "请输入管理费率(%)", trigger: "change" }
      ],
      trusteeFee: [
        { required: true, message: "请输入托管费率(%)", trigger: "change" }
      ],
      serviceFee: [
        { required: true, message: "请输入销售服务费率(%)", trigger: "change" },
      ],
      bonusMethod: [
        { required: true, message: "请选择分红方式", trigger: "change" }

      ],
      payMethod: [
        { required: true, message: "请选择支付方式", trigger: "change" }
      ],
      marketingTeam: [
        { required: true, message: "请输入营销团队（行E通代销必选）", trigger: "change" }
      ],


      status: [
        { required: true, message: "请选择申购/赎回/转换", trigger: "change" }
      ],
      successTime: [
        { required: true, message: "请选择（转换）成功时间", trigger: "change" }
      ],
      tradeAmount: [
        { required: true, message: "请输入实际（转入/转出）金额", trigger: "change" }
      ],
      redeemProfit: [
        { required: true, message: "请输入实际赎回收益", trigger: "change" }
      ],

      cashFlow: [
        { required: true, message: "请输入现金流", trigger: "change" }
      ],
      depositFinancingType: [
        { required: true, message: "请选择存款/理财", trigger: "change" }
      ],


      交易流水号: [
        { required: true, message: "请选择交易流水号", trigger: "change" }
      ],
      申购单编号: [
        { required: true, message: "请选择申购单编号", trigger: "change" }
      ],
      认购申购: [
        { required: true, message: "请选择认购/申购", trigger: "change" }
      ],
      赎回份额: [
        { required: false, message: "请选择赎回份额", trigger: "change" },
        { pattern:/\.\d{1,2}$/, message: "小数点后两位", trigger: "change" }
      ],
      赎回费率: [
        { required: true, message: "请输入赎回费率", trigger: "change" }
      ],
      赎回金额: [
        { required: false, message: "请选择赎回金额", trigger: "change" },
        { pattern:/\.\d{1,2}$/, message: "小数点后两位", trigger: "change" }
      ],
      是否全额赎回: [
        { required: true, message: "请选择是否全额赎回", trigger: "change" }
      ],
      预计赎回日期: [
        { required: true, message: "请选择预计赎回日期", trigger: "change" }
      ],

      赎回截止时间: [
        { required: false, message: "请选择赎回截止时间", trigger: "change" }
      ],
      预计到账日期: [
        { required: true, message: "请选择预计到账日期", trigger: "change" }
      ],
      预计赎回日期: [
        { required: true, message: "请选择预计赎回日期", trigger: "change" }
      ],
    
    }
  },
  mutations: {

  }
};
