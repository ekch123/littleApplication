// pages/integral/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cakes: [
      {
        id:'12',
        commodityimg:'images/dangao.png',
        commodityname:"海洋海风蛋糕",
        discount:'88.00',
        original:'188.00',
        integral:'3000'
      },
      {
        id: '13',
        commodityimg: 'images/dangao.png',
        commodityname: "海洋海风蛋糕",
        discount: '88.00',
        original: '188.00',
        integral: '3000'
      },
      {
        id: '14',
        commodityimg: 'images/dangao.png',
        commodityname: "海洋海风蛋糕",
        discount: '88.00',
        original: '188.00',
        integral: '3000'
      },
      {
        id: '18',
        commodityimg: 'images/dangao.png',
        commodityname: "海洋海风蛋糕",
        discount: '88.00',
        original: '188.00',
        integral: '3000'
      },
      {
        id: '19',
        commodityimg: 'images/dangao.png',
        commodityname: "海洋海风蛋糕",
        discount: '88.00',
        original: '188.00',
        integral: '3000'
      },
      {
        id: '45',
        commodityimg: 'images/dangao.png',
        commodityname: "海洋海风蛋糕",
        discount: '88.00',
        original: '188.00',
        integral: '3000'
      },
    ],
    showView: true
  },
  exchange: function (e) {
    var id=e.currentTarget.id;
    console.log(id);
    var that = this;
    that.setData({
      showView: (!that.data.showView),
    })
  },
  cancel: function () {
    var that = this;
    that.setData({
      showView: true
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