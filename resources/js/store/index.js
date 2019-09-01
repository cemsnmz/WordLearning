import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
    words: []
};
const getters = {
    getWords(state) {
        return state.words;
    }
};
const mutations = {
    setWords(state, words) {
        state.words = words
    },
    addWord(state, wordGroup) {
        if(state.words.length > 4) {
            state.words.pop();
        }
        state.words.unshift(wordGroup);
    }
};
const actions = {
    getWordsActions({commit}) {
        axios.post('/GetWords')
            .then((res) => {
                commit('setWords', res.data.words)
            })
    },
    addWordActions({commit}, wordGroup) {
        return axios.post('/SaveWord', wordGroup)
            .then((res) => {
                commit('addWord', wordGroup);
                return {type:res.data.type,message:res.data.message};
            })
            .catch((err) => {
                return {type:err.data.type,message:err.data.message};
            })
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;
