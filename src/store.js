import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const api = 'https://tranquil-shelf-80926.herokuapp.com';

const checkForDifs = (data, cache, type) => {
    let returnValue = true;
    if (cache === null) return false;
    const newData = [...data];
    const cachedData = [...cache];
    const newIds = newData.map(id => id._id).toString();
    const cachedIds = cachedData.map(id => id._id).toString();
    if (newIds !== cachedIds) return false;
    if (type === 'quotes') {
        newData.forEach((entry) => {
            const { strong, text, _id } = entry;
            const cachedItem = cachedData.filter(item => item._id === _id);
            if (cachedItem[0].strong !== strong || cachedItem[0].text !== text) returnValue = false;
        });
    }
    if (type === 'dates') {
        newData.forEach((entry) => {
            const {
                day, month, year, event, _id,
            } = entry;
            const cachedItem = cachedData.filter(item => item._id === _id);
            if (cachedItem[0].day !== day
                || cachedItem[0].month !== month
                || cachedItem[0].year !== year
                || cachedItem[0].event !== event) returnValue = false;
        });
    }
    return returnValue;
};

export default new Vuex.Store({
    state: {
        quotes: [],
        dates: [],
        calendar: {},
    },
    mutations: {
        SET_QUOTES(state, data) {
            state.quotes = data;
        },
        SET_DATES(state, data) {
            state.dates = data;
        },
        SET_CALENDAR(state, data) {
            state.calendar = data;
        },
    },
    actions: {
        getVersion() {
            const cachedVersion = localStorage.getItem('version');
            fetch(`${api}/version`)
                .then(response => response.json())
                .then((data) => {
                    if (cachedVersion !== null && cachedVersion !== data.version) {
                        window.location.reload();
                    }
                    localStorage.setItem('version', data.version);
                });
        },
        getQuotes(context) {
            const cachedQuotes = localStorage.getItem('quotes');
            const storedQuotes = JSON.parse(cachedQuotes);
            if (cachedQuotes !== null) {
                context.commit('SET_QUOTES', storedQuotes);
            }
            fetch(`${api}/quotes`)
                .then(response => response.json())
                .then((data) => {
                    if (checkForDifs(data, storedQuotes, 'quotes') === false) {
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
        getDates(context) {
            const cachedDates = localStorage.getItem('dates');
            const storedDates = JSON.parse(cachedDates);
            if (cachedDates !== null) {
                context.commit('SET_DATES', storedDates);
            }
            fetch(`${api}/dates`)
                .then(response => response.json())
                .then((data) => {
                    if (checkForDifs(data, storedDates, 'dates') === false) {
                        localStorage.setItem('dates', JSON.stringify(data));
                        context.commit('SET_DATES', data);
                    }
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
        updateDate(context, body) {
            fetch(`${api}/date/${body.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body.payload),
            })
                .then(() => context.dispatch('getDates'));
        },
        deleteDate(context, id) {
            fetch(`${api}/date/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(() => context.dispatch('getDates'));
        },
        getCalendar(context, body) {
            // const cachedQuotes = localStorage.getItem('quotes');
            // const storedQuotes = JSON.parse(cachedQuotes);
            // if (cachedQuotes !== null) {
            //     context.commit('SET_QUOTES', storedQuotes);
            // }
            fetch(`${api}/calendar/${body.year}/${body.month}`)
                .then(response => response.json())
                .then((data) => {
                    context.commit('SET_CALENDAR', data);
                    // if (checkForDifs(data, storedQuotes, 'quotes') === false) {
                    //     localStorage.setItem('quotes', JSON.stringify(data));
                    //     context.commit('SET_QUOTES', data);
                    // }
                });
        },
    },
});
