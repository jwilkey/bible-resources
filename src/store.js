import { createStore } from 'vuex'
import storeGen from 'vuex-store-gen'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const state = {
}

const storeOperations = storeGen(state)

export default createStore({
  state,
  ...storeOperations,
  plugins: [vuexLocal.plugin]
})
