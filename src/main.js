import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import 'bootstrap/dist/css/bootstrap.css';
import VueBoostrap from 'bootstrap-vue';

Vue.use(VueResource, VueBoostrap);

new Vue({
  el: '#app',
  render: h => h(App)
})
