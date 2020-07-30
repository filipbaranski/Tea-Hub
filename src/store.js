import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const api = 'https://tranquil-shelf-80926.herokuapp.com';

export default new Vuex.Store({
    state: {
        quotes: [],
        dates: [],
    },
    mutations: {
        SET_QUOTES(state, data) {
            state.quotes = data;
        },
        SET_DATES(state, data) {
            state.dates = data;
        },
    },
    actions: {
        getQuotes(context) {
            fetch(`${api}/quotes`)
                .then(response => response.json())
                .then((data) => {
                    context.commit('SET_QUOTES', data);
                });
        },
        postQuote(context, payload) {
            fetch(`${api}/quote`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
                .then(() => context.dispatch('getQuotes'));
        },
        getDates(context) {
            fetch(`${api}/dates`)
                .then(response => response.json())
                .then((data) => {
                    context.commit('SET_DATES', data);
                });
        },
        postDate(context, payload) {
            fetch(`${api}/date`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
                .then(() => context.dispatch('getDates'));
        },
    },
});
