// pages/product/productDetailsIntroduce.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*无评论的图标*/
    img: "images/xiaolian.png",
    count:"150",
    comment: "images/comment.png",
    shopping:"images/shopping.png",
    /*初始的价格*/
    nowPrice: 0,
    /*购物车里面有几件商品*/
    shopNum: 0,
    cakeDetails: [],
    indicatorActiveColor:"#FFFFFF",
    indicatorColor:"rgba(255,255,255,.3)",

    cate: [
        {cateName: "包装好看"},
        {cateName: "好 吃"},
        {cateName: "物所超值"},
        {cateName: "有图评价"}
    ],
    /*评论数组*/
    data: [
        {
            photo: "images/photo.png",
            name: "张大鹏",
            update_time: "2017-10-12",
            message: "好吃不油腻好吃不油腻好吃不油腻好吃不油腻好吃不油腻好吃不油腻好吃不油腻好吃不油腻好吃不油腻",
            reply: '',
            img: [
                { imgUrl: "images/photo.png" },
                { imgUrl: "images/photo.png" }
            ]
        },
        {
            photo: "images/photo.png",
            name: "张大鹏",
            update_time: "2017-10-12",
            message: "好吃不油腻好吃不油腻好吃不油腻好吃不油腻好吃不油腻好吃不油腻",
            reply: "感谢你能喜欢",
            img: [
                { imgUrl: "images/photo.png" },
                { imgUrl: "images/photo.png" },
                { imgUrl: "images/photo.png" },
                { imgUrl: "images/photo.png" }                
            ]
        },
        {
            photo: "images/photo.png",
            name: "张大鹏",
            update_time: "2017-10-12",
            message: "好吃不油腻好吃不油腻好吃不油腻好吃不油腻好吃不油腻好吃不油腻",
            reply: "感谢你能喜欢",
            img: [
                { imgUrl: "images/photo.png" },
                { imgUrl: "images/photo.png" },
                { imgUrl: "images/photo.png" }
            ]
        }
    ],
    intriduceDate: [
        {
            title: "海洋的风味~清新的浪漫回忆",
            flavor: "海洋风巧克力蓝莓加草莓味",
            sweetness: "60%~80%的糖份",
            crowd: "适合5~30岁的年轻人群",
            retainFreshness: "保鲜期限30天",
            material:"鸡蛋、面粉、巧克力、蓝莓、草莓"
        }
    ],
    circular: true,
    autoplay: true,
    indicatorDots: true,
  },
  toAllComment:function(){
    wx.navigateTo({
        url:'../allComment/index'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
    onLoad: function (options) {
        var id = options.id
        var cakes = app.globalData.cakes;
        for(var i = 0;i<cakes.length;i++){
            if(id == cakes[i].id ){
                var arr = cakes[i];
                break;
            }
        }
        this.setData({
            cakeDetails: arr,
            nowPrice: arr.standards[0].member_price
        })
        var that = this;
        WxParse.wxParse('content', 'html', arr.content, that, 25);
    },
    bindshoping: function () {
      wx.navigateTo({
        url: '../../order/shopping/index',
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