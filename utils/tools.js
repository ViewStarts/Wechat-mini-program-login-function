const server='http://localhost:1337'

function setToken(token){
  wx.setStorageSync('token', token)
}
const getToken=(()=>{
  wx.getStorageSync('token')
})
const removeToken=()=>{
  wx.removeStorageSync('token')
}

// 网络请求 url data method
function httpRequest(url,data={},method='GET'){
  if(!url.startsWith('http')){
    url=server+url
  }
  const token=wx.getStorageSync('token')
  return new Promise((r,j)=>{
      wx.request({
        url,
        data,
        method,
        header:{
          token
        },
        success(res){
          r(res.data)
        },
        fail(e){
          j(e)
        }
      }) 
  })
}

// 图片处理 @param {*} url
function dalImg(url){
  if(url){
    if(url.startsWith('http')){
      return url
    }
    return server+url
  }
  return '/pages/images/picture/图片失效.jpg'
}

module.exports={
  setToken,
  getToken,
  removeToken,
  server,
  httpRequest,
  dalImg
}