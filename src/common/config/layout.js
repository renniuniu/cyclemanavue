// 主菜单
export default {
  logo: {
    // icon: require('@/assets/images/login/logo.png'),
    name: '自行车零件调配系统',
  },
  menu: [{
    icon: 'icon-financial-manage',
    name: '自行车产品模块',
    submenu: [{
      name: '1-1',
      label: '自行车产品',
      path: '/product/product',
    },
    {
      name: '1-2',
      label: '自行车配件表',
      path: '/product/productlist',
    },
    {
      name: '1-3',
      label: '自行车零件',
      path: '/product/part',
    },
    ],
  },
  {
    icon: 'icon-deal-manage',
    name: '生产线模块',
    submenu: [{
      name: '2-1',
      label: '生产线',
      path: '/productline/productline',
    },
    {
      name: '2-2',
      label: '节点',
      path: '/productline/node',
    },

    ],
  },
  {
    icon: 'icon-ledger-manage',
    name: '库存管理',
    submenu: [{
      name: '3-1',
      label: '零件库存',
      path: '/store/partstore',
    },
    {
      name: '3-2',
      label: '产品库存',
      path: '/store/partstore',
    },
    ],
  },
  {
    icon: 'icon-ledger-manage',
    name: '订单管理',
    submenu: [{
      name: '4-1',
      label: '现有订单',
      path: '/order',
    },
    // {
    //   name: '3-2',
    //   label: '台账查询',
    //   path: '/ledger-manage/query',
    // },
    // {
    //   name: '3-3',
    //   label: '持仓管理',
    //   path: '/ledger-manage/hold-position',
    // },
    // {
    //   name: '3-4',
    //   label: '台账查询',
    //   path: '/ledger-manage/query',
    // },
    ],
  },
  {
    icon: 'icon-process-center',
    name: '购入卖出历史记录',
    submenu: [{
      name: '5-1',
      label: '零件记录',
      path: '/allhistory/parthistory',
    },
    {
      name: '5-2',
      label: '产品记录',
      path: '/allhistory/producthistory',
    },
    ],
  },
  {
    icon: 'icon-credit-manage',
    name: 'AGV小车管理',
    submenu: [{
      name: '6-1',
      label: '查询全部AGV小车',
      path: '/AGV/allAGV',
    },
    {
      name: '6-2',
      label: '查询AGV小车位置',
      path: '/AGV/AGV',
    },
    ],
  },
  ],
};
