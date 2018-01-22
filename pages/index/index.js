//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    positionIcon:"images/position.png",
    positionName:"广州",
    strawberryLove:"images/sLove.png",
    cates: [],
    cakes: [],
    active:0
    
    
  },
  //跳转商品详情页
  toProductDetails: function () {
      wx.navigateTo({
          url: ("productDetails/index")
      })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //加载获取全局数据cates cakes 
  onLoad:function(){
    this.setData({
        cates: app.globalData.cates,
        cakes: app.globalData.cakes
      })
  },
  //选中
  choose: function (options) {
    var cate_id = options.target.dataset.value;
    if (cate_id == 0) {
      this.setData({
        cakes: app.globalData.cakes,
      })
    } else {
      var temps = app.globalData.cakes
      var arr = []
      for (var i = 0; i < temps.length; i++) {
        if (temps[i]['productcate_id'] == cate_id) {
          arr.push(temps[i])
        }
      }
      this.setData({
        cakes: arr
      })
    }
    this.setData({
      active:cate_id
    })
  },
    
})
