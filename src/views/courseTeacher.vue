
<template>
  <div id="app">
    <!--


       这里开始是弹窗设置


 -->
    <!-- 添加授课信息的对话框-->
    <el-dialog title="新增授课信息" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="courseTeacherId" label-width="80px">
        <el-form-item label="教师名称">
          <el-select
            v-model="courseTeacherId.teacherId"
            filterable
            placeholder="必选项"
          >
            <el-option
              v-for="item in teacherNames"
              :key="item[0]"
              :label="item[1]"
              :value="item[0]"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="教授课程">
          <el-select
            v-model="courseTeacherId.courseId"
            filterable
            placeholder="必选项"
          >
            <el-option
              v-for="item in courseNames"
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
            @click="add()"
            style="background-color: #4fac67; border-color: #4fac67"
            >提交</el-button
          >
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!--    编辑课程信息的对话框-->
    <el-dialog title="编辑授课信息" :visible.sync="dialogVisible2" width="30%">
      <el-form ref="form" :model="courseTeacherId" label-width="80px">
        <el-form-item label="教师名称">
          <el-select
            v-model="courseTeacherId.teacherId"
            filterable
            placeholder="必选项"
          >
            <el-option
              v-for="item in teacherNames"
              :key="item[0]"
              :label="item[1]"
              :value="item[0]"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="教授课程">
          <el-select
            v-model="courseTeacherId.courseId"
            filterable
            placeholder="必选项"
          >
            <el-option
              v-for="item in courseNames"
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
            @click="update(), (dialogVisible2 = false)"
            style="background-color: #4fac67; border-color: #4fac67"
            >提交</el-button
          >
          <el-button @click="dialogVisible2 = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
     <!-- 添加班级信息的对话框-->
    <el-dialog title="新增该课程班级" :visible.sync="addClassVisible" width="30%">
      <el-form ref="form" :model="courseClassSingle" label-width="80px">
        <el-form-item label="班级名称">
          <el-select
            v-model="courseClassSingle.classId"
            filterable
            placeholder="必选项"
          >
            <el-option
              v-for="item in classes"
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
           @click="addClass(),addClassVisible = ture"
            style="background-color: #4fac67; border-color: #4fac67"
            >提交</el-button
          >
          <el-button @click="addClassVisible = false">取消</el-button>
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
        :model="courseTeacherSearch"
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
        <el-form-item label="教师名称" style="margin-left: 20px">
          <el-select
            v-model="courseTeacherSearch.teacherId"
            filterable
            placeholder="教师名称"
            size="small"
          >
            <el-option
              v-for="item in teacherNames"
              :key="item[0]"
              :label="item[1]"
              :value="item[0]"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="课程名称">
          <el-select
            v-model="courseTeacherSearch.courseId"
            filterable
            placeholder="课程名称"
            size="small"
          >
            <el-option
              v-for="item in courseNames"
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
            @click="selectAll(), giveBasicValue()"
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
        <el-table-column
          prop="teacherId"
          align="center"
          label="教师名称"
          width="220"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="courseId"
          align="center"
          label="教授课程"
          width="250"
          sortable
        >
        </el-table-column >
        <el-table-column align="center" width="400" label="教授班级">
          <template slot-scope="scope">
            <el-tag
              size="medium"
              v-for="tag in tags[scope.$index]"
              :key="tag.name"
              closable
              :type="tag.type"
              style="margin:10px"
            >
              {{ tag.name }}
            </el-tag>
            <el-button
              
              style="margin:10px"
              class="button-new-tag"
              size="small"
              @click="addClassVisible=true,handleEditCourseClass(scope.row)"
              >+ 添加班级</el-button
            >
          </template>
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
} from "@/utils/courseTeacherapi";
import { selectAllTeachersApi } from "@/utils/teacherapi";
import { selectAllApi as selectAllCoursesApi } from "@/utils/courseapi";
import {
  selectAllApi as selectAllCourseClassApi,
  addApi as addCourseClassApi,
  deleteByIdApi as deleteCourseClassByIdApi,
} from "@/utils/courseClassapi";
import { selectAllClassesApi } from "@/utils/classapi";
export default {
  name: "Home",
  //1.加载完成后
  created() {
    //先做初始化，取出老师和课程的id与名称键值对，方便后面做映射
    selectAllTeachersApi().then((resp) => {
      //console.log(resp);
      //取出老师名称和id，封装于数组中
      for (let i = 0; i < resp.length; i++) {
        var teacherObj = [resp[i].id, resp[i].name];
        this.teacherNames.push(teacherObj);
      }
      console.log(this.teacherNames);
    });
    selectAllCoursesApi().then((resp) => {
      //console.log(resp);
      //取出班级名称和id，封装于数组中
      for (let i = 0; i < resp.length; i++) {
        var CourseObj = [resp[i].id, resp[i].courseName];
        this.courseNames.push(CourseObj);
      }
      console.log(this.courseNames);
    });
    //获得课程和班级的键值对，封装数组中
    selectAllCourseClassApi().then((resp) => {
      for (let i = 0; i < resp.length; i++) {
        var courseClassObj = [resp[i].courseTeacherId, resp[i].classId];
        this.courseClass.push(courseClassObj);
      }
      console.log("courseClass:");
      console.log(this.courseClass);
    });
    //取出班级的名字，待会给标签赋值
    selectAllClassesApi().then((resp) => {
      for (let i = 0; i < resp.length; i++) {
        var ClassObj = [resp[i].id, resp[i].className];
        this.classes.push(ClassObj);
      }
      console.log("classes:");
      console.log(this.classes);
    });
    this.selectAll();
  },

  methods: {
    selectAll() {
      //遍历resp，将取到的id转化为名称
      selectAllApi().then((resp) => {
        this.indexCount = resp.length;
        this.courseTeachers = resp;
        //将courseclass中的classid替换为classname
        for (let i = 0; i < this.classes.length; i++) {
          for (let j = 0; j < this.courseClass.length; j++) {
            // console.log("two part");
            //  console.log(this.classes[i]);
            //  console.log(this.courseClass[j][1]);

            if (this.classes[i][0] == this.courseClass[j][1]) {
              // console.log("-------------");
              // console.log(this.classes[1]);
              this.courseClass[j][1] = this.classes[i][1];
            }
          }
        }
        console.log("this.courseClass");
        console.log(this.courseClass);
        //外循环
       // this.tags.push({});
        for (let i = 0; i < this.courseTeachers.length; i++) {
          //内循环遍历课程班级数组的第一列：课程，如果课程的id等于
          let tag = []; //生成单个标签，然后插入数组
          
          for (let j = 0; j < this.courseClass.length; j++) {
            if (this.courseTeachers[i].id == this.courseClass[j][0]) {
              console.log("---------------------");
               console.log(this.courseTeachers[i].id);
             console.log(this.courseClass[j][0]);
              var tagObj = { name: this.courseClass[j][1], type: "success" };
              console.log(this.tags[i]);
              tag.push(tagObj);
            }
          }
          this.tags.push(tag);
        }
        // for (let i = 0; i < this.courseTeachers.length; i++) {
        //   //内循环遍历课程班级数组的第一列：课程，如果课程的id等于
        //   let tag = []; //生成单个标签，然后插入数组
          
        //   for (let j = 0; j < this.courseClass.length; j++) {
        //     if (this.courseTeachers[i].courseId == this.courseClass[j][0]) {
        //       console.log("---------------------");
        //        console.log(this.courseTeachers[i].courseId);
        //      console.log(this.courseClass[j][0]);
        //       var tagObj = { name: this.courseClass[j][1], type: "success" };
        //       console.log(this.tags[i]);
        //       tag.push(tagObj);
        //     }
        //   }
        //   this.tags.push(tag);
        // }
         console.log("tags:");
         console.log(this.tags);

        console.log(this.courseTeachers);
        console.log("count:");
        console.log(this.indexCount);
        for (let i = 0; i < resp.length; i++) {
          for (let j = 0; j < this.teacherNames.length; j++) {
            if (resp[i].teacherId == this.teacherNames[j][0]) {
              // console.log("match" + this.teacherNames[j]);
              //   console.log(111111111111);
              resp[i].teacherId = this.teacherNames[j][1];
            }
          }
        }
        for (let i = 0; i < resp.length; i++) {
          for (let j = 0; j < this.courseNames.length; j++) {
            if (resp[i].courseId == this.courseNames[j][0]) {
              resp[i].courseId = this.courseNames[j][1];
            }
          }
        }

        //  console.log(resp);
        this.tableData = resp;
        // this.obj={};
        // this.arry=[];
        // this.setdates(this.tableData)
      });
    },

    add() {
      addApi(this.courseTeacherId).then((resp) => {
        console.log(this.courseTeacherId);
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
    addClass(){
      console.log("this.courseClassSingle");
      console.log(this.courseClassSingle);
      addCourseClassApi(this.courseClassSingle).then((resp) => {
        console.log(this.courseClassSingle);
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
        updateApi(this.courseTeacherId).then((resp) => {
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
      this.$confirm(
        "此操作将永久删除这条课程信息,请确认已经取消对应老师的授课信息，是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).then(() => {
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
      this.$confirm(
        "此操作将永久删除这些课程信息, 请确认已经取消对应老师的授课信息，是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).then(() => {
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
      //需要把汉字转成id
      console.log("row的格式是obj");
      console.log(row);
      for (let i = 0; i < this.courseNames.length; i++) {
        if (row.courseId == this.courseNames[i][1]) {
          row.courseId = this.courseNames[i][0];
        }
      }
      for (let i = 0; i < this.teacherNames.length; i++) {
        if (row.teacherId == this.teacherNames[i][1]) {
          row.teacherId = this.teacherNames[i][0];
        }
      }
      this.courseTeacherId = row;
    },
    handleEditCourseClass(row){
      console.log("row");
      console.log(row);
      this.courseClassSingle.courseTeacherId = row.id;
    },
    giveBasicValue() {
      this.courseTeacherId.teacherId = "";
      this.courseTeacherId.courseId = "";
      this.courseTeacherSearch.teacherId = "";
      this.courseTeacherSearch.courseId = "";
    },
    onSearch() {
      console.log(this.courseTeacherSearch);
      selectByConditionApi(this.courseTeacherSearch).then((resp) => {
        for (let i = 0; i < resp.length; i++) {
          for (let j = 0; j < this.teacherNames.length; j++) {
            if (resp[i].teacherId == this.teacherNames[j][0]) {
              console.log("match" + this.teacherNames[j]);
              //   console.log(111111111111);
              resp[i].teacherId = this.teacherNames[j][1];
            }
          }
        }
        for (let i = 0; i < resp.length; i++) {
          for (let j = 0; j < this.courseNames.length; j++) {
            if (resp[i].courseId == this.courseNames[j][0]) {
              resp[i].courseId = this.courseNames[j][1];
            }
          }
        }
        this.tableData = resp;
      });
    },

    //尝试合并相同内容单元格 ，但是失败了

    // objectSpanMethod({ row, column, rowIndex, columnIndex }) {
    //     if (columnIndex === 1) {
    //       //外循环，遍历数组的每一行
    //       for (rowIndexTemp = 0; rowIndexTemp < this.indexCount;rowIndexTemp++) {
    //         //内循环，
    //         for(let i = 0; i< this.teacherNamesTemp;i++){

    //         }

    //         this.teacherNamesTemp.push(row.teacherId);

    //       }
    //         return {
    //           rowspan: 2,
    //           colspan: 1
    //         };
    //       } else {
    //         return {
    //           rowspan: 0,
    //           colspan: 0
    //         };
    //       }
    //     }
    //       setdates(arr) {
    //     var obj = {},
    //         k, arr1 = [];
    //     for(var i = 0, len = arr.length; i < len; i++) {
    //         k = arr[i].teacherId;
    //         if(obj[k])
    //             obj[k]++;
    //         else
    //             obj[k] = 1;
    //     }
    //     console.log("obj is");
    //     console.log(obj);
    //     //保存结果{el-'元素'，count-出现次数}
    //     for(var o in obj) {
    //         for(let i=0;i<obj[o];i++){
    //             if(i===0){
    //               this.arr1.push(obj[o])
    //           }else{
    //               this.arr1.push(0)
    //           }
    //         }
    //     }
    //     console.log("arr1 is");
    //     console.log(this.arr1);
    // },

    // arraySpanMethod({ row, column, rowIndex, columnIndex }) {
    //   if (rowIndex % 2 === 0) {
    //     if (columnIndex === 0) {
    //       return [1, 2];
    //     } else if (columnIndex === 1) {
    //       return [0, 0];
    //     }
    //   }
    // },

    // objectSpanMethod({ row, column, rowIndex, columnIndex }) {
    //   if (columnIndex === 1 ) {
    //       let _row = this.arr1[rowIndex]
    //       let _col = this.arr1[rowIndex] > 0 ? 1 : 0
    //       return {
    //         rowspan: _row,
    //         colspan: _col
    //       };
    //   }
    // }
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
      addClassVisible: false,
      // 老师信息模型数据
      courseTeacherId: {
        id: "",
        teacherId: "",
        courseId: "",
      },
      courseClassSingle:{
        id:"",
        courseTeacherId:"",
        classId:"",
      },
      courseTeacherSearch: {
        id: "",
        teacherId: "",
        courseId: "",
      },
      indexCount: "",
      selectedIds: [],
      teacherNames: [],
      courseNames: [],
      courseClass: [],
      courseTeachers: [],
      teacherNamesTemp: [],
      classes: [],
      tableData: Array(20).fill(item),
      tags: [],
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