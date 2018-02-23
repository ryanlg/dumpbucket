import Vue from 'vue';
import Vuex from 'vuex';

const state = {

    dumpbucket: {
        saveToLocal: false,
        content: '',
    },
};

const mutations = {

    TOGGLE_SAVE_TO_LOCAL: (state: any) => {

        state.dumpbucket.saveToLocal = !state.dumpbucket.saveToLocal;
    },

    MUTATE_CONTENT: (state: any, payload: string) => {

        state.dumpbucket.content = payload;
    },
};

const getters = {

    getSaveToLocal: (state: any) => state.dumpbucket.saveToLocal,
    dumpbucket_getContent: (state: any) => state.dumpbucket.content,
};

const actions = {

    toggleSaveToLocal: (context: any) => {

        context.commit('TOGGLE_SAVE_TO_LOCAL');
    },

    dumpbucket_setContent: (context: any, payload: string) => {

        context.commit('MUTATE_CONTENT', payload);
    },
};

Vue.use(Vuex);
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});
