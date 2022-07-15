<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @childAddTodo="addTodo" @noInputValue="showModal" ></TodoInput>
    <TodoList :propsItems="todoItems" @childRemoveTodo="removeTodo" ></TodoList>
    <TodoFooter @clearTodo="clearTodo"></TodoFooter>
  </div>
  <AlertModal :show="modalShow" @close="showModal" header="알림" body="내용을 입력해주세요."></AlertModal>
  <!--
    v-on:click = @click
    v-model : change, 바인딩(export default) 이벤트
  -->
</template>

<script>
import TodoHeader from './components/todo/TodoHeader.vue';
import TodoInput from './components/todo/TodoInput.vue';
import TodoList from './components/todo/TodoList.vue';
import TodoFooter from './components/todo/TodoFooter.vue';
import AlertModal from './components/common/AlertModal.vue';
import axios from 'axios';
import DateUtils from './utils/DateUtils.js';

export default {
  name: 'App',
  data() {
    return {
      todoItems: [], // 생성되는 li 요소들이 배열로 저장됨 = todoItem
      cnt: 0,
      modalShow : false,
      
    }
  },

  methods: {
    addTodo(todoItem) { // todoItem => TodoInput.vue에서 받아온 value
      //localStorage.setItem(todoItem, todoItem);
      /*this.todoItems.push({
        key: this.cnt++,
        value: todoItem
      });*/
      const param = {
        'todo' : todoItem
      };

      axios.post('/todo/index', param)
      .then(res => { // 200 : 통신성공!
        if(res.status === 200 && res.data) {
          const item = {
            'itodo' : res.data.result,
            'todo' : todoItem,
            'created_at' : DateUtils.getTimestamp(new Date())
          }
          this.todoItems.push(item);
        }
      })

    },

    

    showModal() {
      this.modalShow = !this.modalShow;
    },

    removeTodo(key) {
      this.todoItems.forEach((item,idx) => {
        if(item.itodo === key) {
          this.todoItems.splice(idx, 1); //해당 인덱스 1개만 삭제
          axios.delete(`/todo/index/${item.itodo}`)
          .then(res=> {
            console.log(res);
          });
        }
      })

    },

    clearTodo() {
      axios.delete(`/todo/index`)
      .then(res => {
        if(res.status === 200 && res.data.result) {
          this.todoItems.splice(0);
        }
      });
    },

    changeValue() {
      const json = JSON.stringify(this.todoItems);
      localStorage.setItem('todoItems', json);
      localStorage.setItem('cnt', this.cnt);
    }
   
  },

  created() { // 리스트 형식으로 나열
  axios.get('/todo/index')
  .then(res=> {
    if(res.status === 200 && res.data.length > 0) {
      res.data.forEach(item => {
        this.todoItems.push(item);
      });
    }
    console.log(res);
  });
/*
   const json = localStorage.getItem("todoItems");
   if(json) {
    const todoItems = JSON.parse(json);
    todoItems.forEach(item => {
      this.todoItems.push(item);
    });
    const cnt = localStorage.getItem("cnt");
    this.cnt = cnt;
   }*/
  },

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
    AlertModal
  },

/* watch : 인스턴스의 데이터 변경을 관찰하는 속성
  watch: {
    todoItems: {// 감시할 대상
      deep: true, // 중첩 데이터의 변경값을 확일할 때 true
      handler() { // 데이터가 변경되었을 때 실행할 함수
        this.changeValue();
      }
    }
  }
 */
}
</script>

<style>
  body { text-align: center; background-color: #f6f6f8;}
  input { border-style: groove; width: 200px; }
  button { border-style : groove; }
  .shadow { box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);}
</style>
