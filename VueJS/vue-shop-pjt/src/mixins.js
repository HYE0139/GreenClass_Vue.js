import axios from 'axios';

export default {
    methods: {
        async $post(url, data) {
            return (await axios({
                method: 'post',
                url,
                data
            }).catch(e=> {
                console.error(e);
            })).data;
        },
        async $get(url, param) {
            return (await axios.get(url,{
                params: param,
            }).catch(e=> {
                console.error(e);
            })).data;
        },
        async $delete(url, param) {
            return (await axios.delete(url,{
                params: param,
            }).catch(e=> {
                console.error(e);
            })).data;
        },
        $base64(file) { // 파일을 문자열 형태로 바꾼 다음에 보낸다.
            return new Promise(resolve => {
                const fr = new FileReader();
                fr.onload = e => { // onload라는 이벤트를 걸어서 해당 이벤트가 끝나면 함수 내용이 실행됨.
                    resolve(e.target.result);
                }
                fr.readAsDataURL(file);
            });
        },
        
    }
}