<template>
  <div class="login">
    <main class="m-auto d-flex bg-white">
      <div class="left d-flex justify-content-center align-items-center">
        <img src="@/assets/images/login/login-card.png" />
      </div>
      <div class="right">
        <header class="f28 d-flex align-items-center pl-2">
          <img src="@/assets/images/login/logo.png" />
          <span class="ml-2">零件调配系统</span>
        </header>
        <div>
          <el-form ref="ruleForm" :rules="rules" :model="form">
            <el-form-item prop="username" class="username">
              <el-input
                v-model="form.username"
                size="large"
                placeholder="请输入用户名"
                prefix-icon="el-icon-user f16"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="password" class="password">
              <el-input
                v-model="form.password"
                size="large"
                type="password"
                placeholder="请输入密码"
                prefix-icon="el-icon-lock f16"
              >
              </el-input>
            </el-form-item>
            <div
              class="mt-5 d-flex justify-content-between align-items-center px-2"
            >
              <el-checkbox v-model="checked">自动登录</el-checkbox>
              <div class="text-blue">忘记密码</div>
            </div>
            <el-form-item class="mt-4">
              <el-button
                type="primary"
                size="large"
                class="w-100"
                @click="submit"
              >
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submit() {
      this.$refs.ruleForm.validate(e => {
        if (!e) return;
        //      // 提交表单
        //      this.axios
        //        .post(
        //          "/oauth/token",
        //          {
        //            grant_type: "password",
        //            ...this.form
        //          },
        //          {
        //            Authorization: false
        //          }
        //        )
        //        .then(res => {
        //          this.$store.commit("User/login", res.result);
        //          this.$message("登录成功");
        //          this.$router.push({ name: "layout" });
        //        });

        this.$message("登录成功");
        this.$router.push({ name: "layout" });
      });
    }
  },
  created() {}
};
</script>

<style lang="less" scoped>
.login {
  background-image: linear-gradient(to right, #0a3685, #2370ae);
  height: 100vh;
  width: 100%;
  padding-top: 200px;
  background-size: cover;
  main {
    width: 1050px;
    height: 580px;
    .left {
      width: 480px;
      background-image: linear-gradient(to top, #083585, #1f5dc6);
      img {
        width: 350px;
      }
    }
    .right {
      width: 320px;
      margin: 90px auto;
      header {
        img {
          width: 52px;
          height: 52px;
        }
      }
      .username {
        margin-top: 60px;
      }
      .password {
        margin-top: 30px;
      }
    }
  }
}
</style>
