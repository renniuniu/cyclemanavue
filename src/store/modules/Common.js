export default {
  namespaced: true,
  // 公共模块
  state: {
    clientHeight: 100,
    clientWidth: 100,
    // 窗口相对于1080高度的比例
    heightRatio: 1,
    widthRatio: 1,
    // 自动搜索选中的对象
    autoSearchObject: {},
    // 普通表格查询的参数
    searchParameter: {
    },
    // 表单多选
    multipleSelection: [],

    // 临时字典
    dictionary:[
      
    ]
  },
  mutations: {

    // getDictionary(state){
    //   let token = window.localStorage.getItem("token");
    //   // 获取字典
    //   axios({
    //     method: "post",
    //     data:{
    //       data:{}
    //     },
    //     url: $config.baseURL+"/eswap/pDictDomain/queryDictDomain",
    //     headers: {
    //       "Authorization": "Bearer "+token
    //     }
    //   }).then(res=>{
    //     // 设置字典
    //     state.dictionary = res.data.data
    //   })
    // },

    setClientHeight(state, val) {
      state.clientHeight = val;
    },
    setClientWidth(state, val) {
      state.clientWidth = val;
    },
    setHeightRatio(state, val) {
      state.heightRatio = val;
    },
    setWidthRatio(state, val) {
      state.widthRatio = val;
    },
    setAutoSearchObject(state, val) {
      state.autoSearchObject = val;
    },
    setSearchParameter(state, val) {
      state.searchParameter = val;
    },
    setMultipleSelection(state, val) {
      state.multipleSelection = val;
    }
  }
};
