// pages/member/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      {
        id:'1',
        img:'images/cake1.png',
        name:'海洋海风蛋糕',
        member:'会员优惠价',
        discount:'88.00',
        originalPrice:'188.00',
      },
      {
        id: '2',
        img: 'images/cake1.png',
        name: '海洋海风蛋糕',
        member: '会员优惠价',
        discount: '88.00',
        originalPrice: '188.00'
      },
      {
        id: '3',
        img: 'images/cake1.png',
        name: '海洋海风蛋糕',
        member: '会员优惠价',
        discount: '88.00',
        originalPrice: '188.00'
      },
      {
        id: '4',
        img: 'images/cake1.png',
        name: '海洋海风蛋糕',
        member: '会员优惠价',
        discount: '88.00',
        originalPrice: '188.00'
      },
      {
        id: '5',
        img: 'images/cake1.png',
        name: '海洋海风蛋糕',
        member: '会员优惠价',
        discount: '88.00',
        originalPrice: '188.00'
      },
      {
        id: '6',
        img: 'images/cake1.png',
        name: '海洋海风蛋糕',
        member: '会员优惠价',
        discount: '88.00',
        originalPrice: '188.00'
      },
      {
        id: '7',
        img: 'images/cake1.png',
        name: '海洋海风蛋糕',
        member: '会员优惠价',
        discount: '88.00',
        originalPrice: '188.00'
      },
      {
        id: '8',
        img: 'images/cake1.png',
        name: '海洋海风蛋糕',
        member: '会员优惠价',
        discount: '88.00',
        originalPrice: '188.00'
      }
    ],
    showView: true
  },
exchange: function(e) {
    var id = e.currentTarget.id;
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