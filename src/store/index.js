import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    details: []
  },
  getters: {
    getList (state) {
      return state.list
    },
    getDetails (state) {
      return state.details
    }
  },
  mutations: {
    setList (state, value) {
      state.list = value
    },
    setDetails (state, value) {
      state.details = value
    }
  },
  actions: {
    setCocktailAction ({ commit }, state) {
      const axiosConfig = {
        method: 'get',
        url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c'
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e.data)
          // Now we have to store the returned data in a list and access the list in a for loop and display it on our homepage
          commit('setList', e.data)
        })
        .catch(e => console.log(e))
    },
    setDetailsAction ({ commit, state }, id) {
      const axiosConfig = {
        method: 'get',
        url: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e.data)
          // Now we have to store the returned data in a list and access the list in a for loop and display it on our homepage
          commit('setDetails', e.data)
        })
        .catch(e => console.log(e))
    }
  }
})
