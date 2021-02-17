export default {
  data() {
    return {
      rules: {
        counterpartyMajorType: [
          { required: true, message: "请选择交易对手大类", trigger: "change" }
        ],
        setupDate: [
          { required: true, message: "请选择成立时间", trigger: "change" }
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
          { required: true, pattern:/\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}/, message: "请输入统一社会信用代码", trigger: "change" }
        ],
        registerCaptial: [
          { required: true, pattern: /############3/, message: "请输入注册资本（万元）", trigger: "change" }
        ],
        officeAddress: [
          { required: true, pattern:/\^w{1,10}$/, message: "请输入办公地址", trigger: "change" }
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
        interBankNumber: [
          { required: false, message: "请选择联行号", trigger: "change" }
        ],
        swiftCode: [
          { required: false, message: "请输入swiftCode", trigger: "change" }
        ],
        relatedParty: [
          { required: false, message: "请选择关联方", trigger: "change" }
        ],
        householdBank: [
          { required: false, message: "请选择管户行", trigger: "change" }
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
      }
    };
  }
};
