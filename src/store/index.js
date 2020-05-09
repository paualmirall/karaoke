import Vuex from 'vuex'
import Vue from 'vue'
import { google } from 'googleapis';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        results: {},
        current_search: '',
    },
    mutations: {
        save_result (state, {query, result}) {
            state.results[query] = result;
        },
        save_current_search (state, query) {
            state.current_search = query;
        }
    },
    actions: {
        async get_results ({ state, commit, getters }, query) {
            if (state.results[query] !== undefined) return; 

            const result = await getters.youtube.search.list({part: "snippet", type: "video", q: query, maxResults: 20});
            
            commit('save_result', {query, result: result.data})
            commit('save_current_search', query)
        }
    },
    getters: {
        results: (state) => state.results,
        current_search: (state) => state.current_search,
        youtube: () => google.youtube({
            version: 'v3',
            auth: 'AIzaSyCL8sRQJRmwpbJf5LIjgirA1cT8Y5GkR9E'
          }),
    }
})