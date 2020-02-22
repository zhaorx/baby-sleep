// mixins.js
export const commonMixin = {
  methods: {
    testMixin () {
      wx.showToast({
        title: 'mixin混入成功',
        icon: 'success',
        duration: 2000
      })
    }
  }
}
