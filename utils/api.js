// 这里放所有的网络请求
const {
  server,
  httpRequest,
  dalImg
} = require('../utils/tools')

// 轮播图接口
const loadBannersAPI = () => {
  return httpRequest('/api/v1/banners').then(res => {
    // 把数据处理成页面中可以直接使用的形式
    // console.log(res.data);
    return res.data.map((item) => {
        return {
          ...item,
          coverImage: dalImg(item.coverImage)
        }
      }
      //  return res.data.map((item) => ({  ...item, coverImage: dalImg(item.coverImage) }));
    )
  })
}

// 登录
const loginAPI = (userName, password) => {
  return httpRequest('/api/v1/auth/login', {
    userName,
    password
  }, 'POST').then((res) => {
    if (res.code == 0) {
      wx.showToast({
        title: res.data,
        icon: 'error',
      })
    } else {
      wx.setStorageSync('token', res.data)
      wx.showToast({
        title: '登录成功！',
        icon: 'success'
      });
      setTimeout(() => {
        wx.switchTab({
          url: '/pages/home/home',
        })
      }, 1000);
    }
  }).catch(() => {
    // 注册失败后展示轻提示
    wx.showToast({
      title: '登录失败，请稍后再试',
      icon: 'error',
    });
  })
}

// 注册
const regAPI = (userName, password) => {
  return httpRequest('/api/v1/auth/reg', {
    userName,
    password
  }, 'POST').then(res => {
    if (res.code == 0) {
      wx.showToast({
        title: res.data,
        icon: 'error',
      })
    } else {
      wx.showToast({
        title: '注册成功！',
        icon: 'success'
      });
      setTimeout(() => {
        wx.navigateTo({
          url: '/pages/login/login',
        });
      }, 1000); // 等待提示消失后再跳转
    }
  }).catch((e) => {
    // 注册失败后展示轻提示
    wx.showToast({
      title: '注册失败，请稍后再试',
      icon: 'error',
    });
  });
}

// 文件上传
const fileApi = (file) => {
  return httpRequest("/api/v1/common/upload_file", file, 'POST')
    .then((res) => {
      if (res.code == 0) {
        wx.showToast({
          title: res.data,
          icon: 'error',
        })
      } else {
        wx.showToast({
          title: '注册成功！',
          icon: 'success'
        });
        setTimeout(() => {
          wx.navigateTo({
            url: '/pages/login/login',
          });
        }, 1000); // 等待提示消失后再跳转
      }
    })
}

// 获取商品列表
function loadProductsAPI(page=1){
  return httpRequest('/api/v1/products',{
    page,
  }).then(res=>{
    return res.data.map(item=>({
      ...item,
      coverImage:dalImg(item.coverImage)
    }))
  })
}

// 获取详情
function loadGoodsByIdAPI(id){
  return httpRequest('/api/v1/products/'+id)
}

// 获取用户信息
function loadUserInfoAPI(){
  return httpRequest('/api/v1/user/info')
}

// 修改个人信息
function updateUserInfoAPI(data){
  return httpRequest('/api/v1/user/modify',data,"PUT")
}

module.exports = {
  loadBannersAPI,
  loginAPI,
  regAPI,
  fileApi,
  loadProductsAPI,
  loadGoodsByIdAPI,
  loadUserInfoAPI,
  updateUserInfoAPI
}