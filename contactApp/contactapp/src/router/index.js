import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* eslint-disable */
export default new Router({

  
  routes: [
    {
      path: '/',
      component: require('../components/home/home.component.vue').default
    },
    {
      path: '/favourite',
      component: require('../components/favourite-contactList/favourite-contactList.component.vue').default
    },
    {
      path: '/contact-detail/:id',
      name: 'contact-detail',
      component: require('../components/contact-detail/contact-detail.component.vue').default
    }
  ]
})
