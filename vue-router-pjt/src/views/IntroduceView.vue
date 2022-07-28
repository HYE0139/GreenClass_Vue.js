<template>

  <div>
    <h1 class="title">220713. p.92 데이터 바인딩</h1>
    <h4>p.98 input type=number</h4>
    <input type="number" v-model.number="numberModel">
    <!--type="number" || v-model.number : 입력된 숫자들이 문자열로 변환되지 않도록 정수로 관리함-->
    <!--{{ printNumber }}-->
    <div>
      <h4> From 입력 데이터 바인딩 </h4>
      <p>input.radio</p>
      <label> 여성 <input type="radio" v-model="gender" value="0"></label>
      <label> 남성 <input type="radio" v-model="gender" value="1"></label>
    </div>

    <div>
      {{ gender }}, {{ printGender }}
    </div>
    <div>
      <h3>p.96</h3>
      <div> {{ htmlString }}</div> <!--변수에 담긴 태그를 포함해서 문자열 그대로 출력됨-->
      <div v-html="htmlString"></div> <!--태그를 제외한 문자열만 출력됨-->
    </div>
  </div>

  <div>
    <h3>p.99 textarea</h3>
    <textarea v-model="message"></textarea>
  </div>

  <div>
    <h3> p.100 select - {{ city }} </h3>
    <select v-model="city">
      <option value="053">대구</option>
      <option value="02">서올</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
  </div>

  <div>
    <h3>p.101 cheakbox  </h3>
    <label><input type="checkbox" v-model="basketball">농구</label>
    <label><input type="checkbox" v-model="football" true-value="1" false-value="0">풋볼</label>
  </div>

  <div>
    <h3>같은 글 확인</h3>
    <input type="text" v-model="textValue1">
    <input type="text" v-model="textValue2">
    <br>
    <button type="button" v-bind:disabled="textValue1 === '' || textValue1 !== textValue2">전송</button>
  </div>
  <div>
    <h3>p.107 class 바인딩</h3>
    <div class="container" v-bind:class="{'active': isActive, 'text-red': hasError}">
      Class Binding
    </div>
    <div class="container" v-bind:class="[activeClass,  errorClass]">
      Class Binding
    </div>
  </div>

  <div>
    <h3>p.110</h3>
    <div :style="styleObj">인라인 스타일 바인딩</div>
  </div>


</template>

<script>
export default {
  data() {
    return {
       numberModel : 3,
       gender : 0,
       htmlString: '<p style="color:red"> This is a red string</p>',
       message: 'textarea',
       city: '053',
       basketball: true,
       football: '1',
       textValue1: '',
       textValue2: '',
       isActive: true,
       hasError: true,
       activeClass: 'active',
       errorClass: 'text-red',
       styleObj: {
        color: 'red',
        fontSize: '16px',
       }
    }
  },
  computed: { //변수값이 바뀌면 해당 내용으로 출력하라는 명령어
    printNumber() {
      return this.numberModel + 3;
      //숫자로 관리되고 있어서 +3 된 값이 출력됨
      // number 속성을 주지 않으면 문자열로 합쳐진다 ex) 3 + 3 = 33
    },
    printGender() {
      return this.gender === 0 ? '여성' : '남성';
    }
  }
}
</script>

<style>
  .title {background-color: #6DB3FC; padding: 10px 0;}
  .container { width:100%; height:200px;}
  .active { background-color:rgb(255, 255, 180); font-weight: bold;}
  .text-red { color: red; }
</style>