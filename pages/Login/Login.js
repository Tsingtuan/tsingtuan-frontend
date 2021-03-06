const request = require("../..//utils/http");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showTopTips: false,
        University: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        //请求所有大学信息
        //传入组件
        request.GET("/getAllUniversity", {}).then(res => {
            this.setData({
                University: res.data.result
            })
        }).catch(err => {
            console.error(err);
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    ChangeTips: function (e) {
        //通过事件接收
        this.setData({
            showTopTips: e.detail.showTopTips
        })
    }
})