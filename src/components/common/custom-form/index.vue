<template>
  <div class="custom-form" :style="{ width: formWidth }">
    <el-form
      ref="ruleForm"
      :rules="rules"
      :label-position="labelPosition"
      :label-width="labelWidth"
      :model="formValue"
      :size="size"
      :class="{ wrap: wrap }"
    >
      <div
        v-for="(item, index) in form"
        :key="index"
        class="item"
        :style="{ width: 382 * item.ratio + 'px' }"
      >
        <!-- 分割线 -->
        <div class="divide-line" v-if="item.type === 'line'"></div>
        <el-form-item :prop="item.name" :label="item.label" class="d-flex">
          <!-- 选择框 -->
          <div v-if="item.type === 'select'">
            <el-select
              v-model="formValue[item.name]"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
            >
              <el-option
                v-for="(option, index) in item.options"
                :key="'option' + index"
                :value="option.code"
                :label="option.name"
              >
              </el-option>
            </el-select>
          </div>
          <!-- 选择弹窗 -->
          <div
            class="select-dialog"
            :style="{ width: formWidth }"
            v-if="item.type === 'selectDialog'"
          >
            <span>{{ formValue[item.name] }}</span>
            <el-button plain size="mini" @click="openSelect(item)"
              >选择</el-button
            >
          </div>
          <!-- 输入框 -->
          <div v-if="item.type === 'input'">
            <el-input
              v-model="formValue[item.name]"
              :placeholder= "item.placeholder || '请输入'"
              :disabled="item.disabled"
            ></el-input>
            <span class="ml-2 text-gray" v-if="item.attach">
              {{ item.attach }}
            </span>
          </div>
          <!-- 金额输入框 -->
          <div v-if="item.type === 'amount'">
            <el-input
              v-model="formValue[item.name]"
              placeholder="请输入"
              :disabled="item.disabled"
              @input="formatAmount(formValue[item.name], item.name)"
              @blur="formatAmountBlur(formValue[item.name], item.name)"
            ></el-input>
            <span class="ml-2 text-gray" v-if="item.attach">
              {{ item.attach }}
            </span>
          </div>

          <!-- 范围输入框 -->
          <div v-if="item.type === 'inputRange'" class="input-range">
            <el-input
              v-model="formValue[item.name][0]"
              :disabled="item.disabled"
            ></el-input>
            <span>~</span>
            <el-input
              v-model="formValue[item.name][1]"
              :disabled="item.disabled"
            ></el-input>
          </div>

          <!-- 输入框数字 -->
          <div v-if="item.type === 'number'">
            <el-input
              type="number"
              v-model="formValue[item.name]"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
            ></el-input>
            <span class="ml-2 text-gray" v-if="item.attach">{{
              item.attach
            }}</span>
          </div>
          <!-- 自动搜索 -->
          <el-autocomplete
            v-if="item.type === 'autoSearch'"
            v-model="formValue[item.name]"
            @focus="autosearchCondition = item.autosearchCondition"
            :fetch-suggestions="querySearchAsync"
            :placeholder="item.placeholder || '请输入内容'"
            @select="handleSelect"
          ></el-autocomplete>
          <!-- 文本域 -->
          <div v-if="item.type === 'textarea'">
            <el-input
              type="textarea"
              :autosize="{ minRows: 5, maxRows: 15 }"
              :placeholder="item.placeholder"
              v-model="formValue[item.name]"
            >
            </el-input>
          </div>
          <!-- 密码 -->
          <div class="input-normal" v-if="item.type === 'password'">
            <el-input
              type="password"
              v-model="formValue[item.name]"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
            ></el-input>
            <span class="ml-2 text-gray">{{ item.attach }}</span>
          </div>
          <!-- 单选框 -->
          <div
            class="single-radio"
            v-if="item.type === 'radio'"
            :style="{ width: radioWidth }"
          >
            <el-radio-group
              v-model="formValue[item.name]"
              :placeholder="item.placeholder"
            >
              <el-radio
                :label="radio"
                v-for="radio in item.radios"
                :key="radio"
              ></el-radio>
            </el-radio-group>
          </div>
          <!-- 复选框 -->
          <div v-if="item.type === 'checkbox'">
            <el-checkbox-group
              class="d-flex flex-wrap"
              v-model="formValue[item.name]"
              :placeholder="item.placeholder"
            >
              <el-checkbox
                :label="option.code"
                v-for="(option, index) in item.options"
                :key="'check' + index"
                :name="item.name"
                >{{ option.name }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
          <!-- 显示的文本 -->
          <div class="text" v-if="item.type === 'text'">
            {{ item.text }}
          </div>
          <!-- 时间选择器 -->
          <el-time-picker
            v-if="item.type === 'time'"
            :disabled="item.disabled"
            v-model="formValue[item.name]"
            :placeholder="item.placeholder"
            value-format="yyyy-MM-dd"
          >
          </el-time-picker>
          <!-- 日期时间选择器 -->
          <el-date-picker
            v-if="item.type === 'datetime'"
            v-model="formValue[item.name]"
            type="datetime"
            :placeholder="item.placeholder"
            value-format="yyyy-MM-dd HH:mm:ss"
          >
          </el-date-picker>
          <!-- 日期选择器 -->
          <el-date-picker
            v-if="item.type === 'date'"
            v-model="formValue[item.name]"
            :disabled="item.disabled"
            type="date"
            :placeholder="item.placeholder"
            value-format="yyyy-MM-dd"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
          <!-- 日期范围选择器 -->
          <el-date-picker
            v-if="item.type === 'dateRange'"
            v-model="formValue[item.name]"
            type="daterange"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
      </div>
    </el-form>
    <dialog-select
      :innerVisible.sync="innerVisible"
      :dialogData="selectDialogData"
      @addSelected="addSelected"
    ></dialog-select>
  </div>
</template>

<script>
import dialogSelect from "./components/dialog-select.vue";
export default {
  components: {
    dialogSelect
  },
  data() {
    return {
      // 日期取值范围1900/01/01至2100-01-01
      pickerOptions: {
        disabledDate(time) {
          return (
            time.getTime() < -2209017943000 || time.getTime() > 4102416000000
          );
        }
      },
      innerVisible: false,
      // 自动搜索的所有结果
      allResult: [],
      // 选择弹窗中的数据
      selectDialogData: {},
      timeout: null,
      // 自动搜索框条件
			autosearchCondition: {},
			please: "请输入"
    };
  },
  props: {
    // 表单值
    formValue: {
      type: Object,
      default: () => ({})
    },
    // 特殊验证规则
    rulesSpecial: {
      type: Object,
      default: () => {
        return null;
      }
    },
    // 标签对齐方式
    labelPosition: {
      type: String,
      default: "right"
    },
    // 表单属性
    form: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // 表单尺寸 mini medium
    size: {
      type: String,
      default: "medium"
    },
    // 标签宽度
    labelWidth: {
      type: String,
      default: "120px"
    },
    // 是否换行
    wrap: {
      type: Boolean,
      default: true
    },
    // // 每项宽度
    // itemWidth: {
    //   type: [String, Number],
    //   default: ""
    // },
    // 表格宽度 不传值为100%
    formWidth: {
      type: String,
      default: "100%"
    },
    // 单选按钮组宽度
    radioWidth: {
      type: String,
      default: "150px"
    }
  },
  computed: {
    dictionary() {
      return this.$store.state.Dictionary.dictionary;
    },
    rules() {
      return this.rulesSpecial
        ? this.rulesSpecial
        : this.$store.state.Rules.rules;
    }
  },
  methods: {
    // 格式化转换后的金额
    formatAmount(val, key) {
      let num = parseFloat(val.split(",").join(""));
      this.formValue[key.split("conv_")[1]] = num;
    },
    // 格式化传给后端的金额
    formatAmountBlur(val, key) {
      let num = parseFloat(val.split(",").join(""));
      this.formValue[key] = parseFloat(num)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    },
    openSelect(val) {
      this.innerVisible = true;
      this.selectDialogData = val;
    },
    addSelected(val) {
      this.innerVisible = false;
      for (var i in val) {
        this.formValue[i] = val[i];
      }
    },
    // 规则校验
    validate() {
      let flag = null;
      this.$refs.ruleForm.validate(e => {
        if (e) {
          flag = true;
        } else {
          flag = false;
        }
      });
      return flag;
    },

    // 模糊查询
    async loadAll(val) {
      let result = [];
      let data = {
        ...this.autosearchCondition.otherParams
      };
      data[this.autosearchCondition.key] = val;
      await this.axios
        .post(this.autosearchCondition.api, {
          ...data
        })
        .then(res => {
          console.log(res);
          res.forEach(item => {
            result.push({
              value: item[this.autosearchCondition.key],
              ...item
            });
          });
        });
      this.allResult = result;
    },
    async querySearchAsync(queryString, cb) {
      await this.loadAll(queryString);
      var results = this.allResult;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 300);
    },
    // 模糊查询选中事件
    handleSelect(item) {
      this.$store.commit("Common/setAutoSearchObject", item);
    },

    // 重置表单
    reset() {
      this.$refs["ruleForm"].resetFields();
    },
    // 生成选项
    initOptions() {
      this.form.forEach(item => {
        if (this.dictionary[item.name]) {
          item.options = this.dictionary[item.name];
        }
      });
    },
    // 生成金额显示字段
    initAmount() {
      this.form.forEach((item, i) => {
        if (item.type === "amount") {
          if (!item.name.split("conv_")[1]) {
            let index = this.form.findIndex(obj => {
              if (obj.name) {
                if (obj.name.split("conv_")[1] === item.name) {
                  return true;
                }
              }
              return false;
            });
            if (index === -1) {
              // 用来看的item
              let viewItem = {
                name: "conv_" + item.name,
                type: item.type,
                label: item.label
              };
              this.form[i] = viewItem;
            }
          }
        }
      });
    }
  },
  watch: {
    form() {
      this.initOptions();
      this.initAmount();
    }
  },
  created() {
    this.initOptions();
    this.initAmount();
  }
};
</script>

