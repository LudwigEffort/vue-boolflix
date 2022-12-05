import Vue from 'vue';

import 'bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as faSolidStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

library.add(faSolidStar, faStar, faStarHalfStroke);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
