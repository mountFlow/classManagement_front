import request from './request'

export function selectAllStudentsApi() {
    return request({
        url: "student/selectAllStudents",
        method: 'post',
        // data: param,
        // params:{
        //     data1
        // }
    })
}
export function addStudentApi(param){
    return request({
        url:"student/addStudent",
        method:'post',
        data:param,
    })
}



export function updateStudentApi(param){
    return request({
        
        url:"student/updateStudent",
        method:'post',
        data:param,
    })
}

export function deleteByIdApi(param){
    return request({
        url:"student/deleteStudent",
        method:'post',
        data:param,
    })
}

export function deleteByIdsApi(param){
    return request({
        url:"student/deleteStudents",
        method:'post',
        data:param,
    })
}

export function selectStudentsByConditionApi(param){
    return request({
        url:"student/selectStudentsByCondition",
        method:'post',
        data:param,
    })
}