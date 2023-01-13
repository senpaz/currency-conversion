export default $axios => ({
  async getCurrencies() {
    return await $axios.get('/daily_json.js')
  }
})
