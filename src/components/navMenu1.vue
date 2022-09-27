
<template>
  <div id="app">
    <!--    主页面信息-->
    <el-container style="height: 98%; border: 1px solid #eee">
      <!--        background-image: linear-gradient(100deg, #4e7c56, #4fac67);-->
      <el-header
        style="
          text-align: right;
          height: 100px;
          font-size: 12px;
          background-size: cover;
          background-image: url(http://localhost:8080/brand_case_war_exploded/pic/header2.png);
        "
      >
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span style="color: white; font-size: large">欢迎您！ 陈明同学</span>
      </el-header>
      <el-container style="position: flex">
        <el-aside width="200px" style="background-color: #dfebe2">
          <el-menu router>
            

            <el-menu-item index="/classroomAvailable"
              ><i class="el-icon-search"></i>查看可用课室</el-menu-item
            >
            <el-badge :value="2" class="item">
            <el-menu-item index="/askManagement"
              ><i class="el-icon-s-management"></i>请求管理</el-menu-item
            ></el-badge>
          </el-menu>
        </el-aside>
        <!-- <el-main
          style="
            background-repeat: no-repeat;
            text-align: right;
            margin-top: 10px;
            margin-left: 10px;
            font-size: 12px;
            background-size: cover;
            background-image: url(http://localhost:8080/brand_case_war_exploded/pic/mainpage.jpg);
          "
        >
        </el-main> -->
        <div style="width: 100%">
          <slot></slot>
        </div>
      </el-container>
    </el-container>
    <!--    届时elementui的代码粘贴在这里-->
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: "navMenu1",
  //1.加载完成后
  created() {},

  data() {},
};
</script>

<style  scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>