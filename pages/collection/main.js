// pages/collection/main.js
Page({
  
  buy (e) {
    const item = e.target.dataset.item
    const index = e.target.dataset.index
    wx.setStorage({
      key: "detail",
      data: item
    })
    this.data.ordList.push(item)
    wx.setStorage({
      key: 'ordList',
      data: this.data.ordList
    })
    wx.navigateTo({
      url: `/pages/pay/main`
    })
    this.data.colList.splice(index, 1)
  },

  /**
   * 页面的初始数据
   */
  data: {
    colList: [],
    ordList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'colList',
      success: (res) => {
        this.setData({colList: res.data})
      }
    })
    wx.getStorage({
      key: 'ordList',
      success: (res) => {
        this.setData({ordList: res.data})
      }
    })

  },
    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.getStorage({
      key: 'colList',
      success: (res) => {
        this.setData({colList: res.data})
      }
    })
    wx.getStorage({
      key: 'ordList',
      success: (res) => {
        this.setData({ordList: res.data})
      }
    })
  },
  // 监听页面隐藏
  onHide: function () {
    wx.setStorage({
      key: 'colList',
      data: this.data.colList
    })
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.setStorage({
      key: 'colList',
      data: this.data.colList
    })

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