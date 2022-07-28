import axios from 'axios'

export default {
    data() {
        return {
            clientID: '6fE0WHkocBRxcKujo_5M',
            clientPW: '1A9B6FeSij',
            Url: 'v1/search/movie.json', // proxy 설정
            key: 'ad332fae9a3b691b6ad09cf87e0004cc',
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
            boxOfficeByWeek: 'boxoffice/searchWeeklyBoxOfficeList.json',
        }
    },
    methods: {
        async $api(url, title, parameter) {
            return (await axios.get(url, {
                params: title, // 요청변수를 담는 곳
                headers: parameter, // 키값들 담기
            }).catch(e => {
                console.log(e);
            }));
        },
        async $api2(url, parameter) {
            return (await axios.get(url, {
                params: parameter,
            }).catch(e=> {
                console.log(e)
            })).data;
        },
        async getMovieList(movieTitle) {
            const title = {
                query: movieTitle // 쿼리스트링으로 검색을 원하는 문자열
            };
            const parameter = {
                'X-Naver-Client-Id': this.clientID,
                'X-Naver-Client-Secret': this.clientPW,
            };
            const url = this.Url;
            return await this.$api(url, title, parameter);
        },
        async getBoxOfficeByDay(targetDt) { // targetDt = YYMMDD(날짜정보)
            const parameter = {
                key: this.key, // API.key값
                targetDt//input.date에서 선택한 날짜
            }
            const url = this.baseUrl + this.boxOfficeByDay;
            return await this.$api2(url, parameter);
            // 실행된 결과값은 BoxOfficeByDay.vue 의 list로 반환된다.
        },
       
    }
}

