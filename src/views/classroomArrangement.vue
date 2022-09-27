
<template>
  <div id="app">
    <!--


       这里开始是弹窗设置


 -->
    <!-- 添加新课程信息的对话框-->
    <el-dialog title="新增课室使用信息" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="classroomArrangement" label-width="120px">
        <el-form-item label="课室名称">
          <el-select v-model="classroomArrangement.classroomId" placeholder="">
            <el-option
              v-for="item in classroomNames"
              :key="item[0]"
              :label="item[1]"
              :value="item[0]"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="周数">
          <el-select v-model="classroomArrangement.week" placeholder="">
          <el-option
              v-for="item in optionsForWeek"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="星期">
          <el-select v-model="classroomArrangement.date" placeholder="">
            <el-option
              v-for="item in optionsForDate"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="节数">
          <el-select v-model="classroomArrangement.time" placeholder="">
            <el-option
              v-for="item in optionsForTime"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="租用学生姓名">
          <el-select v-model="classroomArrangement.studentId" placeholder="">
            <el-option
              v-for="item in studentNames"
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
      title="编辑课室使用信息"
      :visible.sync="dialogVisible2"
      width="30%"
    >
      <el-form ref="form" :model="classroomArrangement" label-width="120px">  
      <el-form-item label="课室名称">
          <el-select v-model="classroomArrangement.classroomId" placeholder="">
            <el-option
              v-for="item in classroomNames"
              :key="item[0]"
              :label="item[1]"
              :value="item[0]"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="周数">
          <el-select v-model="classroomArrangement.week" placeholder="">
          <el-option
              v-for="item in optionsForWeek"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="星期">
          <el-select v-model="classroomArrangement.date" placeholder="">
            <el-option
              v-for="item in optionsForDate"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="节数">
          <el-select v-model="classroomArrangement.time" placeholder="">
            <el-option
              v-for="item in optionsForTime"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="租用学生姓名">
          <el-select v-model="classroomArrangement.studentId" placeholder="">
            <el-option
              v-for="item in studentNames"
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

    <!--






       弹窗设置结束






 -->

    <!--                        <el-button type="danger" plain @click="deleteByIds">批量删除</el-button>-->
    <div style="margin: 20px; height: 99%">
      <!--                    下面是搜索的内嵌表单-->
      <el-form
        :inline="true"
        :model="classroomArrangement"
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
        <el-form-item label="课室名称" style="margin-left:20px">
          <el-select v-model="classroomArrangementSearch.classroomId" placeholder=""  size="small" style="width:80px" >
            <el-option
              v-for="item in classroomNames"
              :key="item[0]"
              :label="item[1]"
              :value="item[0]"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学生姓名">
          <el-select v-model="classroomArrangementSearch.studentId" placeholder=""  size="small" style="width:100px" >
            <el-option
              v-for="item in studentNames"
              :key="item[0]"
              :label="item[1]"
              :value="item[0]"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="周数" >
          <el-select v-model="classroomArrangementSearch.week" placeholder=""  size="small" style="width:100px">
          <el-option
              v-for="item in optionsForWeek"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="星期">
          <el-select v-model="classroomArrangementSearch.date" placeholder="" size="small" style="width:100px" >
            <el-option
              v-for="item in optionsForDate"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
   
        </el-form-item>
        <el-form-item label="节数" >
          <el-select v-model="classroomArrangementSearch.time" placeholder="" size="small" style="width:120px" >
            <el-option
              v-for="item in optionsForTime"
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
        <el-table-column prop="classroomId" align="center" label="使用课室" width="200" sortable>
        </el-table-column>
        <el-table-column prop="studentId" align="center" label="使用者" width="120" sortable>
          <el-tag slot-scope="scope" v-if="scope.row.studentId == 999 " type="warning">已排课</el-tag> 
                
          <!-- <el-tag slot-scope="scope" v-if="scope.row.lentStatus ==1" type="warning">禁止</el-tag>
            --><span slot-scope="scope" v-else>{{scope.row.studentId}}</span>
        </el-table-column>
        
        
        <el-table-column prop="week" align="center" label="周数" width="120" sortable>
 
        </el-table-column>
        <el-table-column prop="date" align="center" label="星期" sortable> </el-table-column>
        <el-table-column prop="time" align="center" label="节数" sortable>
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
} from "@/utils/classroomArrangementapi";
import {
  selectAllApi as selectClassroomApi,
} from "@/utils/classroomapi";
import {
  selectAllStudentsApi as selectStudentApi,
} from "@/utils/studentapi";
export default {
  name: "Home",
  //1.加载完成后
  created() {

    selectClassroomApi().then((resp) => {
      //console.log(resp);
      //取出老师名称和id，封装于数组中
      for (let i = 0; i < resp.length; i++) {
        var classroomObj = [resp[i].id, " "+resp[i].building+resp[i].floor+resp[i].num];
        this.classroomNames.push(classroomObj);
      }
      console.log(this.classroomNames);
    });
    selectStudentApi().then((resp) => {
      //console.log(resp);
      //取出老师名称和id，封装于数组中
      for (let i = 0; i < resp.length; i++) {
        var studentObj = [resp[i].id, resp[i].name];
        this.studentNames.push(studentObj);
      }
      console.log(this.studentNames);
    });

    this.selectAll();
  },

  methods: {
    selectAll() {
      selectAllApi().then((resp) => {
       this.tableData = this.DataTranslate(resp);
        
      });

    },
    DataTranslate(resp){
      for (let i = 0; i < resp.length; i++) {
          for (let j = 0; j < this.classroomNames.length; j++) {
            if (resp[i].classroomId == this.classroomNames[j][0]) {
              // console.log("match" + this.teacherNames[j]);
              //   console.log(111111111111);
              resp[i].classroomId = this.classroomNames[j][1];
            }
          }
        }
        for (let i = 0; i < resp.length; i++) {
          for (let j = 0; j < this.studentNames.length; j++) {
            if (resp[i].studentId == this.studentNames[j][0]) {
              resp[i].studentId = this.studentNames[j][1];
            }
          }
        }
        for (let i = 0; i < resp.length; i++) {
          for (let j = 0; j < this.optionsForWeek.length; j++) {
            if (resp[i].week == this.optionsForWeek[j].value) {
              resp[i].week = this.optionsForWeek[j].label;
            }
          }
        }
        for (let i = 0; i < resp.length; i++) {
          for (let j = 0; j < this.optionsForDate.length; j++) {
            if (resp[i].date == this.optionsForDate[j].value) {
              resp[i].date = this.optionsForDate[j].label;
            }
          }
        }
        for (let i = 0; i < resp.length; i++) {
          for (let j = 0; j < this.optionsForTime.length; j++) {
            if (resp[i].time == this.optionsForTime[j].value) {
              resp[i].time = this.optionsForTime[j].label;
            }
          }
        }
        return resp;
    },


    add() {
      addApi(this.classroomArrangement).then((resp) => {
        console.log(this.classroomArrangement);
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
        updateApi(this.classroomArrangement).then((resp) => {
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
    DataTranslateRev(resp){
      console.log(111111111111);
      console.log(resp.studentId);
        console.log(111111111111);
        resp.studentId=1;
          for (let j = 0; j < this.classroomNames.length; j++) {
            
            if (resp.classroomId == this.classroomNames[j][1]) {
              // console.log("match" + this.teacherNames[j]);
                 console.log(111111111111);
              resp.classroomId = this.classroomNames[j][0];
            }
          
        }
        // for (let i = 0; i < resp.length; i++) {
        //   for (let j = 0; j < this.studentNames.length; j++) {
        //     if (resp[i].studentId == this.studentNames[j][0]) {
        //       resp[i].studentId = this.studentNames[j][1];
        //     }
        //   }
        // }

          for (let j = 0; j < this.optionsForWeek.length; j++) {
            if (resp.week == this.optionsForWeek[j].label) {
              resp.week = this.optionsForWeek[j].value;
            }
          
        }

          for (let j = 0; j < this.optionsForDate.length; j++) {
            if (resp.date == this.optionsForDate[j].label) {
              resp.date = this.optionsForDate[j].value;
            }
          
        }
          for (let j = 0; j < this.optionsForTime.length; j++) {
            if (resp.time == this.optionsForTime[j].label) {
              resp.time = this.optionsForTime[j].value;
            }
          
        }
        return resp;
    },

    deleteById(row) {
      this.$confirm(
        "此操作将永久删除这条课室使用信息,将通知该学生，是否继续?",
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
      this.classroomArrangement = row;
    },
    giveBasicValue() {
      this.classroomArrangement.id = "";
      this.classroomArrangement.classroomId = "";
      this.classroomArrangement.courseTeacherId = "";
      this.classroomArrangement.studentId = "";
      this.classroomArrangement.week = "第一周";
      this.classroomArrangement.time = "① 8:00-8:40";
      this.classroomArrangement.date = "星期一";
      this.classroomArrangementSearch.id = "";
      this.classroomArrangementSearch.classroomId = "";
      this.classroomArrangementSearch.courseTeacherId = "";
      this.classroomArrangementSearch.studentId = "";
      this.classroomArrangementSearch.week = "";
      this.classroomArrangementSearch.time = "";
      this.classroomArrangementSearch.date = "";
    },
    onSearch() {
      console.log(this.classroomArrangementSearch);
      selectByConditionApi(this.classroomArrangementSearch).then((resp) => {
        
        console.log(resp);
        this.tableData = this.DataTranslate(resp);
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
      classroomArrangement: {
        id: "",
        classroomId: "",
        courseTeacherId: "",
        studentId: "",
        week: "",
        time: "",
        date: "",
      },
      classroomArrangementSearch: {
        id: "",
        classroomId: "",
        courseTeacherId: "",
        studentId: "",
        week: "",
        time: "",
        date: "",
      },

      selectedIds: [],
      classroomNames:[],
      studentNames:[],
      tableData: Array(20).fill(item),

      optionsForWeek:[
        {
          value:1,
          label:"第一周",
        },
        {
          value:2,
          label:"第二周",
        },
        {
          value:3,
          label:"第三周",
        },
        {
          value:4,
          label:"第四周",
        },
        {
          value:5,
          label:"第五周",
        },
        {
          value:6,
          label:"第六周",
        },
        {
          value:7,
          label:"第七周",
        },
        {
          value:8,
          label:"第八周",
        },
        {
          value:9,
          label:"第九周",
        },
        {
          value:10,
          label:"第十周",
        },
        {
          value:11,
          label:"第十一周",
        },
        {
          value:12,
          label:"第十二周",
        },
        {
          value:13,
          label:"第十三周",
        },
        {
          value:14,
          label:"第十四周",
        },
        {
          value:15,
          label:"第十五周",
        },
        {
          value:16,
          label:"第十六周",
        },
      ],
      optionsForTime:[
        {
          value:1,
          label:"① 8:00-8:40",
        },
        {
          value:2,
          label:"② 8:45-9:25",
        },
        {
          value:3,
          label:"③ 9:55-10:35",
        },
        {
          value:4,
          label:"④ 10:40-11:20",
        },
        {
          value:5,
          label:"⑤ 11:25-12:05",
        },
        {
          value:6,
          label:"⑥ 12:40-13:20",
        },
        {
          value:7,
          label:"⑦ 13:25-14:05",
        },
        {
          value:8,
          label:"⑧ 14:30-15:10",
        },
        {
          value:9,
          label:"⑨ 15:15-15:55",
        },
        {
          value:10,
          label:"⑩ 16:25-17:05",
        },
        {
          value:11,
          label:"⑪ 17:10-17:50",
        },
        {
          value:12,
          label:"⑫ 17:55-18:35",
        },
        {
          value:13,
          label:"⑬ 19:30-20:10",
        },
        {
          value:14,
          label:"⑭ 20:15-20:55",
        },
        {
          value:15,
          label:"⑮ 21:00-21:40",
        },
      ],
      optionsForDate:[
        {
          value:1,
          label:"星期一",
        },
        {
          value:2,
          label:"星期二",
        },
        {
          value:3,
          label:"星期三",
        },
        {
          value:4,
          label:"星期四",
        },
        {
          value:5,
          label:"星期五",
        },
        {
          value:6,
          label:"星期六",
        },
        {
          value:7,
          label:"星期日",
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