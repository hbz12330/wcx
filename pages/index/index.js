//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎登录竭诚网络',
    userInfo: {},
    hasUserInfo: false,
    tts:"",
    list:"",
    lunbo:""
  },
  //点击跳转
  dlmdsy:function(){
  wx.navigateTo({
    url:"../logs/logs"
  })
  },
  //事件处理函数
  onLoad: function () {
    wx.request({
      url: 'http://192.168.1.3:3000/lb',
      success: (res) => {
        console.log(res.data.length)
        this.setData({
          lunbo: res.data
        })
      }
    })
    wx.request({
      url: 'http://192.168.1.3:3000/img',
      success:(res)=>{
        console.log(res.data.length)
        this.setData({
         tts:res.data
       })
      }
    })
    wx.request({
      url: 'http://192.168.1.3:3000/yd',
      success: (res) => {
        this.setData({
          list: res.data
        })
      }
    })
  },
})
