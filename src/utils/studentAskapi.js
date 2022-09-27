import request from './request'

export function selectAllApi() {
    return request({
        url: "studentAsk/selectAll",
        method: 'post',
        // data: param,
        // params:{
        //     data1
        // }
    })
}

export function selectTotalApi() {
    return request({
        url: "studentAsk/selectTotal",
        method: 'post',
        // data: param,
        // params:{
        //     data1
        // }
    })
}
export function addApi(param){
    return request({
        url:"studentAsk/add",
        method:'post',
        data:param,
    })
}

export function updateApi(param){
    return request({
        url:"studentAsk/update",
        method:'post',
        data:param,
    })
}



export function deleteByIdApi(param){
    return request({
        url:"studentAsk/deleteById",
        method:'post',
        data:param,
    })
}


export function selectByConditionApi(param){
    return request({
        url:"studentAsk/selectByCondition",
        method:'post',
        data:param,
    })
}
