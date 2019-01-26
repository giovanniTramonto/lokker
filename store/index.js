import Vuex from 'vuex'

import Auth from '@/store/Auth'

const createStore = () => {
  return {
    modules: {
      Auth
    }
  }
}

export default createStore
