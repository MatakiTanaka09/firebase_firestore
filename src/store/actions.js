import * as types from './mutation-types'
import { Firestore } from '../api/firebase/firestore'

const actions = {
    done: ({ state, commit }) => {
        console.log('actions:', state.route.params.id)
        commit('done')
    },
    // fetchLists: ({ commit }) => {
    // },
    //
    // addBook: ({ commit }) => {
    // },
    //
    // updateBook: ({ commit }) => {
    // },
    //
    // removeBook: ({ commit }) => {
    // },

}

export default actions
