<template>
  <h1>Movie List</h1>
  <div>
    <input type="date" v-model="selectedDate">
    <button @click="search2">검색</button>
    <div>
        <table>
            <thead>
                <tr>
                    <th>순위</th>
                    <th>제목</th>
                    <th>개봉일</th>
                </tr>
            </thead>

            <tbody  v-for="(item) in list" :key="item.movieCd">
                <tr>
                    <td>{{ item.rank }}</td>
                    <td @click="getCode(item.movieNm)">{{ item.movieNm }}</td>
                    <td>{{ item.openDt }}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            selectedDate: '',
            movieList: [],
            list: [],
        }
    },
    methods: {
        search2() {
            const targetDt = this.selectedDate.replaceAll('-', '');
            this.getData2(targetDt);
        },
        async getData2(targetDt) {      
            const data2 = await this.getBoxOfficeByDay(targetDt);
            console.log(data2);
            this.list = data2.boxOfficeResult.dailyBoxOfficeList;
        },
    
        search() {
            const movieTitle = this.title;
            console.log(movieTitle);
            this.getData(movieTitle);
        },
        async getData(movieTitle) {
            const MovieData = await this.getMovieList(movieTitle);
            console.log(MovieData.data.items);
            this.movieList = MovieData.data.items;
        },
        async getCode(movieName){
            // movieList.forEach(e => {
            //     const link = e.link;
            //     const code = link.split("=");
            //     console.log(code.at(-1)); // 영화코드
            // });
            const getCode = await this.getMovieList(movieName);
            const code = getCode.data.items;
            //const link = code[0].link;
            console.log(code);
            // const c = link.split('=');
            // console.log(c.at(-1));
          
        }
    },   
}
</script>

<style>

</style>