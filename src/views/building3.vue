
<template>
  <div id="app">
    <!--


       这里开始是弹窗设置


 -->
    <!-- 添加新课室信息的对话框-->
    <el-dialog title="新增课室信息" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="classroom" label-width="150px">
        <el-form-item label="楼层">
          <el-input v-model="classroom.floor" value="3000"></el-input>
        </el-form-item>
        <el-form-item label="课室号">
          <el-input v-model="classroom.num"></el-input>
        </el-form-item>

        <el-form-item label="课室类型">
          <el-select v-model="classroom.type" placeholder="请选择">
            <el-option
              v-for="item in optionsForClassroom"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="设置为可借出教室">
          <el-radio v-model="classroom.lentStatus" label="0">是</el-radio>
          <el-radio v-model="classroom.lentStatus" label="1">否</el-radio>
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
      title="编辑课室信息"
      :visible.sync="dialogVisible2"
      width="30%"
    >
     <el-form ref="form" :model="classroom" label-width="150px">
     <el-form-item label="楼层">
          <el-input v-model="classroom.floor" value="3000"></el-input>
        </el-form-item>
        <el-form-item label="课室号">
          <el-input v-model="classroom.num"></el-input>
        </el-form-item>

        <el-form-item label="课室类型">
          <el-select v-model="classroom.type" placeholder="请选择">
            <el-option
              v-for="item in optionsForClassroom"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="设置为可借出教室">
          <el-radio v-model="classroom.lentStatus" label="0">是</el-radio>
          <el-radio v-model="classroom.lentStatus" label="1">否</el-radio>
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
       <div style="
      float: right;
          text-align: right;
          height: 48px;
          width:600px;
          margin-right:-15px;
          font-size: 12px;
          background-size: cover;
          background-image: url(http://localhost:8080/brand_case_war_exploded/pic/building3.png);">


      </div>
      <el-form
        :inline="true"
        :model="classroomSearch"
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
        <el-form-item label="楼层" style="margin-left: 20px">
          <el-input
            v-model="classroomSearch.floor"
          
            size="small"
            style="width: 50px"
          ></el-input>
        </el-form-item>
        <el-form-item label="课室号">
          <el-input
            v-model="classroomSearch.num"
            
            size="small"
            style="width: 50px"
          ></el-input>
        </el-form-item>
        <el-form-item label="课室类型">
          <el-select
            v-model="classroomSearch.type"
            placeholder="课室类型"
            size="small"
            style="width: 120px"
          >
            <el-option
              v-for="item in optionsForClassroom"
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
        <el-table-column prop="building" align="center" label="教学楼" width="100" sortable>
        </el-table-column>
        <el-table-column prop="floor" align="center" label="楼层" width="80" sortable>
        </el-table-column>
        <el-table-column prop="num" align="center" label="课室号" width="100" sortable> </el-table-column>
        <el-table-column prop="type" align="center" label="课室类型" sortable>
        </el-table-column>
        <el-table-column prop="status" align="center" label="使用状态" width="120" sortable>
          <template slot-scope="scope" v-if="scope.row.status == '0'">
          <el-tag type="success">正常</el-tag> 
          </template>        
          <template slot-scope="scope" v-else-if="scope.row.status == '1'">
          <el-tag type="">使用中</el-tag> 
          </template>

          <template slot-scope="scope" v-else-if="scope.row.status == '-1'">
          <el-tag type="warning">维修</el-tag> 
          </template>

        </el-table-column>
        <el-table-column prop="lentStatus" align="center" label="是否可借出" sortable>
          <el-tag slot-scope="scope" v-if="scope.row.lentStatus == 0" type="success">允许</el-tag> 
                
          <!-- <el-tag slot-scope="scope" v-if="scope.row.lentStatus ==1" type="warning">禁止</el-tag>
            -->
          <el-tag  v-else type="warning">禁止</el-tag> 

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
  selectAll3Api as selectAllApi,
  add3Api as addApi,
  updateApi,
  deleteByIdApi,
  deleteByIdsApi,
  selectByCondition3Api as selectByConditionApi,
} from "@/utils/classroomapi";
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
        console.log("--------------------------");
        console.log(this.tableData);
        console.log(this.tableData[1].lentStatus);
      });
    },

    add() {
      addApi(this.classroom).then((resp) => {
        console.log(this.classroom);
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
        updateApi(this.classroom).then((resp) => {
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
      this.$confirm("此操作将永久删除这个课室信息,请确认已经取消对应老师的授课信息，是否继续?", "提示", {
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
            this.$message.error("删除失败！请取消对应授课老师的该教师授课信息");
          }
        });
      });
    },
    deleteByIds() {
      // console.log(this.multipleSelection)
      this.$confirm("此操作将永久删除这些课室信息, 请确认已经取消对应老师的授课信息，是否继续?", "提示", {
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
      this.classroom = row;
    },
    giveBasicValue() {
         this.classroom.id="",
         this.classroom.building= "",
         this.classroom.floor="",
         this.classroom.num="",
         this.classroom.type="",
         this.classroom.status="",
         this.classroom.lentStatus="",
         this.classroomSearch.id="",
         this.classroomSearch.building= "",
         this.classroomSearch.floor="",
         this.classroomSearch.num="",
         this.classroomSearch.type="",
         this.classroomSearch.status="",
         this.classroomSearch.lentStatus=""
    },
    onSearch() {
      console.log(this.classroomSearch);
      selectByConditionApi(this.classroomSearch).then((resp) => {
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
      classroom: {
        id: "",
        building: "",
        floor: "",
        num: "",
        type: "",
        status:"",
        lentStatus:"",
      },
      classroomSearch: {
        id: "",
        building: "",
        floor: "",
        num: "",
        type: "",
        status:"",
        lentStatus:"",
      },

      selectedIds: [],
      tableData: Array(20).fill(item),

      optionsForClassroom: [
        {
          value: "电饭煲",
          label: "电饭煲",
        },
        {
          value: "大教室",
          label: "大教室",
        },
        {
          value: "小教室",
          label: "小教室",
        },
    
      ],

      optionsForLentStatus: [
        {
          value: "0",
          label: "是",
        },
        {
          value: "1",
          label: "否",
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