
<template>
  <div id="app">
    <!--


       这里开始是弹窗设置


 -->
    <!-- 添加新学生信息的对话框-->
    <el-dialog title="新增学生信息" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="studentOrginal" label-width="80px">
        <el-form-item label="学号">
          <el-input v-model="studentOrginal.studentNum" value="3000"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="studentOrginal.name"></el-input>
        </el-form-item>

        <el-form-item label="年级">
          <el-input v-model="studentOrginal.grade"></el-input>
        </el-form-item>

        <el-form-item label="*班级">
          <el-select
            v-model="studentOrginal.classId"
            filterable
            placeholder="必选项"
          >
            <el-option
              v-for="item in classNames"
              :key="item[0]"
              :label="item[1]"
              :value="item[0]"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="密码">
          <el-input v-model="studentOrginal.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="addStudent"
            style="background-color: #4fac67; border-color: #4fac67"
            >提交</el-button
          >
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!--    编辑学生信息的对话框-->
    <el-dialog title="编辑学生信息" :visible.sync="dialogVisible2" width="30%">
      <el-form ref="form" :model="studentOrginal" label-width="80px">
        <el-form-item label="学号">
          <el-input v-model="studentOrginal.studentNum" value="3000"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="studentOrginal.name"></el-input>
        </el-form-item>

        <el-form-item label="年级">
          <el-input v-model="studentOrginal.grade"></el-input>
        </el-form-item>

        <el-form-item label="班级">
          <el-select
            v-model="studentOrginal.classId"
            filterable
            placeholder="请选择"
          >
            <el-option
              v-for="item in classNames"
              :key="item[0]"
              :label="item[1]"
              :value="item[0]"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="密码">
          <el-input v-model="studentOrginal.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="updateStudent(), (dialogVisible2 = false)"
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
        :model="studentOrginalSearch"
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
        <el-form-item label="学号" style="margin-left: 20px">
          <el-input
            v-model="studentOrginalSearch.studentNum"
            placeholder="学号"
            size="small"
            style="width: 110px"
          ></el-input>
        </el-form-item>
        <el-form-item label="年级">
          <el-input
            v-model="studentOrginalSearch.grade"
            placeholder="年级"
            size="small"
            style="width: 110px"
          ></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input
            v-model="studentOrginalSearch.name"
            placeholder="姓名"
            size="small"
            style="width: 110px"
          ></el-input>
        </el-form-item>
        <el-form-item label="班别">
          <el-select
            v-model="studentOrginalSearch.classId"
            filterable
            placeholder="班别"
            size="small"
          >
            <el-option
              v-for="item in classNames"
              :key="item[0]"
              :label="item[1]"
              :value="item[0]"
            >
            </el-option>
          </el-select>
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
            @click="selectAllStudents(),giveBasicValue()"
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
        <el-table-column prop="studentNum" label="学号" width="160" sortable>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120" sortable>
        </el-table-column>
        <el-table-column prop="grade" label="年级" width="100" sortable>
        </el-table-column>
        <el-table-column prop="major" label="专业" sortable> </el-table-column>
        <el-table-column prop="className" label="班级名称" sortable>
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
  selectAllStudentsApi,
  addStudentApi,
  updateStudentApi,
  deleteByIdApi,
  deleteByIdsApi,
  selectStudentsByConditionApi,
} from "@/utils/studentapi";
import {
  selectAllClassesApi,
  addClassApi,
  updateClassApi,
  selectClassesByConditionApi,
} from "@/utils/classapi";
export default {
  name: "Home",
  //1.加载完成后
  created() {
    this.selectAllStudents();
    selectAllClassesApi().then((resp) => {
      //console.log(resp);
      //取出班级名称和id，封装于数组中
      for (let i = 0; i < resp.length; i++) {
        var classObj = [resp[i].id, resp[i].className];
        this.classNames.push(classObj);
      }
      console.log(this.classNames);
    });
  },

  methods: {
    selectAllStudents() {
      selectAllStudentsApi().then((resp) => {
        
        this.tableData = resp;
      });
    },

    addStudent() {
      //查询所有班级的信息

      addStudentApi(this.studentOrginal).then((resp) => {
        console.log(this.studentOrginal);
        if (resp == "success") {
          //5.添加成功则关闭对话框，重新查询数据,弹出提示添加成功消息框
          this.dialogVisible = false;
          this.selectAllStudents();
          this.$message({
            message: "恭喜您！添加成功！",
            type: "success",
          });
        } else {
          this.$message.error("添加失败!您需要指定学生的班级");
        }
      });
    },

    updateStudent() {
      this.$confirm("确定修改?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        updateStudentApi(this.studentOrginal).then((resp) => {
          // console.log(resp);
          if (resp == "success") {
            //5.添加成功则关闭对话框，重新查询数据,弹出提示添加成功消息框
            this.dialogVisible = false;
            this.selectAllStudents();
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
      this.$confirm("此操作将永久删除这条学生信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        //1.发送ajax请求删除数据
        deleteByIdApi(row.id).then((resp) => {
          if (resp == "success") {
            //5.添加成功则关闭对话框，重新查询数据,弹出提示添加成功消息框
            this.dialogVisible = false;
            this.selectAllStudents();
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
      this.$confirm("此操作将永久删除这些学生信息, 是否继续?", "提示", {
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
            this.selectAllStudents();
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

    //编辑某一行的回调函数  取出的是使用中文的更改student,比对寻找原来的使用classid的student
    handleEdit(row) {
      this.student = row;
      this.studentOrginal.id = this.student.id;
      this.studentOrginal.name = this.student.name;
      this.studentOrginal.grade = this.student.grade;
      this.studentOrginal.studentNum = this.student.studentNum;
      this.studentOrginal.password = this.student.password;
      for (let i; i < this.classNames.length; i++) {
        if (this.classNames[1] == this.student.className[i]) {
          this.studentOrginal.classId = this.classNames[0];
        }
      }
    },
    giveBasicValue() {
      this.studentOrginal.classId = "";
      this.studentOrginal.name = "";
      this.studentOrginal.grade = "2019";
      this.studentOrginal.password = "2001";
      this.studentOrginal.studentNum = "201925310000";
      this.studentOrginalSearch.classId = "";
      this.studentOrginalSearch.name = "";
      this.studentOrginalSearch.grade = "";
      this.studentOrginalSearch.password = "";
      this.studentOrginalSearch.studentNum = "";
    },
    onSearch() {
      console.log(this.studentOrginalSearch);
      selectStudentsByConditionApi(this.studentOrginalSearch).then((resp) => {
        console.log(resp);

        console.log(this.resp);
        this.tableData = resp;
        console.log(this.tableData);
        //传回来的是student原型,改成带中文班级的新student
      });
    },
  },

  data() {
    return {
      //表单的可视信息
      dialogVisible: false,
      dialogVisible2: false,
      // 老师信息模型数据

      student: {
        id: "",
        grade: "",
        name: "",
        className: "",
        major: "",
        password: "",
        studentNum: "",
      },
      classNameTemp: "", //单独的全局班级名称 用以建立学生和班级的关联
      classNames: [],

      studentOrginal: {
        id: "",
        grade: "2019",
        name: "",
        classId: "",
        password: "123456",
        studentNum: "201925310300",
      },
      studentOrginalSearch: {
        id: "",
        grade: "",
        name: "",
        classId: "",
        password: "",
        studentNum: "",
      },
      tableData: [],

      selectedIds: [],
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