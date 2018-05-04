import Vue from 'vue'

import app from './App.vue'

import './lib/mui/css/mui.css'
// 引入MIN-UI组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


Vue.component(Header.name, Header);
var vm = new Vue({
    el:'#app',
    render:function(c){
        return c(app)
    }
})