<template>
  <div class="layout d-flex">
    <aside>
      <div class="logo d-flex align-items-center">
        <img src="@/assets/svg/logo.svg" />
        <span>自行车零件调配系统</span>
      </div>
      <section>
        <vue-scroll :ops="ops">
          <el-menu
            :collapse="isCollapse"
            :default-active="editableTabsValue"
            class="el-menu-vertical"
            @select="handleSelect"
            active-text-color="#45494f"
          >
            <el-submenu
              :class="{ 'submenu--active': currentSubIndex == index }"
              :index="index | numToString"
              v-for="(item, index) in layout.menu"
              :key="index"
            >
              <template slot="title">
                <i class="iconfont" :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item
                :index="subItem.name | numToString"
                v-for="(subItem, index) in item.submenu"
                :key="'sub' + index"
                >{{ subItem.label }}</el-menu-item
              >
            </el-submenu>
          </el-menu>
        </vue-scroll>
      </section>
    </aside>
    <main>
      <header class="d-flex">
        <div class="d-flex align-items-center">
          <i class="el-icon-s-fold f26" @click="isCollapse = !isCollapse"></i>
          <span class="ml-4 f18">{{ label }}</span>
        </div>
      </header>
      <nav>
        <el-tabs
          v-model="editableTabsValue"
          type="border-card"
          closable
          @tab-click="handleClick"
          @tab-remove="removeTab"
          class="nav-bars"
        >
          <el-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.label"
            :name="item.name"
          >
            <div v-if="editableTabsValue === item.name">
              <keep-alive>
                <router-view class="page"></router-view>
              </keep-alive>
            </div>
          </el-tab-pane>
        </el-tabs>
      </nav>
    </main>
  </div>
</template>

<script>
import vueScroll from "vuescroll";
import layout from "@/common/config/layout.js";
export default {
  components: {
    vueScroll
  },
  data() {
    return {
      photo: "@/assets/images/login/logo.png",
      layout,
      isCollapse: false,
      // 滚动条配置
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {
          keepShow: true
        },
        bar: {
          hoverStyle: true,
          onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
          background: "#d3d9df", //滚动条颜色
          opacity: 1, //滚动条透明度
          "overflow-x": "hidden"
        }
      },
      // 标签
      label: "首页",
      // nav标签
      editableTabsValue: "0-0",
      editableTabs: [
        {
          name: "0-0",
          label: "首页"
        }
      ]
    };
  },
  computed: {
    currentSubIndex() {
      return this.editableTabsValue.split("-")[0] - 1;
    },
    user() {
      return this.$store.state.User.user;
    }
  },
  methods: {
    handleCommand(command) {
      if (command === "b") {
        this.logout();
      }
    },
    logout() {
      this.$message.success("退出成功");
      this.$store.commit("User/logout");
      this.$router.push({ name: "login" });
    },
    // 菜单点击事件
    handleSelect(key) {
      if (key === "11-1" || key === "11-2") {
        window.open(this.layout.baseURL + "/ui/ksauth", "_blank");
        return;
      }
      let indexArr = key.split("-");
      let submenuLabel = this.layout.menu[indexArr[0] - 1].submenu[
        indexArr[1] - 1
      ].label;
      if (this.editableTabs.findIndex(item => item.name === key) === -1) {
        this.editableTabs.push({
          name: key,
          label: submenuLabel,
          content: "New Tab content"
        });
      }

      this.href(key);
      this.editableTabsValue = key;
      this.setMenuConfig();
    },
    // tab标签点击事件
    handleClick(tab) {
      this.editableTabsValue = tab.name;
      this.href(tab.name);
      this.setMenuConfig();
    },

    // 路由跳转
    href(name) {
      if (name === "0-0") {
        this.label = "首页";
        this.$router.push("/home");
        return;
      }
      this.changeLabel(name);
      let indexArr = name.split("-");
      let path = this.layout.menu[indexArr[0] - 1].submenu[indexArr[1] - 1]
        .path;
      this.$router.push(path);
    },

    //改变label
    changeLabel(page) {
      if (page === "0-0") {
        this.label = "首页";
        return;
      }
      let indexArr = page.split("-");
      let labelFirst = this.layout.menu[indexArr[0] - 1].name;
      let labelSecond = this.layout.menu[indexArr[0] - 1].submenu[
        indexArr[1] - 1
      ].label;
      this.label = labelFirst + " / " + labelSecond;
    },

    // 移除tab标签事件
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.href(activeName);
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      this.setMenuConfig();
    },

    // 保存当前已打开标签
    setMenuConfig() {
      let menuConfig = {
        editableTabsValue: this.editableTabsValue,
        editableTabs: this.editableTabs
      };
      window.sessionStorage.setItem("menuConfig", JSON.stringify(menuConfig));
    }
  },

  // 刷新后读取之前已打开标签，展开菜单
  created() {
    let menuConfig = window.sessionStorage.getItem("menuConfig", menuConfig);
    menuConfig = JSON.parse(menuConfig);
    if (menuConfig) {
      this.editableTabs = menuConfig.editableTabs;
      this.editableTabsValue = menuConfig.editableTabsValue;
      this.changeLabel(this.editableTabsValue);
    }
  }
};
</script>

<style lang="less" scoped>
.layout {
  height: 100vh;
  aside {
    background-color: white;
    .logo {
      padding-left: 13px;
      position: relative;
      width: unset;
      height: 72px;
      font-size: 20px;
      font-weight: 600;
      overflow: hidden;
      img {
        width: 40px;
      }
      span {
        position: absolute;
        white-space: nowrap;
        left: 72px;
        color: @text-dark;
      }
    }
    section {
      height: calc(100% - 72px);
    }
    .logo--collapse {
      width: 20px;
    }
  }
  main {
    width: 800px;
    flex-grow: 1;
    header {
      background-color: white;
      font-weight: 600;
      padding-left: 20px;
      height: 56px;
      i {
        font-size: 20px;
      }
      span {
        font-size: 13px;
      }
    }
    nav {
      height: calc(100% - 56px);
    }
  }
}
</style>

<style lang="less">
.el-menu-vertical:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
}
.nav-bars {
  border: none;
  box-shadow: none;
  height: 100%;
  & > .el-tabs__header {
    .el-tabs__nav-scroll {
      height: 40px;
      padding: 0 8px;
      .el-tabs__nav {
        .el-tabs__item {
          font-size: 12px;
          height: 32px;
          line-height: 32px;
          margin: 4px 8px;
          border-radius: 4px;
          &:not(.is-active) {
            background-color: white;
          }
          &.is-active {
            background-color: @bg-blue;
            color: white;
          }
        }
        div[aria-controls="pane-0-0"] {
          width: 100px;
          text-align: center;
          span {
            display: none;
          }
        }
      }
    }
  }
  & > .el-tabs__content {
    height: calc(100% - 40px);
    background-color: @bg-light;
    padding: 0;
  }
}
</style>
