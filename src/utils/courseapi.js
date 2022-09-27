import request from './request'

export function selectAllApi() {
    return request({
        url: "course/selectAll",
        method: 'post',
        // data: param,
        // params:{
        //     data1
        // }
    })
}
export function addApi(param){
    return request({
        url:"course/add",
        method:'post',
        data:param,
    })
}


export function updateApi(param){
    return request({
        
        url:"course/update",
        method:'post',
        data:param,
    })
}

export function deleteByIdApi(param){
    return request({
        url:"course/deleteById",
        method:'post',
        data:param,
    })
}

export function deleteByIdsApi(param){
    return request({
        url:"course/deleteByIds",
        method:'post',
        data:param,
    })
}

export function selectByConditionApi(param){
    return request({
        url:"course/selectByCondition",
        method:'post',
        data:param,
    })
}
