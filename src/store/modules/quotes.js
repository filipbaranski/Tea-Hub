import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const api = 'https://tranquil-shelf-80926.herokuapp.com';

const isDataTheSame = (data, cache) => {
    let returnValue = true;
    if (cache === null) return false;
    const newData = [...data];
    const cachedData = [...cache];
    const newIds = newData.map((id) => id._id).toString();
    const cachedIds = cachedData.map((id) => id._id).toString();
    if (newIds !== cachedIds) return false;
    newData.forEach((entry) => {
        const { strong, text, _id } = entry;
        const cachedItem = cachedData.filter((item) => item._id === _id);
        if (cachedItem[0].strong !== strong || cachedItem[0].text !== text) returnValue = false;
    });
    return returnValue;
};

const quotesStore = {
    state: () => ({
        quotes: [],
    }),
    mutations: {
        SET_QUOTES(state, data) {
            state.quotes = data;
        },
    },
    actions: {
        getQuotes(context) {
            const cachedQuotes = localStorage.getItem('quotes');
            const storedQuotes = JSON.parse(cachedQuotes);
            if (cachedQuotes !== null) {
                context.commit('SET_QUOTES', storedQuotes);
            }
            fetch(`${api}/quotes`)
                .then((response) => response.json())
                .then((data) => {
                    if (isDataTheSame(data, storedQuotes) === false) {
                        localStorage.setItem('quotes', JSON.stringify(data));
                        context.commit('SET_QUOTES', data);
                    }
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
        updateQuote(context, body) {
            fetch(`${api}/quote/${body.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body.payload),
            })
                .then(() => context.dispatch('getQuotes'));
        },
        deleteQuote(context, id) {
            fetch(`${api}/quote/${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(() => context.dispatch('getQuotes'));
        },
    },
};

export default quotesStore;
