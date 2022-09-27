import request from './request'

export function selectAllClassesApi() {
    return request({
        url: "class/selectAllClasses",
        method: 'post',
        // data: param,
        // params:{
        //     data1
        // }
    })
}
export function addClassApi(param){
    return request({
        url:"class/addClass",
        method:'post',
        data:param,
    })
}


export function updateClassApi(param){
    return request({
        
        url:"class/updateClass",
        method:'post',
        data:param,
    })
}

export function deleteByIdApi(param){
    return request({
        url:"class/deleteClass",
        method:'post',
        data:param,
    })
}

export function deleteByIdsApi(param){
    return request({
        url:"class/deleteClasses",
        method:'post',
        data:param,
    })
}

export function selectClassesByConditionApi(param){
    return request({
        url:"class/selectClassesByCondition",
        method:'post',
        data:param,
    })
}
