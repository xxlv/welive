//index.js
//获取应用实例
var app = getApp()
var liveData=[]

var util = require('../../utils/util.js')

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
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
  });

  setInterval(function(){
      console.log(liveData)
      liveData.push({
          nick:"Ghost",
          message:"发言数据这里"+Math.random(1,100000),
          date:util.formatTime(new Date())
      })

      if(liveData.length>44){
          liveData=[]
      }

      that.setData({
          liveData:liveData
      })


  },2333)
  }
})
