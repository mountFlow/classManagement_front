
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
        <span style="color: white; font-size: large">欢迎您！ 教务员</span>
      </el-header>
      <el-container style="position: flex">
        <el-aside width="200px" style="background-color: #dfebe2">
          <el-menu router>
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-s-home"></i>教室与排课管理</template
              >
              <el-menu-item-group>
                <el-menu-item index="/building3">第三教学楼</el-menu-item>
                <el-menu-item index="/building4">第四教学楼</el-menu-item>
                <el-menu-item index="/classroomArrangement"
                  >课室使用</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"
                ><i class="el-icon-user"></i>教职工与班级管理</template
              >
              <el-menu-item-group>
                <el-menu-item index="/teacher">教职工管理</el-menu-item>
                <el-menu-item index="/class">班级管理</el-menu-item>
                <el-menu-item index="/student">学生管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/course"
              ><i class="el-icon-s-management"></i>课程管理</el-menu-item
            >
            <el-menu-item index="/courseteacher"
              ><i class="el-icon-s-custom"></i>授课管理</el-menu-item
            >
            <el-badge :value="2" class="item">
            <el-menu-item index="/studentAsk"
              ><i class="el-icon-message"></i>教室申请管理</el-menu-item
            > </el-badge>
          </el-menu>
         
        </el-aside>
        <div style="width: 100%">
          <slot></slot>
        </div>
      </el-container>
    </el-container>
    <!--    届时elementui的代码粘贴在这里-->
  </div>
</template>

<script>
import {
  selectTotalApi,
  updateApi,
  addApi,
  deleteByIdApi,
  selectByConditionApi,
} from "@/utils/studentAskapi";
// import axios from 'axios'
export default {
  name: "navMenu",
  //1.加载完成后
  created() {
    this.selectTotal();
  },

  data() {
    value:"";
  },
  methods: {
     selectTotal(){
       selectTotalApi().then((resp) => {
         console.log(resp);
      this.value=resp;
    });
     }
  },
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
</style>