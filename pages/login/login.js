const { loginAPI } = require("../../utils/api")
const { setToken } = require("../../utils/tools")

// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
  },
// 这里拿到输入的用户名和密码
handleUsernameInput(e){
  this.setData({
    username:e.detail.value
  })
}, 
handlePasswordInput(e){
  this.setData({
    password:e.detail.value
  })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  // 此处是小程序的本地存储
  loginHandle(){
    loginAPI(this.data.username,this.data.password)
  //  wx.setStorageSync('token', '123')
  // 跳转到navbar界面
  //  wx.switchTab({
  //    url: '/pages/my/my',
  //  })
  }
})