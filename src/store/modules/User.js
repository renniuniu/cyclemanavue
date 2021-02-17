import store from "..";
export default {
  namespaced: true,
  // 用户模块
  state: {
    user: {},
    token: "1"
  },
  mutations: {
    login(state, val) {
      state.token = val.access_token;
      window.localStorage.setItem("token", state.token);
    },
    // 初始化登录
    initLogin(state, val) {
      let user = window.localStorage.getItem("user");
      state.user = JSON.parse(user);
      // 获取字段表
      store.commit('Dictionary/getDictionary')
    },
    // 退出登录
    logout(state) {
      state.user = false;
      state.token = false;
      window.localStorage.clear();
    }
  }
};
