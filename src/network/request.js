import axios from "axios";

export function request(config){
//    1.创建axios的实例
    const instance = axios.create({
        baseURL:'/api',
        timeout:5000,
    })

//    2.axios的拦截器
//    请求拦截
    instance.interceptors.request.use(config=>{
        return config
    },err=>{
        return err
    })

//   响应拦截
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        return err
    })

    return instance(config)
}

