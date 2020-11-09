const state = {
  screenWH: {
    maxW: 0,
    maxH: 0
  },
}
const getters = {
  getScreenWH(state) {
    return state.screenWH;
  },
}
const mutations = {
  setScreenWH(state, payload) {
    state.screenWH = payload;
  },
}

export default {
  state,
  getters,
  mutations
}