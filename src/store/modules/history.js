
const state = {
  history:[]
}

const mutations = {
  ADD_HISTORY: (state, obj) => {
    if(state.history.some(item => item.path === obj.path)) return
    state.history = [...state.history, obj]
  },
  DEL_HISTORY: (state, id) => {
    if(state.history.length > 1) {
      state.history.splice(id, 1)
    }
  }
}

const actions = {
  addHistory({ commit }, obj) {
    commit('ADD_HISTORY', obj)
  },

  delHistory({ commit }, id) {
    commit('DEL_HISTORY', id)
  }
}

export default {
  state,
  mutations,
  actions
}
