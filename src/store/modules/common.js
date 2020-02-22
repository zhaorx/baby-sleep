const state = {
  // token: wx.getStorageSync('token') ? wx.getStorageSync('token') : '',
  // userInfo: wx.getStorageSync('userInfo') ? JSON.parse(wx.getStorageSync('userInfo')) : { name: '' }
}

const getters = {
  token: state => state.token,
  userInfo: state => state.userInfo
}

const mutations = {
  setToken (state, data) {
    console.log('setToken', data)
    wx.setStorageSync('token', data)
    state.token = wx.getStorageSync('token')
  },
  setUserInfo (state, data) {
    localStorage.setItem('userInfo', JSON.stringify(data))
    state.userInfo = JSON.parse(localStorage.getItem('userInfo'))
  }
}

const actions = {}

export default {
  state,
  getters,
  actions,
  mutations
}
