import request from './request'

export function selectAllApi() {
    return request({
        url: "classroomArrangement/selectAll",
        method: 'post',
        // data: param,
        // params:{
        //     data1
        // }
    })
}
export function addApi(param){
    return request({
        url:"classroomArrangement/add",
        method:'post',
        data:param,
    })
}


export function updateApi(param){
    return request({
        
        url:"classroomArrangement/update",
        method:'post',
        data:param,
    })
}

export function deleteByIdApi(param){
    return request({
        url:"classroomArrangement/deleteById",
        method:'post',
        data:param,
    })
}

export function deleteByIdsApi(param){
    return request({
        url:"classroomArrangement/deleteByIds",
        method:'post',
        data:param,
    })
}

export function selectByConditionApi(param){
    return request({
        url:"classroomArrangement/selectByCondition",
        method:'post',
        data:param,
    })
}
