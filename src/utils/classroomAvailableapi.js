import request from './request'

export function selectAllApi() {
    return request({
        url: "classroomAvailable/selectAll",
        method: 'post',
        // data: param,
        // params:{
        //     data1
        // }
    })
}
export function addApi(param){
    return request({
        url:"classroomAvailable/add",
        method:'post',
        data:param,
    })
}


export function deleteByIdApi(param){
    return request({
        url:"classroomAvailable/deleteById",
        method:'post',
        data:param,
    })
}


export function selectByConditionApi(param){
    return request({
        url:"classroomAvailable/selectByCondition",
        method:'post',
        data:param,
    })
}