<style lang="less" scoped>
.custom-form {
  .wrap {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>

<style lang="less">
.custom-form {
  .item {
    display: flex;
    align-items: center;
    // 分割线
    .divide-line {
      width: 770px;
      margin: 0 35px;
      height: 1px;
      background-color: rgb(231, 231, 231);
    }
    // 选择弹窗
    .select-dialog {
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      height: 36px;
      width: 220px !important;
      padding: 0 4px 0 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #606266;
      }
      button {
        width: 60px;
        height: 24px;
        span {
          font-size: 12px !important;
        }
      }
    }
    // 表单公共样式
    .el-form-item {
      margin-bottom: 0px;
      padding: 12px 0;

      .el-form-item__label {
        padding-top: 6px;
        line-height: 24px;
        color: @text-gray;
        padding-right: 0;
        padding-left: 0;
        margin-bottom: 0px !important;
        width: 150px !important;
      }
      .el-form-item__content {
        margin-left: 12px !important;
        display: flex;
        align-items: center;
      }
      // 输入框
      .el-input {
        width: 220px;
      }
      //范围输入框
      .input-range {
        span {
          font-weight: 500 !important;
        }
        .el-input:nth-child(1) {
          width: 106px;
          padding-right: 5px;
        }
        .el-input:nth-last-child(1) {
          width: 106px;
          padding-left: 5px;
        }
      }
      // 文本域
      .el-textarea__inner {
        width: 602px;
      }
    }
  }
}
</style>
