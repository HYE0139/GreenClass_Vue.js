<template>
  <h1>Rendering</h1>
  <input type="text" v-model="type"><br>
  <h1 v-if="type==='A'">A</h1>
  <h1 v-else-if="type==='B'">B</h1>
  <h1 v-else>C</h1>
  <!--필요없는 태그는 아예 빼버림-->
  <hr>
  <h1 v-show="type==='A'">A</h1>
  <h1 v-show="type==='B'">B</h1>
  <h1 v-show="type!=='A' && type !=='B'">C</h1>
  <!--필요없는 태그는 display-none 으로 숨김-->
</template>

<script>
export default {
    data() {
        return {
            type: 'A'
        }
    }
}
</script>

<style>

</style>