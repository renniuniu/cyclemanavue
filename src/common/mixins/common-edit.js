export default {
  provide() {
    return {
      D: this.D,
      V: this.V,
      dialogInfo: this.dialogInfo,
      $_dialog: this
    };
  },
  props: {
    primaryObj: {
      type: Object,
      default: () => ({})
    },
    dialogInfo: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    isModify() {
      return this.dialogInfo.type === "modify";
    },
    amount(){
      return this.$store.state.Dictionary.amount
    }
  },
  data() {
    return {
      D_empty: null,
      V:[]
    }
  },
  methods: {
    getDetails() {
      this.axios.post(this.searchApi, this.primaryObj).then(res => {
        
        for(var item in res){
          if(res[item]&&res[item].constructor===Object){
            for(var i in res[item]){
              let index = this.amount.findIndex( item => item === i);
              if(index!==-1){
                res[item]['conv_'+i] = parseFloat(res[item][i])
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
              }
            }
          }
        }
        Object.assign(this.D, res);
      });
    },
    save() {
      this.axios.post(this.saveApi, this.D).then(res => {
        if(this.dialogInfo["type"]==='add'){
          this.$message.success("新增成功");
          this.dialogInfo["showEdit"]=false
        }else{
          this.$message.success("保存成功");
          this.dialogInfo["showEdit"]=false
        }
        this.$parent.getTable()
      })
    },
    //新增指令推送方法
    push() {
      this.axios.post(this.pushApi, this.D).then(res => {
        this.$message.success("推送成功");
        this.$parent.getTable()
      })
    },
    submit() {
      this.$emit("$validate");
      let msg = "";
      this.V.forEach(item => {
        if (!item.flag) {
          msg = msg + item.name + "，";
        }
      });
      
      if (msg) {
        msg = msg.substr(0, msg.length - 1);
        this.$message.warning(msg + "页面未完成");
      } else {
        this.axios.post(this.saveApi, this.D).then(res => {
          this.axios.post(this.submitApi,this.primaryObj).then(res=>{
            this.$message.success("提交成功");
            this.dialogInfo["showEdit"]=false
          })
        });
      }
    }
  },
  watch: {
    "dialogInfo.showEdit"(val) {
      if (val && this.isModify) {
        this.getDetails();
      }
      if (val && !this.isModify) {
        Object.assign(this.D, this.D_empty);
      }
    }
  },
  created() {
    this.D_empty = this.D? JSON.parse(JSON.stringify(this.D)): this.D_empty;
  }
};
