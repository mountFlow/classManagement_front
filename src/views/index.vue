
<template>
  <div id="app">
    
      <el-main style="height:600px;width:1280px;background-repeat: no-repeat;text-align: right; margin-top:10px;margin-left:10px; font-size: 12px ;background-size: cover; background-image: url(http://localhost:8080/brand_case_war_exploded/pic/mainpage.jpg); ">
               
            </el-main>
    
  </div>
</template>

<script>
// import axios from 'axios'
import {
  selectAllTeachersApi,
  addTeacherApi,
  updateTeacherApi,
  deleteByIdApi,
  deleteByIdsApi,
} from "@/utils/api";
export default {
  name: "Home",
  //1.加载完成后
  created() {
    this.selectAllTeachers();
  },

  methods: {
    testAbout() {
      console.log(3333);
    },

    selectAllTeachers() {
      selectAllTeachersApi().then((resp) => {
        this.tableData = resp;
      });
    },

    addTeacher() {
      addTeacherApi(this.teacher).then((resp) => {
        console.log(this.teacher);
        if (resp == "success") {
          //5.添加成功则关闭对话框，重新查询数据,弹出提示添加成功消息框
          this.dialogVisible = false;
          this.selectAllTeachers();
          this.$message({
            message: "恭喜您！添加成功！",
            type: "success",
          });
        } else {
          this.$message.error("添加失败");
        }
      });
    },

    updateTeacher() {
      this.$confirm("确定修改?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        updateTeacherApi(this.teacher).then((resp) => {
          // console.log(resp);
          if (resp == "success") {
            //5.添加成功则关闭对话框，重新查询数据,弹出提示添加成功消息框
            this.dialogVisible = false;
            this.selectAllTeachers();
            this.$message({
              message: "修改成功！",
              type: "success",
            });
          } else {
            this.$message.error("修改失败");
          }
        });
      });
    },
    deleteById(row) {
      this.$confirm("此操作将永久删除这条教师信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        //1.发送ajax请求删除数据
        deleteByIdApi(row.id).then((resp) => {
          if (resp == "success") {
            //5.添加成功则关闭对话框，重新查询数据,弹出提示添加成功消息框
            this.dialogVisible = false;
            this.selectAllTeachers();
            this.$message({
              message: "删除成功",
              type: "success",
            });
          } else {
            this.$message.error("删除失败");
          }
        });
      });
    },
    deleteByIds() {
      // console.log(this.multipleSelection)
      this.$confirm("此操作将永久删除这些教师信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        //1.从多选框回调的一个个对象中遍历取出id
        for (let i = 0; i < this.multipleSelection.length; i++) {
          this.selectedIds[i] = this.multipleSelection[i].id;
        }
        deleteByIdsApi(this.selectedIds).then((resp) => {
          if (resp == "success") {
            //5.添加成功则关闭对话框，重新查询数据,弹出提示添加成功消息框
            this.dialogVisible = false;
            this.selectAllTeachers();
            this.$message({
              message: "删除成功",
              type: "success",
            });
          } else {
            this.$message.error("删除失败");
          }
        });
      });
    },
    //多选框的回调函数
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    //编辑某一行的回调函数
    handleEdit(row) {
      this.teacher = row;
    },
    giveBasicValue() {
      this.teacher.id = 3000;
      this.teacher.name = "";
      this.teacher.sex = "";
      this.teacher.experience = "2001";
      this.teacher.competent = "";
      this.teacher.password = "123456";
      this.teacher.employeeNum = "3000";
    },
  },

  data() {
    var item = {
      id: "452",
      name: "111",
      sex: "11",
      experience: "11",
      competent: "11",
      password: "123456",
      employeeNum: "3001",
    };
    return {
      //表单的可视信息
      dialogVisible: false,
      dialogVisible2: false,
      // 老师信息模型数据
      teacher: {
        id: "",
        name: "",
        sex: "",
        experience: "2001",
        competent: "",
        password: "123456",
        employeeNum: "3000",
      },

      selectedIds: [],
      tableData: Array(20).fill(item),

      optionsForCompetent: [
        {
          value: "讲师",
          label: "讲师",
        },
        {
          value: "副教授",
          label: "副教授",
        },
        {
          value: "教授",
          label: "教授",
        },
      ],
    };
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