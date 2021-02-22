import axios from "axios";
import $config from "@/common/config.js";

export default {
  namespaced: true,
  // 用户模块
  state: {
    // 临时字典
    dictionary:{
      /* =====[理财业务管理][管理人信息]===== */
      // 注册地
      registerAddress:[
        {
          code:'SH',
          name:'境内'
        },
        {
          code:"SH",
          name:'境外'
        }
      ]
    },
    // 金额字段表
    amount:[
      /* =====[理财业务管理][管理人信息]===== */
      // 注册资本
      'registerCaptial'
    ]
  },
  mutations: {
    getDictionary(state){
      // // 获取字典
      // axios({
      //   method: "post",
      //   data:{
      //   },
      //   url: $config.baseURL+"/enum/getEnum",
      // }).then(res=>{
      //   // 设置字典
      //   state.dictionary = res.data.resData
      // })
    }
  }
};
