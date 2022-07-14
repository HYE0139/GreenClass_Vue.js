<template>
    <tr>
        <td>{{ items.rank }}</td>
        <td @click="movieInfo">{{ items.movieNm }}</td>
        <td>{{ items.openDt }}, {{getToday(items.openDt)}}</td>
        <td>{{ getAudiAcc }}</td>
        <td>{{ getSalesAcc }}</td>
    </tr>
</template>

<script>
export default {
    props: {
        items:Object
    },
    computed: {
            getAudiAcc(){
                return this.numberComma(this.items.audiAcc);
            },
            getSalesAcc(){
                return this.numberComma(this.items.salesAcc);
            },
            
    },
    methods: {
        numberComma(num) {
                return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

        getToday(day) {
            const week = new Array('일', '월', '화', '수', '목', '금', '토');
            const today = week[new Date(day).getDay()];
            return today;
        }
           
    }
}
</script>

<style>

</style>