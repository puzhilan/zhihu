Page({


  /**
   * 页面的初始数据
   */
  data: {
    imageslist:[]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:"http://127.0.0.1:3000/imageslist",
      method:"GET",
      success:(res)=>{
        console.log(res.data)
        this.setData({
          imageslist:res.data
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(2)
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(3)
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(4)
  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log(5 +"监听页面卸载")
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log(6 + "监听用户下拉动作")
  },


  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(7 + "监听用户上拉动作")
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log(8)
  }
})