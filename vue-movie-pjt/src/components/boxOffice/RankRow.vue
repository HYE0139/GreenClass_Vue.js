<!--
    박스오피스 순위 정보
    Ranktable 에서 v-for:반복문을 사용했다.
-->
<template>
    <tr>
        <td>{{ items.rank }}</td>
        <td @click="movieInfo">{{ items.movieNm }}</td>
        <td v-if="items.openDt !== ' ' ">{{ items.openDt }}, {{getToday(items.openDt)}}</td>
        <td v-else>개봉정보 없음</td>
        <td>{{ getAudiAcc }}</td>
        <td>{{ getSalesAcc }}</td>
    </tr>
</template>

<script>
export default {
    props: { // 부모요소에게 보낼 데이터
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
        movieInfo(){ // 영화 상세 정보 불러오기
            const movieCd = this.items.movieCd;
            this.getData(movieCd);
            
        },
        async getData(movieCd) {      
        const data = await this.getMovieByInfo(movieCd);
        this.info = data.movieInfoResult.movieInfo;
        console.log(this.info);
        },

        numberComma(num) {
                return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

        getToday(day) {
            const week = new Array('일', '월', '화', '수', '목', '금', '토');
            const today = week[new Date(day).getDay()];
            return today;
        },
        
           
    }
}
</script>

<style>

</style>