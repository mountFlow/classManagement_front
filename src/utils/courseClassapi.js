import request from './request'

export function selectAllApi() {
    return request({
        url: "courseClass/selectAll",
        method: 'post',
        // data: param,
        // params:{
        //     data1
        // }
    })
}
export function addApi(param){
    return request({
        url:"courseClass/add",
        method:'post',
        data:param,
    })
}

export function deleteByIdApi(param){
    return request({
        url:"courseClass/deleteById",
        method:'post',
        data:param,
    })
}

