import Vue from "vue";
import Vuex from "vuex";

import User from "./modules/User";
import Common from "./modules/Common";
import Dictionary from "./modules/Dictionary";
import Rules from "./modules/Rules";


Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    //用户模块
    User,
    //公共模块
		Common,
		// 字典表
    Dictionary,
    // 校验规则表
    Rules
	}
});
