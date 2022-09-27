
<template>
  <div id="app">
    <!--


       这里开始是弹窗设置


 -->
 <!--
    添加新课程信息的对话框
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
      编辑课程信息的对话框-->
  <!--  
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
-->
    <!--






       弹窗设置结束






 -->

    <!--                        <el-button type="danger" plain @click="deleteByIds">批量删除</el-button>-->
    <div style="margin: 20px; height: 99%">
      <!--                    下面是搜索的内嵌表单-->
      <el-form
        :inline="true"
        :model="ask"
        class="demo-form-inline"
        label-width="15"
        style="margin-bottom: -20px"
      ><el-form-item label="学生姓名" style="margin-left:20px">
          <el-select v-model="askSearch.studentId" placeholder=""  size="small" style="width:80px" >
            <el-option
              v-for="item in studentNames"
              :key="item[0]"
              :label="item[1]"
              :value="item[0]"
            >
            </el-option>
          </el-select>
        </el-form-item>
       
        <!-- <span style="text-align:right"> -->
        <el-form-item label="课室名称" style="margin-left:20px">
          <el-select v-model="askSearch.classroomId" placeholder=""  size="small" style="width:80px" >
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
          <el-select v-model="askSearch.week" placeholder=""  size="small" style="width:100px" >
            <el-option
                   v-for="item in optionsForWeek"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="星期" >
          <el-select v-model="askSearch.date" placeholder=""  size="small" style="width:100px">
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
          <el-select v-model="askSearch.time" placeholder="" size="small" style="width:100px" >
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

 <div class="table-wrapper">     
       <el-table
        :data="tableData"
        height="540"
      >
        <el-table-column highlight-current-column="true" prop="classroomId"   align="left" label="当前申请"  sortable>
          <el-card class="box-card" slot-scope="scope">
  <span  class="text item" style="margin-left:20px">学生姓名:  
     <el-tag type="success"> {{scope.row.studentId}}</el-tag>  
  </span>
  <span  class="text item" style="margin-left:20px">借用教室:  
     <el-tag type="warning"> {{scope.row.classroomId}}</el-tag>  
  </span>
  <span  class="text item" style="margin-left:20px">借用时间:  
     <el-tag type=""> {{scope.row.week+" "+scope.row.date+" "+scope.row.time}}</el-tag>  
  </span>
    <span  class="text item" v-if="scope.row.status == '等待审核' " style="margin-left:20px">当前状态:  
     <el-tag type="warning"> {{scope.row.status}}</el-tag>  
  </span>
  <span  class="text item" v-if="scope.row.status == '已通过' " style="margin-left:20px">当前状态:  
     <el-tag type="success"> {{scope.row.status}}</el-tag>  
  </span>
  <span  class="text item" v-if="scope.row.status == '驳回' " style="margin-left:20px">当前状态:  
     <el-tag type="error"> {{scope.row.status}}</el-tag>  
  </span>
  
  <el-button v-if="scope.row.status == '等待审核'"
              type="success"
              size="small"
              style="background-color: #94d595; border-color: #94d595;float:right;margin-bottom:20px;margin-right:50px"
              @click="handleEditPass(scope.row), updatePass()"
              >通过</el-button
            >
            <el-button
            v-if="scope.row.status == '等待审核' "
              type="danger"
              size="small"
              style="float:right;margin-right:20px"
              @click="handleEditReturn(scope.row), updateReturn()"
              >驳回</el-button
            >
            
</el-card>
        </el-table-column>
        
      </el-table>
</div>


      <!--    届时elementui的代码粘贴在这里-->
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import {
  selectAllApi,
  updateApi,
  addApi,
  deleteByIdApi,
  selectByConditionApi,
} from "@/utils/studentAskapi";
import {
  selectAllApi as selectClassroomApi,
} from "@/utils/classroomapi";
import {
  selectAllStudentsApi as selectStudentApi,
} from "@/utils/studentapi";
import {
  addApi as addOccApi,
} from "@/utils/classroomArrangementapi";
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

    //编辑某一行的回调函数
    handleEditPass(row) {
      this.ask=row;
      this.askTemp.id  = row.id;
      this.askTemp.status  = "已通过";
    },
    handleEditReturn(row) {
      this.askTemp.status = "驳回";
      this.askTemp.id = row.id;
    },
     updatePass() {
      this.$confirm("确定通过?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {

        updateApi(this.askTemp).then((resp) => {
          console.log("------------");
          console.log(this.ask);
          addOccApi(this.DataTranslateRev(this.ask));
          if (resp == "success") {
            //5.添加成功则关闭对话框，重新查询数据,弹出提示添加成功消息框
            this.dialogVisible = false;
            this.selectAll();
            this.$message({
              message: "课室可用！成功通过！",
              type: "success",
            });
          } else {
            this.$message.error("课室已被占用");
          }
        });
      });
    },
      updateReturn() {
      this.$confirm("确定驳回?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {

        updateApi(this.askTemp).then((resp) => {
          console.log("------------");
          console.log(this.ask);
          if (resp == "success") {
            //5.添加成功则关闭对话框，重新查询数据,弹出提示添加成功消息框
            this.dialogVisible = false;
            this.selectAll();
            this.$message({
              message: "已驳回！",
              type: "success",
            });
          } else {
            this.$message.error("error");
          }
        });
      });
    },
    giveBasicValue() {
      this.ask.id = "";
      this.ask.classroomId = "";
      this.ask.studentId = "";
      this.ask.week = "第一周";
      this.ask.time = "① 8:00-8:40";
      this.ask.date = "星期一";
      this.ask.status = " ";
      this.askSearch.id = "";
      this.askSearch.classroomId = "";
      this.askSearch.studentId = "";
      this.askSearch.week = "";
      this.askSearch.time = "";
      this.askSearch.date = "";
      this.askSearch.status = "";
    },
    onSearch() {
      console.log(this.askSearch);
      selectByConditionApi(this.askSearch).then((resp) => {
        
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
      ask: {
        id: "",
        classroomId: "",
        studentId:"1",
        week: "",
        time: "",
        date: "",
        status:"",
      },
      askTemp:{
        id: "",
        classroomId: "",
        studentId:"",
        week: "",
        time: "",
        date: "",
        status:"",

      },
      askSearch: {
        id: "",
        classroomId: "",
        studentId:"",
        week: "",
        time: "",
        date: "",
        status:"",
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
text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    border-radius: 30px;
    margin: 10px;
  }
/**表格背景透明 */

.table-wrapper /deep/  .el-table,
.el-table__expanded-cell {
  background-color: transparent !important;
}

.table-wrapper /deep/ tr, .table-wrapper /deep/ th, .table-wrapper /deep/ td {
  background: #ffffff1c !important;
  color:rgb(124, 124, 124);
  border-bottom: 0px; 
}

.table-wrapper /deep/  .el-table tbody tr:hover>td {
  background-color: #ebf2ed !important
}

.table-wrapper /deep/ .el-table__row {
  background: #ffffff1c !important;
  color: #103f4d;
}
/**表格背景透明end */
</style>