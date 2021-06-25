import { InjectionKey } from 'vue';
import { createStore } from 'vuex';

export interface State {
  a: string,
  b: string,
  total: string
}

export const store = createStore<State>({
  state: {
    a: "",
    b: "",
    total: ""
  },
  mutations: {
    updateA(state, payload) {
      state.a = payload;
    },
    updateB(state, payload) {
      state.b = payload;
    },
    updateTotal(state, payload) {
      state.total = payload
    }
  },
  actions: {
    async doSum({ state, commit }) {
      const total = +state.a + +state.b;
      commit("updateTotal", total);
    }
  }
})

