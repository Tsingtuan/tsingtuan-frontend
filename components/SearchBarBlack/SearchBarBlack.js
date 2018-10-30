// components/SearchBarBlack/SearchBarBlack.js
// components/SearchBar/Search_Bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabTitle:{
      type:String,
      value:"搜索历史预算"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
  },

  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    showInput: function () {
      this.setData({
        inputShowed: true
      });
    },
    hideInput: function () {
      this.setData({
        inputVal: "",
        inputShowed: false
      });
    },
    clearInput: function () {
      this.setData({
        inputVal: ""
      });
    },
    inputTyping: function (e) {
      this.setData({
        inputVal: e.detail.value
      });
    }
  }
})