<template>
  <div
    id="background"
    style="
      text-align: center;
      padding: 0%;
      width: 100%;
      height: 100%;
      font-size: 12px;
      background-size: cover;
      background-image: url(http://localhost:8080/brand_case_war_exploded/pic/login.jpg);
    "
  >
    <el-row :gutter="0">
      <el-col :span="7" :offset="14">
        <el-card
          :body-style="{ padding: '0px' }"
          style="border-radius: 20px; margin-top: 30%; padding: 10px"
        >
          <div class="head">欢迎登录</div>
          <el-form label-position="right" label-width="15%">
            <el-form-item label="学号:" style="margin-top: 40px">
              <el-input
                v-model="account.id"
                placeholder="30xx/20xxx"
                suffix-icon="el-icon-user"
              />
            </el-form-item>
            <el-form-item label="密码:" style="margin-top: 40px">
              <el-input
                v-model="account.password"
                placeholder="123456"
                suffix-icon="el-icon-lock"
              />
            </el-form-item>
            <el-form-item
              style="margin-top: 10px; text-align: right; margin-right: 40px"
            >
              <el-button
                type="primary"
                @click="login()"
                style="
                  background-color: #4fac67;
                  border-color: #4fac67;
                  margin-top: 40px;
                "
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>

  <!-- <div>

    <el-form label-position="right" label-width="80">
      <el-form-item label="学号">
          <el-input v-model="teacher" placeholder="333"/>
      </el-form-item>
    </el-form>

</div> -->
</template>
<script>
export default {
  name: "login",
  mounted() {
    
  },
  //1.加载完成后
  created() {
    console.log(3333);
  },


  activated() {
      location.reload();
      console.log(1212)
  },
  methods: {
    login() {
      
      if (this.account.id == "201925310301" && this.account.password == "123456") {
        this.$message({
          message: "登陆成功，欢迎您！ " + "陈明同学",
          type: "success",
        });
        this.$router.push("/studentIndex");
      }
      else if (this.account.id == "3001" && this.account.password == "123456") {
        this.$message({
          message: "登录成功，欢迎您！ " + "教务员",
          type: "success",
        });
        this.$router.push("/index");
      }
      else if (this.account.id == "" || this.account.password == "") {
        this.$message({
          message: "请输入账号或密码",
          type: "error",
        });
      }else{
        this.$message({
          message: "登录失败！请检查账号或密码",
          type: "error",
        });
      }
    },
  },

  data() {
    return {
      account: {
        id: "201925310301/3001",
        password: "123456",
      },
    };
  },
};
</script>


<style>
.transparent {
  border-radius: 4px;
  min-height: 36px;
  background-color: calc();
}
.head {
  font-size: 30px;
  font-family: "PingFang SC";
  margin: 20px;
  text-align: left;
}
</style>
