import axios from 'axios';
// axios를 사용한 함수를 모아놓은 곳. 
// main.js에서 mixins로 import 되어서 다른 파일에서 바로 사용할 수 있다.
export default {
    data() {
        return{
            key: 'ad332fae9a3b691b6ad09cf87e0004cc',
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
            boxOfficeByWeek: 'boxoffice/searchWeeklyBoxOfficeList.json',
            MovieByInfo: 'movie/searchMovieInfo.json',
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
        async getMovieByInfo(movieCd) {//영화 상세 정보 불러오기
            const parameter = {
                key: this.key,
                movieCd
            }
            const url = this.baseUrl + this.MovieByInfo;
            return await this.$api(url, parameter);
        },
        
        getOnlyDateStr(date) {
            return date.toISOString().slice(0, 10);
        },

       
    }
}