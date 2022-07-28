<template>
  <div>
    <p>Count : {{ count }}</p>
    <button type="button" @click="increment">증가</button>
    <p> 카트 상품 수 : {{ cartCount }}</p>
  </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
        },
        cartCount() {
            return this.$store.getters.cartCount;
        }
    },
    methods: {
        increment() {
            this.$store.commit('setCount', 200);
            // store/index.js 의 mutations:increment함수를 호출
        }
    }
}
</script>

<style>

</style>