import Vuex from 'vuex'

import auth from '@/store/Auth'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth
    }
  })
}

export default createStore
