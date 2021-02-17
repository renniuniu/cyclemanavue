<template>
  <div>
    <el-upload
      class="w-50"
      multiple
      action=""
      ref="upload"
      accept=".jpg,.jpeg"
      :before-upload="beforeFileUpload"
      :http-request="uploadFile"
      :file-list="fileList"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button
        style="margin-left: 10px;"
        size="small"
        type="success"
        @click="submitUpload"
        >上传到服务器</el-button
      >
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/jpeg文件，且不超过2Mb
      </div>
    </el-upload>
    <el-table :data="data" border :height="360">
      <el-table-column label="序号" :width="60">
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <template v-for="(item, index) in header">
        <el-table-column
          :index="index"
          :key="'level_one' + index"
          :prop="item.key"
          :label="item.label"
          :width="tdWidth[index]"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
      </template>
      <el-table-column fixed="right" label="操作" :width="150">
        <template slot-scope="scope">
          <!-- 修改,删除 -->
          <el-button
            type="text"
            size="small"
            class="option-button"
            @click="download(scope.row)"
            >下载</el-button
          >
          <el-button
            type="text"
            size="small"
            class="option-button"
            @click="destroy(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import $config from "@/common/config.js";
export default {
  props: {
    viewUrl: {
      type: String,
      default: ""
    },
    uploadUrl: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      fileList: [],
      tdWidth: ["", 150, 180],
      header: [
        {
          label: "文件名字",
          key: "fileName"
        },
        {
          label: "上传人",
          key: "uploader"
        },
        {
          label: "上传时间",
          key: "uploadTime"
        }
      ]
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    download(val) {},
    destroy(val) {
      this.$message.error("删除");
    },
    beforeFileUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传文件不能大于2M!");
      }
      return isLt2M;
    },
    uploadFile(param) {
      let token = window.localStorage.getItem("token");
      var fileObj = param.file;
      var form = new FormData();
      let data = {
        customerCode: this.StoreCustomerCode,
        belongsCustomer: this.StoreCustomerCode,
        uploadName: this.StoreUserName,
        fileType: this.formValue_upload.fileType
      };
      form.append("files", fileObj);
      form.append("rr", JSON.stringify(data));
      this.axios({
        method: "post",
        url: $config.baseURL + this.uploadUrl,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer" + token
        },
        data: form
      }).then(res => {
        this.$refs.upload.clearFiles();
        this.$message.success(res.data.msg);
        this.getTable();
      });
    },
    // 获取表格数据
    getTable() {
      this.axios
        .post(this.api, {
          viewUrl: this.viewUrl
        })
        .then(res => {
          // 计算序号
          res.data.forEach((item, index) => {
            let pageIndex = index + 1;
            item["index"] = pageIndex;
          });
          // this.data = res.data;
        });
    }
  }
};
</script>
