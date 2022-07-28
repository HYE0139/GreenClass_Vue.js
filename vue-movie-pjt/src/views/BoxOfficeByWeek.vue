<template>
  <h1>BoxOffice By Week</h1>
  <div>
    <input type="date" v-model="selectedDate">
    <button @click="search">검색</button>
  </div>
    <rank-table :list="list"/>
</template>


<script>
import RankTable from '../components/boxOffice/RankTable.vue';
export default {
    
    data() {
        return {
            list: [],
            selectedDate:'',
        }
    },
    components: {
        RankTable
    },

    methods: {
        search() {
        const targetDt = this.selectedDate.replaceAll('-', '');
        this.getData(targetDt);
        },
        async getData(targetDt) {      
        const data = await this.getBoxOfficeByWeek(targetDt);
        this.list = data.boxOfficeResult.weeklyBoxOfficeList;
        },
        
        
    },
    created() {
        const d = new Date();
        d.setDate(d.getDate()-1);
        this.selectedDate = this.getOnlyDateStr(d);
  }
}
</script>

<style>

</style>