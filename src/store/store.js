import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    // あとでfirestore, firestrageから持ってくる
    items: [
        {
            id: 1,
            title: 'Vue.js入門 基礎から実践アプリケーション開発まで',
            description: 'aaa',
        },
        {
            id: 2,
            title: '基礎から学ぶVue.js',
            description: 'bbb',
        },
        {
            id: 3,
            title: 'Bootstrap 4 フロントエンド開発の教科書',
            description: 'ccc',
        },
        {
            id: 4,
            title: '気づけばプロ並みPHP',
            description: 'ddd',
        },
        {
            id: 5,
            title: 'test',
            description: 'eee',
        },
    ]
}
const actions = {
    done ({ state, commit }) {
        console.log('actions:', state.route.params.id)
        commit('done')
    },
}

const mutations = {
    done (state) {
        console.log('mutations:', state.route.params.id)
    },
}
const getters = {
    items: state => state.items,
    detail: state => {
        return state.items.find(item => item.id === state.route.params.id) || {}
    }
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})

export default store
