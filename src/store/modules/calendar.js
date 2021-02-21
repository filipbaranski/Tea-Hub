import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const api = 'https://tranquil-shelf-80926.herokuapp.com';

const isCalendarDataTheSame = (data, cache) => {
    const returnArray = [];
    if (cache === null) return false;
    const newData = { ...data };
    const cachedData = { ...cache };
    const newId = newData._id.toString();
    const cachedId = cachedData._id.toString();
    if (newId !== cachedId) return false;
    const relevantData = { no_cube: newData.no_cube, red: newData.red, number: newData.number };
    Object.keys(relevantData).forEach((key) => {
        const cachedItem = cachedData[key].toString();
        const newItem = relevantData[key].toString();
        returnArray.push(cachedItem === newItem);
    });
    if (returnArray.indexOf(false) !== -1) return false;
    return true;
};

const calendarStore = {
    state: () => ({
        calendar: {},
        calendarLoading: false,
        calendarDaysUpdating: [],
    }),
    mutations: {
        SET_CALENDAR(state, data) {
            state.calendar = data;
        },
        SET_CALENDAR_LOADING(state, data) {
            state.calendarLoading = data;
        },
        SET_CALENDAR_DAYS_UPDATING(state, data) {
            const isPresent = state.calendarDaysUpdating.indexOf(data) !== -1;
            if (isPresent) {
                state.calendarDaysUpdating.filter((item) => item !== data);
            } else {
                state.calendarDaysUpdating.push(data);
            }
        },
        CLEAR_CALENDAR_DAYS_UPDATING(state, data) {
            state.calendarDaysUpdating = data;
        },
    },
    actions: {
        getCalendar(context, body) {
            context.commit('SET_CALENDAR_LOADING', true);
            const cachedCalendar = localStorage.getItem('calendar');
            const storedCalendar = JSON.parse(cachedCalendar);
            if (cachedCalendar !== null) {
                context.commit('SET_CALENDAR', storedCalendar);
            }
            fetch(`${api}/calendar/${body.year}/${body.month}`)
                .then((response) => response.json())
                .then((data) => {
                    if (isCalendarDataTheSame(data, storedCalendar) === false) {
                        localStorage.setItem('calendar', JSON.stringify(data));
                        context.commit('SET_CALENDAR', data);
                    }
                    context.commit('SET_CALENDAR_LOADING', false);
                    context.commit('CLEAR_CALENDAR_DAYS_UPDATING', []);
                })
                .catch(() => {
                    context.commit('SET_CALENDAR_LOADING', false);
                    context.commit('CLEAR_CALENDAR_DAYS_UPDATING', []);
                });
        },
        updateCalendar(context, body) {
            context.commit('SET_CALENDAR_DAYS_UPDATING', body.payload.day);
            const data = body.payload;
            const calendar = { ...this.state.calendar };
            const payload = {
                number: [...calendar.calendar.number],
                red: [...calendar.calendar.red],
                no_cube: [...calendar.calendar.no_cube],
            };
            payload.number[data.day - 1] = parseInt(data.number, 10);
            if (payload.red.indexOf(data.day) === -1 && data.red === true) {
                payload.red.push(data.day);
            } else if (payload.red.indexOf(data.day) !== -1 && data.red === false) {
                payload.red = payload.red.filter((dates) => dates !== data.day);
            }
            if (payload.no_cube.indexOf(data.day) === -1 && data.no_cube === true) {
                payload.no_cube.push(data.day);
            } else if (payload.no_cube.indexOf(data.day) !== -1 && data.no_cube === false) {
                payload.no_cube = payload.no_cube.filter((dates) => dates !== data.day);
            }
            fetch(`${api}/calendar/${body.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
                .then(() => {
                    const date = new Date();
                    const year = date.getFullYear();
                    const month = date.getMonth() + 1;
                    context.dispatch('getCalendar', { year, month });
                })
                .catch(() => {
                    context.commit('CLEAR_CALENDAR_DAYS_UPDATING', []);
                });
        },
    },
};

export default calendarStore;
