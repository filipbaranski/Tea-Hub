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
        const {
            day, month, year, event, _id,
        } = entry;
        const cachedItem = cachedData.filter((item) => item._id === _id);
        if (cachedItem[0].day !== day
            || cachedItem[0].month !== month
            || cachedItem[0].year !== year
            || cachedItem[0].event !== event) returnValue = false;
    });
    return returnValue;
};

const datesStore = {
    state: () => ({
        dates: [],
        datesLoading: false,
        datesDateUpdating: [],
    }),
    mutations: {
        SET_DATES(state, data) {
            state.dates = data;
        },
        SET_DATES_LOADING(state, data) {
            state.datesLoading = data;
        },
        SET_DATES_DATE_UPDATING(state, data) {
            const isPresent = state.datesDateUpdating.indexOf(data) !== -1;
            if (isPresent) {
                state.datesDateUpdating.filter((item) => item !== data);
            } else {
                state.datesDateUpdating.push(data);
            }
        },
        CLEAR_DATES_DATE_UPDATING(state, data) {
            state.datesDateUpdating = data;
        },
    },
    actions: {
        getDates(context) {
            context.commit('SET_DATES_LOADING', true);
            const cachedDates = localStorage.getItem('dates');
            const storedDates = JSON.parse(cachedDates);
            if (cachedDates !== null) {
                context.commit('SET_DATES', storedDates);
            }
            fetch(`${api}/dates`)
                .then((response) => response.json())
                .then((data) => {
                    if (isDataTheSame(data, storedDates) === false) {
                        localStorage.setItem('dates', JSON.stringify(data));
                        context.commit('SET_DATES', data);
                    }
                    context.commit('SET_DATES_LOADING', false);
                    context.commit('CLEAR_DATES_DATE_UPDATING', []);
                })
                .catch(() => {
                    context.commit('SET_DATES_LOADING', false);
                    context.commit('CLEAR_DATES_DATE_UPDATING', []);
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
            context.commit('SET_DATES_DATE_UPDATING', body.id);
            fetch(`${api}/date/${body.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body.payload),
            })
                .then(() => context.dispatch('getDates'))
                .catch(() => {
                    context.commit('CLEAR_DATES_DATE_UPDATING', []);
                });
        },
        deleteDate(context, id) {
            context.commit('SET_DATES_DATE_UPDATING', id);
            fetch(`${api}/date/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(() => context.dispatch('getDates'))
                .catch(() => {
                    context.commit('CLEAR_DATES_DATE_UPDATING', []);
                });
        },
    },
};

export default datesStore;
