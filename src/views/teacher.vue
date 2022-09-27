
<template>
  <div id="app">
    <!--


       这里开始是弹窗设置


 -->
    <!-- 添加新老师信息的对话框-->
    <el-dialog title="新增教职工信息" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="teacher" label-width="80px">
        <el-form-item label="工号">
          <el-input v-model="teacher.employeeNum" value="3000"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="teacher.name"></el-input>
        </el-form-item>

        <el-form-item label="性别">
          <el-radio v-model="teacher.sex" label="男">男</el-radio>
          <el-radio v-model="teacher.sex" label="女">女</el-radio>
        </el-form-item>

        <el-form-item label="职称">
          <el-select v-model="teacher.competent" placeholder="请选择">
            <el-option
              v-for="item in optionsForCompetent"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="任职年份">
          <el-input v-model="teacher.experience"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input type="text" v-model="teacher.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="addTeacher"
            style="background-color: #4fac67; border-color: #4fac67"
            >提交</el-button
          >
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!--    编辑老师信息的对话框-->
    <el-dialog
      title="编辑教职工信息"
      :visible.sync="dialogVisible2"
      width="30%"
    >
      <el-form ref="form" :model="teacher" label-width="80px">
        <el-form-item label="工号">
          <el-input v-model="teacher.employeeNum"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="teacher.name"></el-input>
        </el-form-item>

        <el-form-item label="性别">
          <el-radio v-model="teacher.sex" label="男">男</el-radio>
          <el-radio v-model="teacher.sex" label="女">女</el-radio>
        </el-form-item>

        <el-form-item label="职称">
          <el-select v-model="teacher.competent" placeholder="请选择">
            <el-option
              v-for="item in optionsForCompetent"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="任职年份">
          <el-input v-model="teacher.experience"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input type="text" v-model="teacher.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="updateTeacher(), (dialogVisible2 = false)"
            style="background-color: #4fac67; border-color: #4fac67"
            >提交</el-button
          >
          <el-button @click="dialogVisible2 = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!--






       弹窗设置结束






 -->
    <div style="margin: 20px; height: 99%">
      <!--                    下面是搜索的内嵌表单-->
      <el-form
        :inline="true"
        :model="steacher"
        class="demo-form-inline"
        label-width="15"
        style="margin-bottom: -20px"
      >
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="small"
          @click="(dialogVisible = true), giveBasicValue()"
          style="background-color: #6cb48f; border-color: #6cb48f"
        ></el-button>
        <el-button
          type="primary"
          icon="el-icon-delete"
          size="small"
          @click="deleteByIds()"
          style="background-color: #f56c6c; border-color: #f56c6c"
        ></el-button>
        <!-- <span style="text-align:right"> -->
        <el-form-item label="工号" style="margin-left: 20px">
          <el-input
            v-model="steacher.employeeNum"
            placeholder="工号"
            size="small"
            style="width: 110px"
          ></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input
            v-model="steacher.name"
            placeholder="教师姓名"
            size="small"
            style="width: 110px"
          ></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select
            v-model="steacher.sex"
            placeholder="性别"
            size="small"
            style="width: 100px"
          >
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职称">
          <el-select
            v-model="steacher.competent"
            placeholder="职称"
            size="small"
            style="width: 110px"
          >
            <el-option label="讲师" value="讲师"></el-option>
            <el-option label="副教授" value="副教授"></el-option>
            <el-option label="教授" value="教授"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任职年份">
          <el-input
            v-model="steacher.experience"
            placeholder="任职年份"
            size="small"
            style="width: 110px"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSearch()"
            icon="el-icon-search"
            size="small"
            style="background-color: #6cb48f; border-color: #6cb48f"
          ></el-button>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="selectAllTeachers(),giveBasicValue()"
            icon="el-icon-refresh"
            size="small"
            style="background-color: #6cb48f; border-color: #6cb48f"
          ></el-button>
        </el-form-item>
        <!-- </span> -->
      </el-form>

      <!-- 
下面开始是tabledata内容 -->

      <el-table
        :data="tableData"
        @selection-change="handleSelectionChange"
        stripe
        height="540"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="employeeNum" label="工号" width="80" sortable>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120" sortable>
        </el-table-column>
        <el-table-column prop="sex" label="性别" sortable> </el-table-column>
        <el-table-column prop="competent" label="职称" sortable>
        </el-table-column>
        <el-table-column prop="experience" label="任职年份" sortable>
        </el-table-column>
        <el-table-column prop="password" label="密码" sortable>
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button
              type="success"
              size="small"
              style="background-color: #94d595; border-color: #94d595"
              @click="handleEdit(scope.row), (dialogVisible2 = true)"
              >修改</el-button
            >
            <el-button type="danger" size="small" @click="deleteById(scope.row)"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--    届时elementui的代码粘贴在这里-->
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
  selectTeachersByConditionApi,
} from "@/utils/api";
export default {
  name: "Home",
  //1.加载完成后
  created() {
    this.selectAllTeachers();
  },

  methods: {
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
      this.teacher.id = "";
      this.teacher.name = "";
      this.teacher.sex = "";
      this.teacher.experience = "2001";
      this.teacher.competent = "";
      this.teacher.password = "123456";
      this.teacher.employeeNum = "3000";
      this.steacher.name = "";
      this.steacher.sex = "";
      this.steacher.experience = "";
      this.steacher.competent = "";
      this.steacher.password = "";
      this.steacher.employeeNum = "";
    },
    onSearch() {
      console.log(this.steacher);
      selectTeachersByConditionApi(this.steacher).then((resp) => {
        console.log(resp);
        this.tableData = resp;
      });
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
      steacher: {
        id: "",
        name: "",
        sex: "",
        experience: "",
        competent: "",
        password: "",
        employeeNum: "",
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