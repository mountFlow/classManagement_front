import request from './request'

export function selectAll3Api() {
    return request({
        url: "classroom/selectAll3",
        method: 'post',
        // data: param,
        // params:{
        //     data1
        // }
    })
}
export function selectAll3LentApi() {
    return request({
        url: "classroom/selectAll3Lent",
        method: 'post',
        // data: param,
        // params:{
        //     data1
        // }
    })
}
export function selectAll4LentApi() {
    return request({
        url: "classroom/selectAll4Lent",
        method: 'post',
        // data: param,
        // params:{
        //     data1
        // }
    })
}
export function selectAllApi() {
    return request({
        url: "classroom/selectAll",
        method: 'post',
        // data: param,
        // params:{
        //     data1
        // }
    })
}

export function selectAll4Api() {
    return request({
        url: "classroom/selectAll4",
        method: 'post',
        // data: param,
        // params:{
        //     data1
        // }
    })
}
export function add3Api(param){
    return request({
        url:"classroom/add3",
        method:'post',
        data:param,
    })
}
export function add4Api(param){
    return request({
        url:"classroom/add4",
        method:'post',
        data:param,
    })
}


export function updateApi(param){
    return request({
        
        url:"classroom/update",
        method:'post',
        data:param,
    })
}

export function deleteByIdApi(param){
    return request({
        url:"classroom/deleteById",
        method:'post',
        data:param,
    })
}

export function deleteByIdsApi(param){
    return request({
        url:"classroom/deleteByIds",
        method:'post',
        data:param,
    })
}

export function selectByCondition3Api(param){
    return request({
        url:"classroom/selectByCondition3",
        method:'post',
        data:param,
    })
}
export function selectByCondition4Api(param){
    return request({
        url:"classroom/selectByCondition4",
        method:'post',
        data:param,
    })
}
