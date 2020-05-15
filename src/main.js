import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material';
import { router } from './helpers';
import Vuelidate from 'vuelidate';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.config.productionTip = false

Vue.use(VueMaterial);
Vue.use(Vuelidate);


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
