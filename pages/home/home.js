const { loadBannersAPI } = require("../../utils/api")

// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 分类
    banner:[
      {id:1,img:'/pages/images/img/新闻公告.png',name:'公告',path:'announcement'},
      {id:2,img:'/pages/images/img/资讯 (2).png',name:'资讯',path:'information'},
      {id:3,img:'/pages/images/img/活动有礼.png',name:'活动',path:'activity'},
      {id:4,img:'/pages/images/img/论坛中心.png',name:'论坛',path:'forum'},
      {id:5,img:'/pages/images/img/商城.png',name:'商城',path:'shopping'},
      {id:6,img:'/pages/images/img/纠结.png',name:'动漫',path:'cartoon'},
  ],
  loadlist:[],
  page:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.list()
    loadBannersAPI();
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
   this.setData({
     page:this.data.page+1
   })
    this.list()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  
  // 列表
  list:function(){
    wx.request({
      url: 'http://localhost:1337/api/v1/products',
      method:'GET',
      data:{
        page:this.data.page,
        per:10,
      },
      success:((res)=>{
        const newData = this.data.loadlist.concat(res.data.data);
        this.setData({
          loadlist:newData
        })
      })
    })
  },
  // 跳转小页面
  tolist(e){
    const item=e.currentTarget.dataset.item
    const path=`/pages/Views/${item.path}/${item.path}`
    wx.navigateTo({
      url: path,
    })
  },
})