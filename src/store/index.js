import Vue from 'vue';
import Vuex from 'vuex';

import calendarStore from './modules/calendar';
import datesStore from './modules/dates';
import quotesStore from './modules/quotes';

Vue.use(Vuex);

const api = 'https://tranquil-shelf-80926.herokuapp.com';

export default new Vuex.Store({
    modules: {
        dates: datesStore,
        quotes: quotesStore,
        calendar: calendarStore,
    },
    actions: {
        getVersion() {
            const cachedVersion = localStorage.getItem('version');
            fetch(`${api}/version`)
                .then((response) => response.json())
                .then((data) => {
                    if (cachedVersion !== null && cachedVersion !== data.version) {
                        window.location.reload();
                    }
                    localStorage.setItem('version', data.version);
                });
        },
    },
});
