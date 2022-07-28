<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a href="#" class="navbar-brand">Sold Out</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="fasle">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" to="/Home">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Detail">제품상세</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Sales">제품등록</router-link>
                </li>
                <li v-if="user.email === undefined">
                    <button class="btn btn-danger" type="button" @click="kakaoLogin">로그인</button>
                </li>
                <li v-else>
                    <button class="btn btn-danger" type="button" @click="kakaoLogout">로그아웃</button>
                </li>
            </ul>
            <form class="d-flex">
                <input type="search" class="form-control me-2" placeholder="search" aria-label="search">
                <button class="btn btn-outline-light" type="submit">search</button>
            </form>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'header',
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    methods: {
        kakaoLogin() {
             window.Kakao.Auth.login({
                scope: 'profile_nickname, profile_image, account_email',
                success: this.getProfile,
                fail: e => {
                    console.error(e);
                }
            });
        },
        getProfile(authObj) {//로그인 인증
            console.log(authObj);
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: async res => {
                    const acc = res.kakao_account;
                    console.log(acc);
                    const params = {
                        social_type: 1,
                        email: acc.email,
                        nickname: acc.profile.nickname,
                        profile_img: acc.profile.profile_image_url,
                        thumb_img: acc.profile.thumbnail_image_url,
                    }
                    console.log(params);
                    this.login(params);
                },
                fail: e => {
                    console.error(e);
                }
            });
        },
        async login(params) {
            const data = await this.$post('/user/signup', params);
                    params.iuser = data.result;
                    this.$store.commit('user', params);
        },
        kakaoLogout() {
            window.Kakao.Auth.logout(async res=> {
                console.log(res);
                this.$store.commit('user', {});
                this.$router.push({path:'/'}); //라우터 주소이동 option사항
                await this.$post('/user/logout');
            });
        }
    }
}
</script>

<style>

</style>