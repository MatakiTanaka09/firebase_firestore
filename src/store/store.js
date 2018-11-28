import Vue from 'vue'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash-es'
import db from '@/api/firebase/db'
import initialState from '@/store/initialState'
import * as types from '@/store/mutation-types'

Vue.use(Vuex)

const namespaced = true

// const state = cloneDeep(initialState)
const state = {
    data: [
        { id: 1, title: 'Vue.js入門 基礎から実践アプリケーション開発まで', description: '非常に分かりやすい。Vueを使いこなせるようになるぞ', borrowable: true },
        { id: 2, title: '基礎から学ぶVue.js', description: 'Webサイトにも解説が載っているので、本書と併せて読むのが良い', borrowable: true },
        { id: 3, title: 'Bootstrap 4 フロントエンド開発の教科書', description: 'Bootstrapはこの一冊で事足りる', borrowable: false },
        { id: 4, title: '気づけばプロ並みPHP', description: 'PHPデータベースはこの一冊で事足りる', borrowable: false },
        { id: 5, title: 'エンジニアのためのGitの教科書', description: 'Gitをターミナルから操作したいと思う初心者エンジニア向け。図も多くかなり分かりやすい。', borrowable: true },
        { id: 6, title: 'テスト', description: 'テストまる', borrowable: true },
        { id: 7, title: 'ビジネス・フォー・パンクス', description: '起業のバイブル。特に最後の一節が最高にイイ。倜儻不羈', borrowable: true },
        { id: 8, title: '竜馬がゆく', description: '志についての本。起業家必読の書', borrowable: true },
        { id: 9, title: 'センスのいらない経営', description: 'グノシー福島さんが贈るエンジニア出身者流の経営学', borrowable: true },
        { id: 10, title: 'Technium', description: 'テクノロジはどこへ向かっているのか？のヒントをくれる良書', borrowable: true },
        { id: 11, title: 'ゼロから創る暗号通貨', description: 'これを参考にしながら暗号通貨を創るぞ', borrowable: true },
    ]
}

const actions = {
    done ({ state, commit }) {
        console.log('actions:', state.route.params.id)
        commit('done')
    },
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
    done (state) {
        console.log('mutations:', state.route.params.id)
    },
    [types.CHANGE_BORROWABLE](state, payload) {
        const index = state.data.findIndex(el => el.id == payload.id)
        if(index != -1) {
            state.data[index].borrowable = !state.data[index].borrowable
            console.log(state.data[index].borrowable)
        }
    },
    [types.FETCH_ALL_BOOK](state, payload) {
        return db.fetchAllBooksData(state.data)
    },
    [types.SET_BOOK_QUERY](state, { queryParams }) {
        Object.assign(state.queryParams, queryParams)
    }
}

const getters = {
    all: state => state.data,
    // queryParams: state => queryParams,
    detail: state => {
        return state.data.find(el => el.id === state.route.params.id) || {}
    },
    searchBookById(state) {
        return function(_id) {
            let book = state.data.find(el => el.id === _id)
            if(book) {
                return book
            }
            console.log("book not found")
        }
    },
    findBorrowableBook: state => {
        return state.data.filter(el => el.borrowable == true)
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
