export default {
	props: {},
	data() {
		return {
			// 列宽度
			tdWidth: [],
			// 对话框状态
			dialogInfo: {
				showEdit: false,
				type: "",
				showAdd:false,
				showDiscard: false,
				showChange: false
			},
			// 修改的编辑值
			formEditValue: {}
		};
	},
	computed: {
		multipleSelection() {
			return this.$store.state.Common.multipleSelection;
		}
	},
	methods: {
		openAdd() {
			this.dialogInfo.showAdd = true;
			this.dialogInfo.type = 'add';
		},
		getTable() {
			this.$refs.table.getTable();
		},
		setTdWidth() {
			this.header.forEach(item => {
				switch (item.type) {
					case "select":
						this.tdWidth.push(40);
						break;
					case "index":
						this.tdWidth.push(60);
						break;
					default:
						this.tdWidth.push(150);
				}
			});
		},
		// 批量操作
		bulkOperate(api, keyArr) {
			let select = [];
			// 过滤对象，只包含指定key值
			// this.multipleSelection.forEach(item => {
			//   let obj = {};
			//   keyArr.forEach(key => {
			//     obj[key] = item[key];
			//   });
			//   select.push(obj);
			// });
			let result = 
			this.multipleSelection.map((value, index) => {
				return keyArr.reduce((pre, cur) => {
					value[cur] && (pre[cur] = value[cur]);
					return pre;
				}, {})
			});

			// console.log(result)
			this.axios.post(api, {
				data: result
			}).then(res => {
				this.$message.success('操作成功')
				this.getTable()
			});
		}
	},
	created() {
		if (this.tdWidth.length === 0) {
			this.setTdWidth();
		}
	},
	beforeDestroy() {
		this.$store.commit("Common/setSearchParameter", {});
	}
};