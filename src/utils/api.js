import request from './request'

export function selectAllTeachersApi() {
    return request({
        url: "teacher/selectAllTeachers",
        method: 'post',
        // data: param,
        // params:{
        //     data1
        // }
    })
}
export function addTeacherApi(param){
    return request({
        url:"teacher/addTeacher",
        method:'post',
        data:param,
    })
}


export function updateTeacherApi(param){
    return request({
        
        url:"teacher/updateTeacher",
        method:'post',
        data:param,
    })
}

export function deleteByIdApi(param){
    return request({
        url:"teacher/deleteTeacher",
        method:'post',
        data:param,
    })
}

export function deleteByIdsApi(param){
    return request({
        url:"teacher/deleteTeachers",
        method:'post',
        data:param,
    })
}

export function selectTeachersByConditionApi(param){
    return request({
        url:"teacher/selectTeachersByCondition",
        method:'post',
        data:param,
    })
}
