
<template>
  <div id="app">
    <!--


       这里开始是弹窗设置


 -->
    <!-- 添加新老师信息的对话框-->
    <el-dialog title="新增班级信息" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="oclass" label-width="80px">
        <el-form-item label="年级">
          <el-input v-model="oclass.grade" value="3000"></el-input>
        </el-form-item>
        <el-form-item label="班级名称">
          <el-input v-model="oclass.className"></el-input>
        </el-form-item>
        <el-form-item label="学生总数">
          <el-input v-model="oclass.totalStudents"></el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input v-model="oclass.major"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="addClass"
            style="background-color: #4fac67; border-color: #4fac67"
            >提交</el-button
          >
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!--    编辑老师信息的对话框-->
    <el-dialog title="编辑班级信息" :visible.sync="dialogVisible2" width="30%">
      <el-form ref="form" :model="oclass" label-width="80px">
        <el-form-item label="年级">
          <el-input v-model="oclass.grade" value="3000"></el-input>
        </el-form-item>
        <el-form-item label="班级名称">
          <el-input v-model="oclass.className"></el-input>
        </el-form-item>
        <el-form-item label="学生总数">
          <el-input v-model="oclass.totalStudents"></el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input v-model="oclass.major"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="updateClass(), (dialogVisible2 = false)"
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
    <!--    主页面信息-->
    <div style="margin:20px;height:99%">
      <el-form
        :inline="true"
        :model="sclass"
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
        <el-form-item label="年级" style="margin-left: 20px">
          <el-input
            v-model="sclass.grade"
            placeholder="年级"
            size="small"
            style="width: 110px"
          ></el-input>
        </el-form-item>
        <el-form-item label="班级名称">
          <el-input
            v-model="sclass.className"
            placeholder="班级名称"
            size="small"
            style="width: 110px"
          ></el-input>
        </el-form-item>
        <el-form-item label="学生总数">
          <el-input
            v-model="sclass.totalStudents"
            placeholder="学生总数"
            size="small"
            style="width: 100px"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input
            v-model="sclass.major"
            placeholder="专业"
            size="small"
            style="width: 110px"
          >
          </el-input>
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
            @click="selectAllClasses(),giveBasicValue()"
            icon="el-icon-refresh"
            size="small"
            style="background-color: #6cb48f; border-color: #6cb48f"
          ></el-button>
        </el-form-item>
        <!-- </span> -->
      </el-form>

      <!-- 下面开始是tabledata内容 -->

      <el-table
        :data="tableData"
        @selection-change="handleSelectionChange"
        stripe
        height="540"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column align="center" prop="grade" label="年级" width="120" sortable>
        </el-table-column>
        <el-table-column align="center" prop="className" label="班级名称" width="300" sortable>
        </el-table-column>
        <el-table-column align="center" prop="major" label="专业" width="300" sortable>
        </el-table-column>
        <el-table-column align="center" prop="totalStudents" label="学生总数" width="100" sortable>
        </el-table-column>
        <el-table-column align="center" label="操作" width="width">
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
  selectAllClassesApi,
  addClassApi,
  updateClassApi,
  deleteByIdApi,
  deleteByIdsApi,
  selectClassesByConditionApi,
} from "@/utils/classapi";
export default {
  name: "Home",
  //1.加载完成后
  created() {
    this.selectAllClasses();
  },

  methods: {
    selectAllClasses() {
      selectAllClassesApi().then((resp) => {
        this.tableData = resp;
      });
    },

    addClass() {
      addClassApi(this.oclass).then((resp) => {
        console.log(this.oclass);
        if (resp == "success") {
          //5.添加成功则关闭对话框，重新查询数据,弹出提示添加成功消息框
          this.dialogVisible = false;
          this.selectAllClasses();
          this.$message({
            message: "恭喜您！添加成功！",
            type: "success",
          });
        } else {
          this.$message.error("添加失败");
        }
      });
    },

    updateClass() {
      this.$confirm("确定修改?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        updateClassApi(this.oclass).then((resp) => {
          // console.log(resp);
          if (resp == "success") {
            //5.添加成功则关闭对话框，重新查询数据,弹出提示添加成功消息框
            this.dialogVisible = false;
            this.selectAllClasses();
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
      this.$confirm("此操作将永久删除这个班级信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        //1.发送ajax请求删除数据
        deleteByIdApi(row.id).then((resp) => {
          if (resp == "success") {
            //5.添加成功则关闭对话框，重新查询数据,弹出提示添加成功消息框
            this.dialogVisible = false;
            this.selectAllClasses();
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
      this.$confirm("此操作将永久删除这个班级信息, 是否继续?", "提示", {
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
            this.selectAllClasses();
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
      this.oclass = row;
    },
    giveBasicValue() {
      this.oclass.id = "";
      this.oclass.grade = "2019";
      this.oclass.className = "";
      this.oclass.totalStudents = "30";
      this.oclass.major = "计算机科学与技术";
      this.sclass.grade = "";
      this.sclass.className = "";
      this.sclass.totalStudents = "";
      this.sclass.major = "";
    },
    onSearch() {
      console.log(this.sclass);
      selectClassesByConditionApi(this.sclass).then((resp) => {
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
      oclass: {
        id: "",
        grade: "2019",
        className: "",
        totalStudents: "30",
        major: "计算机科学与技术",
      },
      sclass: {
        id: "",
        grade: "",
        className: "",
        totalStudents: "",
        major: "",
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