import axios from 'axios';

export default {
    data() {
        return{
            key: 'ad332fae9a3b691b6ad09cf87e0004cc',
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
            boxOfficeByWeek: 'boxoffice/searchWeeklyBoxOfficeList.json',
            boxOfficeByInfo: 'movie/searchMovieInfo.json',
        }
    },
    methods: {
        async $api(url, parameter) {
            return (await axios.get(url, {
                params: parameter,
            }).catch(e => {
                console.log(e);
            })).data; // data = await
        },
        async getBoxOfficeByDay(targetDt) { // targetDt = YYMMDD(날짜정보)
            const parameter = {
                key: this.key, // API.key값
                targetDt//input.date에서 선택한 날짜
            }
            const url = this.baseUrl + this.boxOfficeByDay;
            return await this.$api(url, parameter);
            // 실행된 결과값은 BoxOfficeByDay.vue 의 list로 반환된다.
        },
        async getBoxOfficeByWeek(targetDt, weekGb) { // targetDt = YYMMDD(날짜정보)
            const parameter = {
                key: this.key, 
                targetDt,
                weekGb
            }
            const url = this.baseUrl + this.boxOfficeByWeek;
            return await this.$api(url, parameter);
            // 실행된 결과값은 BoxOfficeByDay.vue 의 list로 반환된다.
        },
        
        getOnlyDateStr(date) {
            return date.toISOString().slice(0, 10);
        },

       
    }
}