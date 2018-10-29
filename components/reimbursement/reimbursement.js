// components/reimbursement/reimbursement.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    date: "2016-09-01",
    time: "12:01",
    isAgree: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindDateChange: function (e) {
      this.setData({
        date: e.detail.value
      })
    },
    bindAgreeChange: function (e) {
      this.setData({
        isAgree: !!e.detail.value.length
      });
    },
  }
})
