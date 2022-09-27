# 课室排课信息管理系统前端
## 一、项目初始化
```
npm install
npm run serve
```

后端代码见：https://github.com/mountFlow/classManagement_back

## 二、项目介绍

- 前后端分离开发并实现了基础的课室排课系统
- 分为教务员和学生两类账号
- 前端使用elementUI来构建所有表单界面
- 后端有完备的mysql数据库
- 通过mybatis来读取，
- 通过axios传值
- 自写排课算法。

技术栈:vue、vue-cil、elementUI、axios、Java mybatis、servlet

- 登录界面：

![image](https://user-images.githubusercontent.com/84088980/192585171-a775373f-716c-452a-bad4-59afb844cc3f.png)
![image](https://user-images.githubusercontent.com/84088980/192585201-84f3a0c0-3520-4693-a1e6-b85d4b0c9095.png)

- 学生管理模块：

![image](https://user-images.githubusercontent.com/84088980/192585256-474da228-9807-4761-b99a-a153a9a0b53d.png)

- 教室管理模块：

![image](https://user-images.githubusercontent.com/84088980/192585008-fcf847ef-b770-4b85-8715-278f3590ef5d.png)

- 课室借用申请管理模块

![image](https://user-images.githubusercontent.com/84088980/192585063-28057ddb-d1cf-449b-80cf-2a85cb0a74e8.png)

- 授课管理模块

![image](https://user-images.githubusercontent.com/84088980/192585874-f21a3f7b-64d1-48e7-a626-5701a832fbf9.png)

- 目前实现的模块有：学生管理、班级管理、教师管理、课程管理、课室管理、排课管理、学生课室借用请求管理、空闲课室的查询，申请借用课室

## 三.代码分析

### 1.前端核心
- 前端的自定义菜单组件

![image](https://user-images.githubusercontent.com/84088980/192586926-b9468f8f-2921-420f-a6fa-1388d3949abc.png)


- 前端与后端的接口定义

![image](https://user-images.githubusercontent.com/84088980/192586859-8974734d-6928-40e5-a0c6-9b762827c578.png)


- 所有表对应功能的页面组件定义

![image](https://user-images.githubusercontent.com/84088980/192586802-5b684d0f-2d79-4973-986a-9e10d544f4b4.png)

### 2.后端核心

#### - 表对象
后端使用Mybatis链接数据库，在这个过程中，需要建立与所有的表的字段一一对应的表的对象，下面展示classroom表的对应表对象代码
```java
package pojo;

public class Classroom {

    private int id;
    private int building;
    private int floor;
    private String num;
    private String type;
    private int status;
    private int lentStatus;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBuilding() {
        return building;
    }

    public void setBuilding(int building) {
        this.building = building;
    }

    public int getFloor() {
        return floor;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getLentStatus() {
        return lentStatus;
    }

    public void setLentStatus(int lentStatus) {
        this.lentStatus = lentStatus;
    }

    @Override
    public String toString() {
        return "ClassRoom{" +
                "id=" + id +
                ", building=" + building +
                ", floor=" + floor +
                ", num=" + num +
                ", type='" + type + '\'' +
                ", status=" + status +
                ", lentStatus=" + lentStatus +
                '}';
    }
}
```
#### - Mapper对象
每个与之对应的表对象都要有对应的Mapper对象存放相关的处理给表的Sql语句，下面是classroom表对象对应的classroomMapper对象的示例代码：

```java
package mapper;

import org.apache.ibatis.annotations.*;
import pojo.ClassPojo;
import pojo.Student;
import pojo.StudentOrginal;

import java.util.List;

public interface ClassMapper {

    /**
     * 查询所有
     * @return
     */
    //1.设置sql语句
    @Select("select * from class")
    //2.设置对应的resultMap，用于关联起数据库的下划线命名和java的驼峰命名
    @ResultMap("classResultMap")
    //需要回传数据并且是注解开发，就要在这里加resultmap，否则在xml中指定
    List<ClassPojo> selectAll();

    /**
     * 添加数据
     * @param classPojo
     */
    @Insert("INSERT INTO class VALUES(null,#{grade},#{className},#{totalStudents},#{major})")
    void add(ClassPojo classPojo);

    /**
     * 编辑数据
     * @param classPojo
     */
    @Update("UPDATE class SET grade=#{grade},class_name=#{className},total_students=#{totalStudents},major=#{major} WHERE id=#{id}" )
    void update(ClassPojo classPojo);

    /**
     * 删除数据
     * @param id
     */
    @Delete("DELETE FROM class WHERE id=#{id}")
    void deleteById(int id);

    /**
     * 删除多个
     * @param ids
     */
    void deleteByIds(@Param("ids") int[] ids);

    /**
     * 条件查询
     * @return
     */
    List<ClassPojo> selectClassesByCondition(ClassPojo classPojo);
}
```

#### - Service对象
   每个表的Sql语句的读取需要通过建立SqlSession来进行，所以每个表需要有一个Service对象进行sql语句的session对象的的建立（以classroom表为例）：
   
   
 ```java  
package service.impl;

import mapper.ClassroomMapper;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import pojo.Classroom;
import service.ClassroomService;
import util.SqlSessionFactoryUtils;

import java.util.List;

public class ClassroomServiceImpl implements ClassroomService {
    //1. 创建SqlSessionFactory 工厂对象
    SqlSessionFactory factory = SqlSessionFactoryUtils.getSqlSessionFactory();


    @Override
    public List<Classroom> selectAll3() {
        //2.获取sqlsession请求
        SqlSession sqlSession = factory.openSession();
        //3.获取teachermapper
        ClassroomMapper classroomMapper = sqlSession.getMapper(ClassroomMapper.class);
        //4.调用方法
        List<Classroom> classrooms = classroomMapper.selectAll3();
        //5.释放资源
        sqlSession.close();
        //6.返回获取的数据
        return classrooms;
    }
    @Override
    public List<Classroom> selectAll() {
        //2.获取sqlsession请求
        SqlSession sqlSession = factory.openSession();
        //3.获取teachermapper
        ClassroomMapper classroomMapper = sqlSession.getMapper(ClassroomMapper.class);
        //4.调用方法
        List<Classroom> classrooms = classroomMapper.selectAll();
        //5.释放资源
        sqlSession.close();
        //6.返回获取的数据
        return classrooms;
    }
    @Override
    public List<Classroom> selectAll4() {
        //2.获取sqlsession请求
        SqlSession sqlSession = factory.openSession();
        //3.获取teachermapper
        ClassroomMapper classroomMapper = sqlSession.getMapper(ClassroomMapper.class);
        //4.调用方法
        List<Classroom> classrooms = classroomMapper.selectAll4();
        //5.释放资源
        sqlSession.close();
        //6.返回获取的数据
        return classrooms;
    }

    @Override
    public List<Classroom> selectAll4Lent() {
        //2.获取sqlsession请求
        SqlSession sqlSession = factory.openSession();
        //3.获取teachermapper
        ClassroomMapper classroomMapper = sqlSession.getMapper(ClassroomMapper.class);
        //4.调用方法
        List<Classroom> classrooms = classroomMapper.selectAll4Lent();
        //5.释放资源
        sqlSession.close();
        //6.返回获取的数据
        return classrooms;
    }
    @Override
    public List<Classroom> selectAll3Lent() {
        //2.获取sqlsession请求
        SqlSession sqlSession = factory.openSession();
        //3.获取teachermapper
        ClassroomMapper classroomMapper = sqlSession.getMapper(ClassroomMapper.class);
        //4.调用方法
        List<Classroom> classrooms = classroomMapper.selectAll3Lent();
        //5.释放资源
        sqlSession.close();
        //6.返回获取的数据
        return classrooms;
    }

    @Override
    public void add3(Classroom classroom) {
        //2.获取sqlsession请求
        SqlSession sqlSession = factory.openSession();
        //3.获取teachermapper
        ClassroomMapper classroomMapper = sqlSession.getMapper(ClassroomMapper.class);
        //4.调用方法, 添加老师
        classroomMapper.add3(classroom);
        //5.提交
        sqlSession.commit();
        //6.释放资源
        sqlSession.close();

    }
    @Override
    public void add4(Classroom classroom) {
        //2.获取sqlsession请求
        SqlSession sqlSession = factory.openSession();
        //3.获取teachermapper
        ClassroomMapper classroomMapper = sqlSession.getMapper(ClassroomMapper.class);
        //4.调用方法, 添加老师
        classroomMapper.add4(classroom);
        //5.提交
        sqlSession.commit();
        //6.释放资源
        sqlSession.close();
    }
    @Override
    public void update(Classroom classroom) {

        //2.获取sqlsession请求
        SqlSession sqlSession = factory.openSession();
        //3.获取teachermapper
        ClassroomMapper classroomMapper = sqlSession.getMapper(ClassroomMapper.class);
        //4.调用方法, 添加老师
        classroomMapper.update(classroom);
        //5.提交
        sqlSession.commit();
        //6.释放资源
        sqlSession.close();

    }

    @Override
    public void deleteById(int id) {
        //2.获取sqlsession请求
        SqlSession sqlSession = factory.openSession();
        //3.获取teachermapper
        ClassroomMapper classroomMapper = sqlSession.getMapper(ClassroomMapper.class);
        //4.调用方法, 删除单个
        classroomMapper.deleteById(id);
        //5.提交
        sqlSession.commit();
        //6.释放资源
        sqlSession.close();
    }

    @Override
    public void deleteByIds(int[] ids) {
        //2.获取sqlsession请求
        SqlSession sqlSession = factory.openSession();
        //3.获取teachermapper
        ClassroomMapper classroomMapper = sqlSession.getMapper(ClassroomMapper.class);
        //4.调用方法, 删除多个
        classroomMapper.deleteByIds(ids);
        //5.提交
        sqlSession.commit();
        //6.释放资源
        sqlSession.close();

    }

    @Override
    public List<Classroom> selectByCondition3(Classroom classroom) {

        //2.获取sqlsession请求
        SqlSession sqlSession = factory.openSession();
        //3.获取teachermapper
        ClassroomMapper classroomMapper = sqlSession.getMapper(ClassroomMapper.class);
        //4.调用方法, 删除多个
        List<Classroom> courses=classroomMapper.selectByCondition3(classroom);
        //6.释放资源
        sqlSession.close();
        return courses;
    }

    @Override
    public List<Classroom> selectByCondition4(Classroom classroom) {

        //2.获取sqlsession请求
        SqlSession sqlSession = factory.openSession();
        //3.获取teachermapper
        ClassroomMapper classroomMapper = sqlSession.getMapper(ClassroomMapper.class);
        //4.调用方法, 删除多个
        List<Classroom> courses=classroomMapper.selectByCondition4(classroom);
        //6.释放资源
        sqlSession.close();
        return courses;
    }
}
```

#### - Service对象


通过Service对象，前端能将读取的需求和参数传给后端，后端能将通过MyBatis得到的返回集合转成字符串传回前端，下面是classroom Service 的实例代码：

```java
package servlet;

import com.alibaba.fastjson.JSON;
import pojo.Classroom;
import service.ClassroomService;
import service.impl.ClassroomServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.List;

@WebServlet("/classroom/*")
public class ClassroomServlet extends BaseServlet {
    private ClassroomService classroomService=new ClassroomServiceImpl();
    public void selectAll(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("Classroom selectAll");
        //2.调用service进行查询
        List<Classroom> classrooms = classroomService.selectAll();
        //3.转为json
        String jsonString = JSON.toJSONString(classrooms);
        //4. 返回数据给html页面
        response.setContentType("text/json;charset=UTF-8");
        response.getWriter().write(jsonString);

    }

    public void selectAll3(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("Classroom selectAll");
        //2.调用service进行查询
        List<Classroom> classrooms = classroomService.selectAll3();
        //3.转为json
        String jsonString = JSON.toJSONString(classrooms);
        //4. 返回数据给html页面
        response.setContentType("text/json;charset=UTF-8");
        response.getWriter().write(jsonString);

    }
    public void selectAll4(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("Classroom selectAll");
        //2.调用service进行查询
        List<Classroom> classrooms = classroomService.selectAll4();
        //3.转为json
        String jsonString = JSON.toJSONString(classrooms);
        //4. 返回数据给html页面
        response.setContentType("text/json;charset=UTF-8");
        response.getWriter().write(jsonString);

    }

    public void selectAll3Lent(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("Classroom selectAll3lent");
        //2.调用service进行查询
        List<Classroom> classrooms = classroomService.selectAll3Lent();
        //3.转为json
        String jsonString = JSON.toJSONString(classrooms);
        //4. 返回数据给html页面
        response.setContentType("text/json;charset=UTF-8");
        response.getWriter().write(jsonString);

    }
    public void selectAll4Lent(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("Classroom selectAll4lent");
        //2.调用service进行查询
        List<Classroom> classrooms = classroomService.selectAll4Lent();
        //3.转为json
        String jsonString = JSON.toJSONString(classrooms);
        //4. 返回数据给html页面
        System.out.println(jsonString);
        response.setContentType("text/json;charset=UTF-8");
        response.getWriter().write(jsonString);

    }
    public void add3(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("Classroom add");
        //1.接收品牌数据,获取json格式提交过来的数据
        request.setCharacterEncoding("UTF-8");
        BufferedReader reader = request.getReader();
        String params = reader.readLine();
        System.out.println(params);
        //2.json字符串转换为对象
        Classroom classroom = JSON.parseObject(params, Classroom.class);
        System.out.println(classroom);
        //3.调用service添加
        classroomService.add3(classroom);
        //4.响应成功的标识
        response.getWriter().write("success");
    }
    public void add4(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("Classroom add");
        //1.接收品牌数据,获取json格式提交过来的数据
        request.setCharacterEncoding("UTF-8");
        BufferedReader reader = request.getReader();
        String params = reader.readLine();
        System.out.println(params);
        //2.json字符串转换为对象
        Classroom classroom = JSON.parseObject(params, Classroom.class);
        System.out.println(classroom);
        //3.调用service添加
        classroomService.add4(classroom);
        //4.响应成功的标识
        response.getWriter().write("success");
    }

    public void update(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("Classroom edit");
        //1.接收品牌数据,获取json格式提交过来的数据
        request.setCharacterEncoding("UTF-8");
        BufferedReader reader = request.getReader();
        String params = reader.readLine();
        System.out.println(params);
        //2.json字符串转换为对象
        Classroom classroom = JSON.parseObject(params, Classroom.class);
        //3.调用service添加
        System.out.println(classroom);
        classroomService.update(classroom);;
        //4.响应成功的标识
        response.getWriter().write("success");
    }


    public void deleteById(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("Classroom del");
        //1.接收品牌数据,获取json格式提交过来的数据
        request.setCharacterEncoding("UTF-8");
        BufferedReader reader = request.getReader();
        String params = reader.readLine();
        //2.json字符串转换为对象(如果是传某个值，就只传一个属性的类型）
        int id = JSON.parseObject(params, Integer.class);
        //3.调用service添加
        classroomService.deleteById(id);
        //4.响应成功的标识
        response.getWriter().write("success");
    }

    public void deleteByIds(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("Classroom dels");
        //1.接收品牌数据,获取json格式提交过来的数据
        request.setCharacterEncoding("UTF-8");
        BufferedReader reader = request.getReader();
        String params = reader.readLine();
        //2.json字符串转换为对象(如果是传某个值，就只传一个id类似）
        int[] ids = JSON.parseObject(params, int[].class);
        //3.调用service添加
        classroomService.deleteByIds(ids);
        //4.响应成功的标识
        response.getWriter().write("success");
    }
    public void selectByCondition3(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("course selectByCondition");
        //1.接收品牌数据,获取json格式提交过来的数据
        request.setCharacterEncoding("UTF-8");
        BufferedReader reader = request.getReader();
        String params = reader.readLine();
        System.out.println(params);
        //2.json字符串转换为对象
        Classroom classroom = JSON.parseObject(params, Classroom.class);


        //2.调用service进行查询
        List<Classroom> classrooms = classroomService.selectByCondition3(classroom);
        //3.转为json
        String jsonString = JSON.toJSONString(classrooms);
        //4. 返回数据给html页面
        response.setContentType("text/json;charset=UTF-8");
        response.getWriter().write(jsonString);

    }
    public void selectByCondition4(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("course selectByCondition");
        //1.接收品牌数据,获取json格式提交过来的数据
        request.setCharacterEncoding("UTF-8");
        BufferedReader reader = request.getReader();
        String params = reader.readLine();
        System.out.println(params);
        //2.json字符串转换为对象
        Classroom classroom = JSON.parseObject(params, Classroom.class);


        //2.调用service进行查询
        List<Classroom> classrooms = classroomService.selectByCondition4(classroom);
        //3.转为json
        String jsonString = JSON.toJSONString(classrooms);
        //4. 返回数据给html页面
        response.setContentType("text/json;charset=UTF-8");
        response.getWriter().write(jsonString);

    }


}
```
