/* 
  어플리케이션의 모든 컴포넌트들에 대한 중앙 집중식 저장소의 역할 및 관리를 담당
*/

import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      count: 0,
    }
  },
  getters: {
  },
  mutations: {
    increment(state){
      state.count++;
    }
  },
  actions: {
  },
  modules: {
  },
});
