//index.js
//获取应用实例
var app = getApp()
var liveData=[]

var util = require('../../utils/util.js')


wx.connectSocket({
    url: 'ws://127.0.0.1:8080'
})
wx.onSocketOpen(function(){
    console.log('Socket open')
})


wx.onSocketMessage(function(res) {

    var data=JSON.parse(res.data)

    liveData.push(
        {
          nick:data.nick,
          message:data.message,
          date:data.date
      })
})


Page({
  data: {
    liveData:liveData
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../live/live'

    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
  });

  setInterval(function(){

      if(liveData.length>44){
          liveData=[]
      }
      that.setData({
          liveData:liveData
      })
  },2333)


  }
})
