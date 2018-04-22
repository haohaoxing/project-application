import Vue from 'vue'
import Router from 'vue-router'
import ApplyCationall from "../views/ApplyCationall.vue"
import DeclrationTab from "../views/DeclrationTab.vue"


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ApplyCationall',
      component: ApplyCationall
    },
    {
      path: '/d',
      name: 'DeclrationTab',
      component: DeclrationTab
    }
  ]
 
})
