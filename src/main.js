import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store";

// 全局配置
import "./plugins/axios";
import "@/less/bootstrap.less";
import "@/less/reset.less";
import "@/less/elementui.less";
import "@/less/index.less";
// ...
import 'default-passive-events';
import * as filters from "@/common/filters";
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});


// 第三方包
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
Vue.use(ElementUI);
// 按需引入，以后再说
// import { Message } from "element-ui";

// 全局注册组件
import tableBasic from "./components/common/table-basic";
import tableEditor from "./components/common/table-editor";
import customForm from "./components/common/custom-form";
import customAdd from "./components/common/custom-add";
import customModify from "./components/common/custom-modify";
import customSearch from "./components/common/custom-search";
import customTab from "./components/common/custom-tab"
import customEditDialog from "./components/common/custom-edit-dialog"
import customSetDialog from "./components/common/custom-set-dialog"
import customUpload from "./components/common/custom-upload"
import plainTable from "./components/common/plain-table"
import plainImage from "./components/common/plain-image"
import dialogLxl from "./components/common/dialog-lxl.vue"

Vue.component("tableBasic", tableBasic);
Vue.component("tableEditor", tableEditor);
Vue.component("customForm", customForm);
Vue.component("customAdd", customAdd);
Vue.component("customModify", customModify);
Vue.component("customSearch", customSearch);
Vue.component("customTab", customTab);
Vue.component("customEditDialog", customEditDialog);
Vue.component("customUpload", customUpload);
Vue.component("customSetDialog", customSetDialog);
Vue.component("plainTable", plainTable);
Vue.component("plainImage", plainImage);
Vue.component("dialogLxl", dialogLxl);

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
