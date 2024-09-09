const { fileApi, loadProductsAPI } = require("../../utils/api")
const {loadBannersAPI}=require("../../utils/api")
// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    page:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.loadDataFormServer()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.loadDataFormServer()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  // 文件上传
  async loadDataFormServer(){
    const res=await loadProductsAPI(this.data.page)
    this.setData({
      goods:[...this.data.goods,...res],
      page:this.data.page+1
    })
  }
})