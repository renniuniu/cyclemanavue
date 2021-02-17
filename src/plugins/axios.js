"use strict";

import Vue from "vue";
import axios from "axios";
import { Message } from "element-ui";
import $config from "@/common/config.js";
import store from "../store";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  baseURL: $config.baseURL,
  // timeout: 60 * 1000, // Timeout
  withCredentials: true // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  config => {
    // let token = window.localStorage.getItem("token");

    // if (config.Authorization !== false) {
    //   config.headers["Authorization"] = "Bearer "+token;
    // }

    // config.headers["Content-Type"] = "application/json";

    // 在发送请求之前做些什么
    return config;
  },
  err => {
    // 对请求错误做些什么
    return Promise.reject(err);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  res => {
    if(res.data.resCode==='200'){
        return res.data.resData;
      }else{
        Message.error(res.data.resData)
        return Promise.reject();
    }
    // return res.data.resData;
    // let dictionary = store.state.Common.dictionary
    
    // let targetDictionary = 'user-set';
    // let useDictionary = []

    // dictionary.forEach(item=>{
    //   if(item.page === targetDictionary){
    //     useDictionary = item.data;
    //   }
    // })
    // if(res.data.data instanceof Array){
    //   res.data.data.forEach(item => {
    //     for(var i in item){
    //       useDictionary.forEach(dic=>{
    //         if(dic.key === i ){
    //           dic.options.forEach(opt=>{
    //             if(opt.key===item[i]){
    //               let conv = 'conv_'+i;
    //               item[conv]=opt.value
    //             }
    //           })
    //         }
    //       })
    //     }
    //   })
    // }


  },
  err => {
    // 全局错误提示
    if (err.response && err.response.data) {
      Message.error(err.response.data.message);
    }

    // if (err.response.data.data === "Token 令牌不合法!") {
    //   store.commit("User/logout");
    //   router.push({ name: "login" });
    // }
    return Promise.reject(err);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
