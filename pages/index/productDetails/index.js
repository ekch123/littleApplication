// pages/product/product.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cakeDetails: [],
    nowPrice: 0,
    num: 1,
    standard_id: 0,
    active_number: 0,
    indicatorDots: false,
    circular: false
  },
  addToCart: function () {
    wx.navigateTo({
      url: '../noComment/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cakeDetails: app.globalData.cakes[options.index],
      nowPrice: app.globalData.cakes[options.index].standards[0].member_price,
      standard_id: app.globalData.cakes[options.index].standards[0].id,

    })
  },
  change: function (e) {
    //console.log(e)
    var index = e.target.dataset.index
    this.setData({
      nowPrice: this.data.cakeDetails.standards[index].member_price,
      standard_id: this.data.cakeDetails.standards[index].id,
      active_number: index
    })
  },
  add: function (e) {
    //console.log(this.data.cakeDetails)
    this.setData({
      num: this.data.num + 1
    });
  },
  reduce: function (e) {
    if (this.data.num == 1) {
      return false;
    }
    this.setData({
      num: this.data.num - 1
    });
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