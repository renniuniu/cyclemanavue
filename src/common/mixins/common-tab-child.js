export default{
  inject: ["D", "V", "dialogInfo", "$_dialog"],
  mounted() {
    if(this.validateIndex!==undefined){
      this.$_dialog.$on("$validate", () => {
        let flag = this.$refs.form.validate();
        this.V[this.validateIndex].flag = flag;
      });
    }
  }
}