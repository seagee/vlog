<template>

      <MainTabBar></MainTabBar>

</template>
<script>
import MainTabBar from 'components/MainTabBar'
import {INCREMENT} from "./store/mutations-types";
// import axios from "axios";

import {request} from "./network/request";

export default {
    name:'App',
    components:{
        MainTabBar

    }
  }


// //axios 测试 案例1
// axios({
//       url:'http://192.168.1.4:5050/api/Member/view',
//       method:'get',
//       params:{
//             member_id : 1
//       }
//
// }).then(res=>{
//       console.log(res);
// })
//
// //axios 测试 案例2
// axios.all([
//       axios({
//         url:'http://192.168.1.4:5050/api/Member/view',
//         method:'get',
//         params:{
//               member_id : 1
//         }
// }),
//       axios({
//             url:'http://192.168.1.4:5050/api/Member/view',
//             method:'get',
//             params:{
//                   member_id : 1
//             }
//
//       }),
//
// ]).then(res=>{
//       console.log(res);
// })
// //axios 测试 案例3
// axios.all([
//       axios({
//             url:'http://192.168.1.4:5050/api/Member/view',
//             method:'get',
//             params:{
//                   member_id : 1
//             }
//       }),
//       axios({
//             url:'http://192.168.1.4:5050/api/Member/view',
//             method:'get',
//             params:{
//                   member_id : 1
//             }
//
//       }),
//
// ]).then(axios.spread((res1,res2) =>{
//       console.log(res1);
//       console.log(res2);
// }))


      //测试4
      //
      // axios.defaults.baseURL = 'http://192.168.1.4:5050'
      //
      // axios.defaults.timeout = 5000
      //
      // //axios 测试 案例3
      // axios.all([
      //       axios({
      //             url:'/api/Member/view',
      //             method:'get',
      //             params:{
      //                   member_id : 1
      //             }
      //       }),
      //       axios({
      //             url:'/api/Member/view',
      //             method:'get',
      //             params:{
      //                   member_id : 1
      //             }
      //
      //       }),
      //
      // ]).then(axios.spread((res1,res2) =>{
      //       console.log(res1);
      //       console.log(res2);
      // }))


      //测试5

      // const instance = axios.create({
      //       baseURL:'http://192.168.1.4:5050',
      //       timeout: 5000
      // })
      //
      // instance({
      //       url:'/api/Member/view',
      //       method:'get',
      //       params:{
      //             member_id : 1
      //       }
      // }).then(res=>{
      //       console.log(res);
      // })
      //
      // const instance1 = axios.create({
      //       baseURL:'http://192.168.1.4:5050',
      //       timeout: 5000
      // })
      //封装后的第一个做法
      // request({
      //       url:'/api/Member/view',
      //       method:'get',
      //       params:{
      //             member_id : 1
      //       }},
      //         res =>{
      //               console.log(res);
      //         },
      //         err =>{
      //               console.log(err);
      //         }
      //
      //
      //       )
      // //封装后的第二个做法
      // request({
      //       baseConfig:{
      //
      //       },
      //       success:function (res) {
      //
      //       },
      //       failure:function (err) {
      //
      //       }
      // })

      //封装后的第三个做法
      request({
            url:'/api/Member/view',
            method:'get',
            params:{
                  member_id : 1
            }
      }).then(res=>{
             console.log(res);
      }).catch(err=>{
            //console.log(err);
      })


</script>
<style>
@import "assets/css/base.css";
</style>
