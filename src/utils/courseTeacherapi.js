import request from './request'

export function selectAllApi() {
    return request({
        url: "courseTeacher/selectAll",
        method: 'post',
        // data: param,
        // params:{
        //     data1
        // }
    })
}
export function addApi(param){
    return request({
        url:"courseTeacher/add",
        method:'post',
        data:param,
    })
}


export function updateApi(param){
    return request({
        
        url:"courseTeacher/update",
        method:'post',
        data:param,
    })
}

export function deleteByIdApi(param){
    return request({
        url:"courseTeacher/deleteById",
        method:'post',
        data:param,
    })
}

export function deleteByIdsApi(param){
    return request({
        url:"courseTeacher/deleteByIds",
        method:'post',
        data:param,
    })
}

export function selectByConditionApi(param){
    return request({
        url:"courseTeacher/selectByCondition",
        method:'post',
        data:param,
    })
}
