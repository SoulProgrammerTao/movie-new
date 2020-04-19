// pages/search/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    q: "",
    mvList: []
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
  
  setq (e) {
    console.log(e)
    this.setData({q: e.detail.value})
  },
  getMvList () {
    //搜索电影
    wx.request({
      url: `https://douban.uieee.com/v2/movie/search`,
      method:'GET',
      data: {
        q: this.data.q
      },
      header:{
        "Content-Type":"json"
      },
      success: (res) => {
        this.setData({mvList: res.data.subjects})
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'hotList',
      success: (res) => {
        this.setData({mvList: res.data})
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