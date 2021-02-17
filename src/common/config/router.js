/**
 * 规则：
 * 一、例如：index/index，enquiry-trading/index以index结尾的，path和name默认去除index
 * 二、例如：exchange-trading/enquiry-trading/index，默认生成name为exchange-trading_enquiry-trading
 * 三、填写后不会自动生成
 * **/

let routes = [
  {
    path: "/login",
    name: "login",
    component: "login"
  },
  {
    path: "/",
    name: "layout",
    redirect: { name: "home" },
    component: "layout",
    children: [
      // 首页
      {
        // meta: {
        //   keepAlive: true // 需要缓存的页面
        // },
        component: "home/index"
      },
//			// 理财业务管理
//			{ 
//				component: "financial-manage/manager-information/index"
//			},
//			{ 
//				component: "financial-manage/product-information/index"
//			},
//			// 交易管理
//			{
//				component: "deal-manage/purchase/index"
//			},
//			{
//				component: "deal-manage/redeem/index"
//			},
//			{
//				component: "deal-manage/auto-due/index"
//			},
//			// 台账管理
//			{
//				component: "ledger-manage/hold-position/index"
//			},
//			{
//				component: "ledger-manage/query/index"
//			},
//			// 处理中心
//			{
//				component: "process-center/examine/index"
//			},
//			// 授信管理
//			{
//				component: "credit-manage/manager-credit/index"
//			},
//			{
//				component: "credit-manage/product-credit/index"
//			},
//			{
//				component: "credit-manage/credit-apply/index"
//			},
 {
        component: 'product/product/index',
      },
      {
        component: 'product/part/index',
      },
      {
        component: 'product/productlist/index',
      },
      // 生产线管理
      {
        component: 'productline/productline/index',
      },
      {
        component: 'productline/node/index',
      },

      // 库存管理
      {
        component: 'store/partstore/index',
      },
      {
        component: 'store/productstore/index',
      },
      // 订单管理
      {
        component: 'order/index',
      },
      // 购入卖出历史记录
      {
        component: 'allhistory/parthistory/index',
      },
      {
        component: 'allhistory/producthistory/index',
      },
      // AVG小车管理
      {
        component: 'AGV/AGV/index',
      },
      {
        component: 'AGV/allAGV/index',
      },
    ]
  },
  {
    path: "*",
    redirect: { name: "layout" }
  }
];

// 获取路由信息方法
let getRoutes = function() {
  // 自动生成路由
  createRoute(routes);
  return routes;
};

// 自动生成路由
function createRoute(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].component) return;
    // 去除index
    let val = getValue(arr[i].component);
    // 生成name
    arr[i].name = arr[i].name || val.replace(/\//g, "_");
    // 生成path
    arr[i].path = arr[i].path || `/${val}`;
    // 自动生成component
    let componentFun = import(`../../views/${arr[i].component}.vue`);
    arr[i].component = () => componentFun;
    if (arr[i].children && arr[i].children.length > 0) {
      createRoute(arr[i].children);
    }
  }
}

// 去除index
function getValue(str) {
  // str = login/index
  // 获取最后一个/的索引
  let index = str.lastIndexOf("/");
  // 获取最后一个/后面的值
  let val = str.substring(index + 1, str.length);
  // 判断是不是index结尾
  if (val === "index") {
		/// 这里-1并不代表最后一个字符的索引。MDN文档上说如果substring的第一个参数比第二个参数大，那么结果就等同于把俩从参数互换，小于0的按0算，大于length的按length算。
    return str.substring(index, -1);
  }
  return str;
}

export default getRoutes();