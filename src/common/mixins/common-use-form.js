export default {
  data() {
    return {
      formValue: {}
    };
  },
  methods: {
    initFormValue(type) {
      let form_value = {};
      this.form.forEach(item => {
        if(this.formValue[item.name]===undefined){
          item.type === "checkbox"
          ? (form_value[item.name] = [])
          : (form_value[item.name] = "");
        }else{
          form_value[item.name] = this.formValue[item.name]
        }
        this.formValue = form_value;
      });
    }
  },
  // 表单生成默认值
  created() {
    this.initFormValue();
  }
};
