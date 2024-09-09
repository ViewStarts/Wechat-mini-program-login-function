// pages/my/my.js
const { loadUserInfoAPI } = require('../../utils/api')
const {removeToken}=require('../../utils/tools')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
   this.loadUserInfoFormServer()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 在这里判断是否已经登录
    if(wx.getStorageSync('token')){
      this.loadUserInfoFormServer()
    }else{
      wx.redirectTo({
        url: '/pages/login/login',
      })
    }
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  tologin(){
    // wx.removeStorageSync('token')
    removeToken()
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  loadUserInfoFormServer(){
    loadUserInfoAPI()
    .then(res=>{
      // console.log(res);
      this.setData({
        info:res.data
      })
    })
  }
})