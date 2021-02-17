import Vue from "vue";
import Router from "vue-router";

import routes from "./common/config/router.js";

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

let router = new Router({ routes });

// 全局前置守卫
router.beforeEach((to, from, next) => {
let token = true
//window.localStorage.getItem("token");

  if (token) {
    // 已登录
    next();
  } else {
    // 跳过登录页验证
    if (to.path === "/login") {
      return next();
    }
    // 未登录
    Vue.prototype.$message.error("请先登录");
    next({ path: "/login" });
  }
});

export default router;
