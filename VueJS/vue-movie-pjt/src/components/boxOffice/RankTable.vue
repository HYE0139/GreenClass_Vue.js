<template>
  <table>
    <thead>
      <tr>
        <th>순위</th>
        <th>제목</th>
        <th>개봉일</th>
        <th>누적관객수</th>
        <th>누적매출액</th>
      </tr>
    </thead>
    <tbody>
      <!-- 자식요소인 RankRow 에서 받아온 item:Object 를 바인딩-->
        <RankRow :items="item" v-for="(item) in list" :key="item.movieCd"/>  
    </tbody>
  </table>
</template>

<script>
import RankRow from './RankRow.vue';
export default {
    props: {
        list: Array
    },
    components: {
        RankRow
    }
    
}
</script>

<style>

</style>