// pages/shoppingeditor/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //   selectItem:true,
    //   ok:"2寸4人",
    array:[{
        img:"images/quaner.jpg",
        images:"images/hoverquan.jpg",
        cake:"images/cake.jpg",
        num:1,
        spec: "2-4人(6寸)" 
    },{
        img: "images/quaner.jpg",
        cake: "images/cake.jpg",
        num: 2,
        spec: "2-4人(6寸)" 
    },{
        img: "images/quaner.jpg",
        cake: "images/cake.jpg",
        num: 3,
        spec: "2-4人(6寸)" 
    },{
        img: "images/quaner.jpg",
        cake: "images/cake.jpg",
        num: 4,
      
        spec: "2-4人(6寸)" 
   
    }],
  
    open: false,
    price:"345"
  },
  showitem: function () {
    this.setData({
      open: !this.data.open
    })
  },

    reduce:function(e){
        var _this = this
           var index = e.target.dataset.index
           var num = this.data.array[index].num
           if (this.data.array[index].num == 1){
                return false
           }else{
               var arr = this.data.array
                for(var i =0;i<arr.length;i++){
                    if(i == index){
                        arr[i].num = num-1
                    }
                }
                this.setData({
                    array: arr
                })
           }
    },
    add: function(e){
        var index = e.target.dataset.index
        var num = this.data.array[index].num
        var arr = this.data.array
        
        for (var i = 0; i < arr.length; i++) {
            if (i == index) {
                arr[i].num = num+1
            }
        }
        this.setData({
            array: arr
        })
    },
    // showitem:function(){
    //     var selectItem = this.data.selectItem;
    //     if (this.data.selectItem == true){
    //         this.setData({
    //             selectItem : false
    //         })
    //     }else{
    //         this.setData({
    //             selectItem : true
    //         })
    //     }
    // }

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