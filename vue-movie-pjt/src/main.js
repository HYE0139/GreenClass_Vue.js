import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins';

createApp(App)
.use(router)
.mixin(mixins)//모든 옵션이 컴포넌트의 고유 옵션에 “혼합” 된다.

.mount('#app')

// 다른 파일에 있는 함수들을 쓸 수 있도록 연결하는 파일