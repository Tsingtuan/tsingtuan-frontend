// pages/Budget-purchase-reimburesement/Budget-purchase-reimbursement.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
       tabs:["预算","采购","报销"],
       tabTitles:"搜索历史预算",
       activeIndex:0,
       sliderOffset:0,
       slideLeft:0,
       purchase:["体育用品","海报打印","啤酒饮料矿泉水","书包文具","休闲零食"],
       purchaseInfo:[
         {
           title:'懒熊体育',
           items:[
             {
               name:'懒熊体育1',
               subName:'懒熊体育 - 拳套 护具 双节棍',
               imageSrc: ['/images/quantao.jpg', '/images/huju.jpg','/images/shuangjiegun.jpg'],
               location:'浙江省宁波市江北区',
               distance:200
             }
           ]
         },
         {
           title: '海报打印',
           items: [
             {
               name: '海报打印1',
               subName: '海报打印 - 黑白 全彩',
               imageSrc: ['/images/heibai.jpg','/images/caise.jpg'],
               location: '北京市五道口',
               distance: 100
             }
           ]
         },
         {
           title: '啤酒饮料矿泉水',
           items: [
             {
               name: '农夫山泉',
               subName: '农夫山泉 - 大瓶 小瓶 超小瓶',
               imageSrc: ['/images/big.jpg', '/images/small.jpg','/images/mini.jpg'],
               location: '上海市浦东新区',
               distance: 50
             },
             {
               name: '康师傅',
               subName: '康师傅 - 红茶 绿茶',
               imageSrc: ['/images/redCha.jpg','/images/blueCha.jpg'],
               location: '上海市浦东新区',
               distance: 50
             },
             {
               name: '可口可乐',
               subName: '可口可乐 - 实惠装 家庭组合 罐装',
               imageSrc: ['/images/shihui.jpg', '/images/jiating.jpg','/images/guanzhuang.jpg'],
               location: '上海市浦东新区',
               distance: 50
             }
           ]
         }
       ],
    showReim:false,
    showList:true, 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      wx.getSystemInfo({
        success: function(res) {
          that.setData({
            sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
            sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
          })
        },
      })
  },
  tabClick:function(e){
    if (e.currentTarget.id == 0) {
      this.setData({
        tabTitles:"搜索历史预算",
      })
    } else if (e.currentTarget.id == 1) {
      this.setData({
        tabTitles:"搜索采购预算",
      })
    } else {
      this.setData({
        tabTitles:"搜索报销预算",
      })
    }
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id,
      showReim: false,
      showList: true, 
    });
  },
  detailInto:function(){
    this.setData({
      showReim: true,
      showList: false, 
    })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})