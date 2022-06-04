
import axios from "axios";

export function request(config) {

        const instance = axios.create({
            baseURL: 'http://192.168.1.4:5050',
            timeout: 5000
        });

        //请求拦截
        instance.interceptors.request.use(
            config=>{
               // console.log(config);
                //1、比如config中的一些信息不符合服务器的要求，必须经过变化后再传出去
                //2、比如每次发请求时，都希望再界面中显示请求的图标，可加动画
                //3、某些请求，例如登录，必须携带特殊信息，例如token
                return config;

            },error => {
                //console.log(error);
            }

        );
        //响应拦截
        instance.interceptors.response.use(
        res=>{

            return res.data.data;
        },
        err=>{
            console.log(err);
        });

        return instance(config);
}

// export function request(config) {
//     return new Promise((resolve, reject) => {
//         const instance = axios.create({
//             baseURL: 'http://192.168.1.4:5050',
//             timeout: 5000
//         });
//
//         //发送真正的网络请求
//         instance(config)
//             .then(res => {
//                 resolve(res)
//
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }
//
// export function request(config,success,failure) {
//     //1、创建axios实例
//     const instance = axios.create({
//         baseURL:'http://192.168.1.4:5050',
//         timeout: 5000
//     });
//
//     //发送真正的网络请求
//     instance(config).then(res=>{
//         // console.log(res);
//         success(res);
//     }).catch(err=>{
//         // console.log(err);
//         failure(err);
//     })
//
// }