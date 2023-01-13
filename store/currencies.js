export const state = () => ({
  currencies: [],
})

export const mutations = {
  SET_CURRENCIES (state, payload) {
    state.currencies = payload
  },
}

export const actions = {
  async getCurrency ({ commit }) {
    const { data } = await this.$api.currencies.getCurrencies()
    commit('SET_CURRENCIES', data)
    return data
  }
}

export const getters = {
  getCurrencies: state => state.currencies || []
}
