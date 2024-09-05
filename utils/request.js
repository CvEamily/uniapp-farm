import { store } from '../store/store.js';
import config from './config.js'
// import "./page.js"

export default (url, data={}, method="GET", header= {  'Authorization': store.token},host=0) => {
    return new Promise ((resolve, reject) => {
        // wx.showLoading({
        //   title: '加载中',
        // })
        let requestHost = config.host
        if(host==0){
          requestHost = config.host
        } else if(host==1){
          requestHost = config.host1
        }
        wx.request({
            url: requestHost + url,
            data,
            method,
            header,
            success: (res) => {
                wx.hideLoading({
                  success: (res) => {},
                })
                // console.log(res.statusCode);
                // console.log(res.statusCode  == 404, '@@@');
                if (res.statusCode == 404) {
                  wx.navigateBack()
                  wx.nextTick(()=>{
                    wx.showToast({
                      title: '404页面已删除',
                      icon: 'none',
                      duration: 5000
                    })
                  })
                  // setTimeout(()=>{}, 1500)
                }
                if (res.data.status == 200) {
                    if(res.data.token){
                        store.updateToken(res.data.token)
                    }
                }
                else if (res.data.status == 205) {
                }
                // else if (res.data.status == 999) {
                //     store.updateToken('')
                //     store.updataTabbar('d')
                //     // wx.showToast({
                //     //   title: '登录过期',
                //     //   icon: 'none',
                //     //   mask: true
                //     // })
                //     // setTimeout(() => {                     
                //       wx.navigateTo({
                //         url: '/pages/login/login',
                //       })
                //     // }, 1500);
                // }
                else {
                    if (res.data.msg !== '') {
                        wx.showToast({
                          title: res.data.msg || '请求失败',
                          icon: 'none'
                        })
                    }
                }
                resolve(res)
            },
            fail: (err) => {
                // wx.hideLoading({
                //     success: (res) => {},
                // })
                wx.showToast({
                  title: '请求失败',
                  icon: 'none'
                })
                reject(err)
            }
          })
    })
}