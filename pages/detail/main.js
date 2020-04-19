// pages/detail/main.js
Page({

  collection () {
    this.setData({isWant: !this.data.isWant})
    if (this.data.isWant && !this.data.colList.find(item => item.id === this.data.detail.id)) {
      this.data.colList.push(this.data.detail)
    }
    if (!this.data.isWant) {
      const index = this.data.colList.findIndex(item => item.id === this.data.detail.id)
      this.data.colList.splice(index, 1)
    }
  },
  buy () {
    this.data.ordList.push(this.data.detail)
    wx.setStorage({
      key: 'ordList',
      data: this.data.ordList
    })
    wx.navigateTo({
      url: `/pages/pay/main`
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    isWant: false,
    colList: [],
    ordList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({isWant: false})
    wx.getStorage({
      key: 'detail',
      success: (res) => {
        this.setData({detail: res.data})
      },
    })
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
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log(this.data.colList)
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