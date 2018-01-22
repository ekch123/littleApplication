// pages/order/ordersub/index.js
const date = new Date()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:'../images/address.png',
    address:'新增收货地址',
    location:'广东省广州市海珠区新港东路',
    dateValue:'2017-12-01',
    slottime:'14:00-17:00',
    picker1Value: 0,
    picker1Range: ['14:00-17:00', '09:00-12:00'],
    prompt:'提交订单后配送时间不可再修改',
    message:'',
    payPrice:'345',
    totalprice:0,
    cakes: [
      {
        comImg: '../images/cake3.png',
        cakename: '经典地中海蛋糕',
        spec: '2-4人分享（6寸）',
        candle: '数字蜡烛',
        price: '188',
        num: '1',
      },
      {
        comImg: '../images/cake3.png',
        cakename: '经典地中海蛋糕',
        spec: '2-4人分享（6寸）',
        candle: '数字蜡烛',
        price: '188',
        num: '1',
      }
    ]
  },
  datePickerBindchange: function (e) {
    this.setData({
      dateValue: e.detail.value
    })
  },
  normalPickerBindchange: function (e) {
    this.setData({
      picker1Value: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var arr = this.data.cakes;
   var prices = 0;
   for(var i = 0;i<arr.length;i++){
      prices += arr[i]['price']*arr[i]['num'];   
   }
   this.data.totalprice=prices;
   this.setData({
     totalprice:this.data.totalprice
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
