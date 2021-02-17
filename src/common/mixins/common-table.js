export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    search(val) {}
  },
  beforeDestroy() {
    this.$store.commit("Common/setSearchCondition", []);
  }
};
