import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import  VueResource  from 'vue-resource';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';    // 默认主题
import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";
import VueCookies from 'vue-cookies';

Vue.use(VueCookies)

Vue.use(ElementUI);
Vue.use(VueResource);

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials=true;
Vue.prototype.$axios = axios;
// 192.168.0.205
Vue.prototype.hostname = "http://ytxssh.cn:9180";  //http://182.92.82.188:8280
// Vue.prototype.url_token = function() {
// 	return "?token="+this.$cookies.get('token');
// }
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');