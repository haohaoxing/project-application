import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//import Home from "../views/Home.vue"
//import ProjectHeader from "../components/commons/ProjectHeader.vue"
import Project from "../components/Project.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Project
    }
  ]
})