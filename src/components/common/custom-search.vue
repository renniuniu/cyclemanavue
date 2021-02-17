<template>
  <div class="custom-search d-flex flex-wrap pb-2">
    <div
      class="d-flex border"
      :class="{ 'flex-wrap w-100 pb-3 border-blue': moreSearch }"
    >
      <div class="w-100 d-flex align-items-center">
        <custom-form
          :form="moreSearch ? form : form.slice(0, 1)"
          :formValue="formValue"
          :rulesSpecial="{}"
        ></custom-form>
        <el-button type="text" @click="moreSearch = true" v-if="!moreSearch"
          >高级筛选<i class="el-icon-arrow-down"></i
        ></el-button>
      </div>
      <el-button type="primary" class="ml-4 search-button" @click="search"
        >查 询</el-button
      >
    </div>

    <el-button
      type="text"
      class="ml-auto"
      @click="moreSearch = false"
      v-if="moreSearch"
    >
      普通查询 <i class="el-icon-arrow-up"></i>
    </el-button>
  </div>
</template>

<script>
export default {
  props: {
    // 表单属性
    form: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      moreSearch: false,
      formValue: {},
    };
  },
  // 表单生成默认值
  created() {
    let form_value = {};
    this.form.forEach((item) => {
      switch (item.type) {
        case "checkbox":
        case "inputRange":
          form_value[item.name] = [];
          break;
        default:
          form_value[item.name] = "";
      }
    });
    this.formValue = form_value;
  },
  methods: {
    search() {
      this.$store.commit("Common/setSearchParameter", this.formValue);
      this.$parent.getTable ? this.$parent.getTable() : this.$emit("getTable");
    },
  },
};
</script>

<style lang="less">
.custom-search {
  .search-button {
    margin-top: 12px;
  }
}
</style>
