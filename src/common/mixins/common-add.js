export default {
  props: {
    dialogInfo: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    getTable() {
      this.$parent.getTable();
    }
  }
};
