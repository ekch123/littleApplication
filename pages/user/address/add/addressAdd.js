const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '海珠区']
  },
  // 电话号码验证
  phoneBlur:function(e){
    let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
    let a = phoneReg.test(e.detail.value)
    if(!a){
      wx.showModal({
        title: '提示',
        content: '请输入有效号码',
        showCancel:false
      })
      return false
    }
  },
  //提交收货地址
  addressSubmit:function(e){
    if(e.detail.value.lxr.length == 0){
        wx.showModal({
          title: '提示',
          content: '请输入联系人',
          showCancel:false
        })
    } else if(e.detail.value.phone.length == 0){
      wx.showModal({
        title: '提示',
        content: '请输入电话号码',
        showCancel: false
      })
    } else if (e.detail.value.zone.length == 0){
      wx.showModal({
        title: '提示',
        content: '请选择地区',
        showCancel: false
      })
    } else if (e.detail.value.address.length == 0){
      wx.showModal({
        title: '提示',
        content: '请输入详细地址',
        showCancel: false
      })
    } else{
      console.log(app)
      wx.request({
        
        url: 'http://cake.com/index/mine/addAddress',

        data:{
          data:e.detail.value
        },
        success:(res)=>{
          console.log(res)
        }
      })
    }
    
  },

  bindRegionChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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