import axios from 'axios'

const baseURL = 'http://localhost:8080/brand_case_war_exploded/'
// 创建 axios 实例
const service = axios.create({
    baseURL: baseURL, // 请求地址前缀，将自动加在 url 前面
    timeout: 6000 // 请求超时时间
})

// axios请求拦截器
service.interceptors.request.use(config => {
    // if (localStorage.getItem('loginToken')) {
    //     // 请求统一设置header
    //     config.headers.Authorization = localStorage.getItem('loginToken')
    // }
    return config
// }, error => {
//     return Promise.reject(error)
// 
}
)

// axios响应拦截器
service.interceptors.response.use(response => {
    return response.data
}
// , error => {
//     // console.log('看一看', error.response)
//     const { status } = error.response
//     if (status === 401) { // token失效
//         Message.error('token失效，请重新登录')
//         // 清除token
//         localStorage.removeItem('loginToken')
//         router.push('/')
//     }
//     return Promise.reject(error)
// }
)

export default service 
