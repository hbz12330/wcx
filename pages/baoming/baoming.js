// pages/baoming/baoming.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:"",
    jg:"",
    csd:"",
    jqd:"",
    javascript:"",
    vue:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
        url: 'http://192.168.1.3:3000/bw',
        success:(res)=>{
         this.setData({
           list:res.data
         })
        }
      }),
      wx.request({
        url: 'http://192.168.1.3:3000/yd',
        success:(res)=>{
          this.setData({
            jg:res.data
          })
        }
      }),
        wx.request({
          url: 'http://192.168.1.3:3000/csd',
          success: (res) => {
            this.setData({
              csd: res.data
            })
          }
        }),
        wx.request({
          url: 'http://192.168.1.3:3000/jqsd',
          success: (res) => {
            this.setData({
              jqd: res.data
            })
          }
        }),
        wx.request({
          url: 'http://192.168.1.3:3000/jsd',
          success: (res) => {
            this.setData({
              javascript: res.data
            })
          }
        }),
      wx.request({
        url: 'http://192.168.1.3:3000/vud',
        success: (res) => {
          this.setData({
            vue: res.data
          })
        }
      }),
        wx.request({
          url: 'http://192.168.1.3:3000/msd',
          success: (res) => {
            this.setData({
             msd: res.data
            })
          }
        })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
   wx.showNavigationBarLoading();
   var that=this;
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
   var that=this;
    wx.showLoading({
      title: '玩命加载中',
    })
    wx.request({
      url: 'http://192.168.1.3:3000/bw',
      success: (res) => {
        this.setData({
          list: res.data
        })
      }
    }),
      wx.request({
        url: 'http://192.168.1.3:3000/yd',
        success: (res) => {
          this.setData({
            jg: res.data
          })
        }
      }),
      wx.request({
        url: 'http://192.168.1.3:3000/csd',
        success: (res) => {
          this.setData({
            csd: res.data
          })
        }
      }),
      wx.request({
        url: 'http://192.168.1.3:3000/jqsd',
        success: (res) => {
          this.setData({
            jqd: res.data
          })
        }
      }),
      wx.request({
        url: 'http://192.168.1.3:3000/jsd',
        success: (res) => {
          this.setData({
            javascript: res.data
          })
        }
      }),
      wx.request({
        url: 'http://192.168.1.3:3000/vud',
        success: (res) => {
          this.setData({
            vue: res.data
          })
        }
      }),
      wx.request({
        url: 'http://192.168.1.3:3000/msd',
        success: (res) => {
          this.setData({
            msd: res.data
          })
          wx.hideLoading()
        }
      })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})