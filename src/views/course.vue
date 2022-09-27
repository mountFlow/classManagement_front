
<template>
  <div id="app">
    <!--


       这里开始是弹窗设置


 -->
    <!-- 添加新课程信息的对话框-->
    <el-dialog title="新增课程信息" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="course" label-width="80px">
        <el-form-item label="课程名称">
          <el-input v-model="course.courseName" value="3000"></el-input>
        </el-form-item>
        <el-form-item label="学时">
          <el-input v-model="course.totalHour"></el-input>
        </el-form-item>

        <el-form-item label="课程类型">
          <el-select v-model="course.classType" placeholder="请选择">
            <el-option
              v-for="item in optionsForClassType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="测评模式">
          <el-select v-model="course.evaluationMode" placeholder="请选择">
            <el-option
              v-for="item in optionsForEvaluationMode"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="add"
            style="background-color: #4fac67; border-color: #4fac67"
            >提交</el-button
          >
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!--    编辑课程信息的对话框-->
    <el-dialog
      title="编辑课程信息"
      :visible.sync="dialogVisible2"
      width="30%"
    >
      <el-form ref="form" :model="course" label-width="80px">
        <el-form-item label="课程名称">
          <el-input v-model="course.courseName" value="3000"></el-input>
        </el-form-item>
        <el-form-item label="学时">
          <el-input v-model="course.totalHour"></el-input>
        </el-form-item>

        <el-form-item label="课程类型">
          <el-select v-model="course.classType" placeholder="请选择">
            <el-option
              v-for="item in optionsForClassType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="测评模式">
          <el-select v-model="course.evaluationMode" placeholder="请选择">
            <el-option
              v-for="item in optionsForEvaluationMode"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="update(), (dialogVisible2 = false)"
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

    <!--                        <el-button type="danger" plain @click="deleteByIds">批量删除</el-button>-->
    <div style="margin: 20px; height: 99%">
      <!--                    下面是搜索的内嵌表单-->
      <el-form
        :inline="true"
        :model="courseSearch"
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
        <el-form-item label="课程名称" style="margin-left: 20px">
          <el-input
            v-model="courseSearch.courseName"
            placeholder="课程名称"
            size="small"
            style="width: 110px"
          ></el-input>
        </el-form-item>
        <el-form-item label="学时">
          <el-input
            v-model="courseSearch.totalHour"
            placeholder="学时"
            size="small"
            style="width: 110px"
          ></el-input>
        </el-form-item>
        <el-form-item label="课程类型">
          <el-select
            v-model="courseSearch.classType"
            placeholder="课程类型"
            size="small"
            style="width: 110px"
          >
            <el-option
              v-for="item in optionsForClassType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="测评模式">
          <el-select
            v-model="courseSearch.evaluationMode"
            placeholder="测评模式"
            size="small"
            style="width: 110px"
          >
            <el-option
              v-for="item in optionsForEvaluationMode"
              :key="item.value"
              :label="item.label"
              :value="item.value"
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
            @click="selectAll(),giveBasicValue()"
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
        <el-table-column prop="courseName" align="center" label="课程名称" width="400" sortable>
        </el-table-column>
        <el-table-column prop="totalHour" align="center" label="总学时" width="120" sortable>
        </el-table-column>
        <el-table-column prop="classType" align="center" label="课程类型" sortable> </el-table-column>
        <el-table-column prop="evaluationMode" align="center" label="测评模式" sortable>
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
      <!--    届时elementui的代码粘贴在这里-->
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import {
  selectAllApi,
  addApi,
  updateApi,
  deleteByIdApi,
  deleteByIdsApi,
  selectByConditionApi,
} from "@/utils/courseapi";
export default {
  name: "Home",
  //1.加载完成后
  created() {
    this.selectAll();
  },

  methods: {
    selectAll() {
      selectAllApi().then((resp) => {
        this.tableData = resp;
      });
    },

    add() {
      addApi(this.course).then((resp) => {
        console.log(this.course);
        if (resp == "success") {
          //5.添加成功则关闭对话框，重新查询数据,弹出提示添加成功消息框
          this.dialogVisible = false;
          this.selectAll();
          this.$message({
            message: "恭喜您！添加成功！",
            type: "success",
          });
        } else {
          this.$message.error("添加失败");
        }
      });
    },

    update() {
      this.$confirm("确定修改?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        updateApi(this.course).then((resp) => {
          // console.log(resp);
          if (resp == "success") {
            //5.添加成功则关闭对话框，重新查询数据,弹出提示添加成功消息框
            this.dialogVisible = false;
            this.selectAll();
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
      this.$confirm("此操作将永久删除这条课程信息,请确认已经取消对应老师的授课信息，是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        //1.发送ajax请求删除数据
        deleteByIdApi(row.id).then((resp) => {
          if (resp == "success") {
            //5.添加成功则关闭对话框，重新查询数据,弹出提示添加成功消息框
            this.dialogVisible = false;
            this.selectAll();
            this.$message({
              message: "删除成功",
              type: "success",
            });
          } else {
            this.$message.error("删除失败！请取消对应授课老师的该授课信息");
          }
        });
      });
    },
    deleteByIds() {
      // console.log(this.multipleSelection)
      this.$confirm("此操作将永久删除这些课程信息, 请确认已经取消对应老师的授课信息，是否继续?", "提示", {
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
            this.selectAll();
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
      this.course = row;
    },
    giveBasicValue() {
      this.course.id = "";
      this.course.courseName = "";
      this.course.totalHour = "44";
      this.course.classType = "专业核心";
      this.course.evaluationMode = "考试";
      this.courseSearch.id = "";
      this.courseSearch.courseName = "";
      this.courseSearch.totalHour = "";
      this.courseSearch.classType = "";
      this.courseSearch.evaluationMode = "";
    },
    onSearch() {
      console.log(this.courseSearch);
      selectByConditionApi(this.courseSearch).then((resp) => {
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
      course: {
        id: "",
        courseName: "",
        totalHour: "44",
        classType: "专业核心",
        evaluationMode: "考试",
      },
      courseSearch: {
        id: "",
        courseName: "",
        totalHour: "",
        classType: "",
        evaluationMode: "",
      },

      selectedIds: [],
      tableData: Array(20).fill(item),

      optionsForClassType: [
        {
          value: "专业核心",
          label: "专业核心",
        },
        {
          value: "专业选修",
          label: "专业选修",
        },
        {
          value: "实践教学",
          label: "实践教学",
        },
         {
          value: "通识教育",
          label: "通识教育",
        },
      ],

      optionsForEvaluationMode: [
        {
          value: "考试",
          label: "考试",
        },
        {
          value: "考查",
          label: "考查",
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