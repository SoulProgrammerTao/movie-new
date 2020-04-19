// pages/index/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotList: [],
    comList: []
  },
  getHotList () {
    //获取豆瓣电影的电影列表信息
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      method:'GET',
      header:{
        "Content-Type":"json"
      },
      success: (res) => {
        this.setData({hotList: res.data.subjects})
        wx.setStorage({
          key: "hotList",
          data: this.data.hotList
        })
      }
    })
  },
  getComList () {
    //获取豆瓣电影的电影列表信息
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/coming_soon',
      method:'GET',
      header:{
        "Content-Type":"json"
      },
      success:(res) => {
        this.setData({comList: res.data.subjects})
        wx.setStorage({
          key: "comList",
          data: this.data.comList
        })
      }
    })
  },
  // 去电影详情页
  goDetail (e) {
    const item = e.currentTarget.dataset.item
    wx.setStorage({
      key: "detail",
      data: item
    })
    wx.navigateTo({
      url: '/pages/detail/main'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'hotList',
      success: (res) => {
        this.setData({hotList: res.data})
      },
      fail: () => {
        this.getHotList()
      }
    })
    wx.getStorage({
      key: 'comList',
      success: (res) => {
        this.setData({comList: res.data})
      },
      fail: () => {
        this.getComList()
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})