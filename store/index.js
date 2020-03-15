import Vuex from 'vuex'
import {
  vuexfireMutations,
  firestoreAction
} from 'vuexfire';


const createStore = () => {
  return new Vuex.Store({
    state: {
      schools: [],
    },
    mutations: {
      ...vuexfireMutations
    },
    actions: {
      setSchoolsRef: firestoreAction(({
        bindFirebaseRef
      }, ref) => {
        bindFirebaseRef('schools', ref)
      })
    },
    getters: {
      getUsers: (state) => {
        return state.schools
      },
    },
  })
}

export default createStore
