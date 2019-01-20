import Vue from 'vue'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash-es'
import Firestore from '@/api/firebase/firestore'
import initialState from '@/store/initialState'
import * as types from '@/store/mutation-types'

Vue.use(Vuex)

const namespaced = true

// const state = cloneDeep(initialState)
const state = {
    bookData: [],
    user: {},
    status: true
}

const actions = {
    changeBorrowable({ commit }, payload) {
        commit(types.CHANGE_BORROWABLE, payload)
    },
    fetchAllBooks({ commit }, palyload) {
        commit(types.FETCH_ALL_BOOK, payload)
    },
    setQueryParams({ commit, state }, { queryParams }) {
        commit(types.SET_BOOK_QUERY, { queryParams })
    }
}

const mutations = {
    onAuthStateChanged(state, user) {
        state.user = user;
    },
    onUserStatusChanged(state, status) {
        state.status = status;
    },
    bookDataChanged(state, bookData) {
        state.bookData = bookData;
    },
    [types.CHANGE_BORROWABLE](state, payload) {
        const index = state.data.findIndex(el => el.id == payload.id)
        if(index != -1) {
            state.data[index].borrowable = !state.data[index].borrowable
            console.log(state.data[index].borrowable)
        }
    },
    [types.SET_BOOK_QUERY](state, { queryParams }) {
        Object.assign(state.queryParams, queryParams)
    }
}

const getters = {
    all: state => state.data,
    user: state => state.user,
    isSignedIn: state => state.status,
    bookData: state => state.bookData,
    searchBookById: state => {
        return function(_id) {
            let book = state.bookData.find(el => el.id === _id)
            if(book) {
                return book
            }
            console.log("book not found")
        }
    },
}

// export default {
//     namespaced,
//     state,
//     getters,
//     actions,
//     mutations
// }

const store = new Vuex.Store({
    namespaced,
    state,
    getters,
    actions,
    mutations
})

export default store

    // done ({ state, commit }) {
    //     console.log('actions:', state.route.params.id)
    //     commit('done')
    // },
    // done (state) {
    //     console.log('mutations:', state.route.params.id)
    // },
