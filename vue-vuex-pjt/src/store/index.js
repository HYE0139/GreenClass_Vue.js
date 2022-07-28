/* 
  어플리케이션의 모든 컴포넌트들에 대한 중앙 집중식 저장소의 역할 및 관리를 담당
*/

import { createStore } from 'vuex';

export default createStore({
  state() { //각각의 컴포넌트에서 공통으로 참조하기 위한 변수를 정의하는 부분
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
  getters: { 
    // state에 담을 데이터를 가공해야할 경우 getters에서 메서드 생성 후 리턴
    // 각 컴포넌트의 계산된 속성 (computed) 의 공통 속성으로 정의
    cartCount: (state) => {
      return state.cart.length;
    }
  },
  mutations: { //State 변경을 담당, 외부에서 state값을 변경할 때 여기서 함수를 만들어서 적용
    increment(state){
      state.count++;
    },
    setCount(state, val) {
      state.count = val;
    }
  },
  actions: {
  },
  modules: {
  },
});
