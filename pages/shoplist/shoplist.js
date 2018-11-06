// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList:[],
    pageIndex:0,
    pageSize:8,
    hasMore:true
  },

  
  loadMore:function(){
    wx.request({
      url:"http://127.0.0.1:3000/produts",
      data:{
        pno:++this.data.pageIndex,
        pageSize:this.data.pageSize
      },
      success:(res)=>{
        var pageCount = res.data.pageCount;
        if(this.data.pageIndex>=pageCount){
          this.setData({
            hasMore:false
          })
        }
        var rows = this.data.shopList.concat(res.data.data);
        this.setData({
          shopList:rows
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
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
    this.setData({
      pageIndex:0,
      shopList:[],
      hasMore:true
    })
    this.loadMore();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },


  showDetail:function(e){
    var pid=e.target.dataset.pid;
    console.log(pid)
    /* 
    wx.redirectTo({
      url:"/pages/detail/detail"
    })
    */
    
    wx.navigateTo({
      url:"/pages/detail/detail"
    });
    
    /*
    wx.reLaunch({
      url:"/pages/detail/detail?pid="+pid
    });
    */
  }
})