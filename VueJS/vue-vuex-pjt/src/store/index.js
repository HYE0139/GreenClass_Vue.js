/* 
  어플리케이션의 모든 컴포넌트들에 대한 중앙 집중식 저장소의 역할 및 관리를 담당
*/

import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      count: 0,
      cart: [
        {
          product_id: 1,
          product_name: '아이폰 거치대',
          category: 'A',
        }
      ],
    };
  },
  getters: { // state에 담을 데이터를 가공해야할 경우 getters에서 메서드 생성 후 리턴
    cartCount: (state) => {
      return state.cart.length;
    }
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
