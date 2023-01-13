import currencies from './currencies'

export default $axios => ({
  currencies: currencies($axios)
})
