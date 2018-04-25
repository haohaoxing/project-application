import Vue from 'vue'
import Router from 'vue-router'
import AdministratorAudit from "../views/AdministratorAudit"
import BoughtUserList from "../views/BoughtUserList"
import BoughtEquipment from "../views/BoughtEquipment"
import BoughtEquipmentG from "../views/BoughtEquipmentG"
import ProjectLogin from "../views/ProjectLogin"
import CompleteProject from "../views/CompleteProject"
import ProcurementProgressP from "../views/ProcurementProgressP"
import ProcurementProgressG from "../views/ProcurementProgressG"
import ApplyCationall from "../views/ApplyCationall"
import DeclrationTab from "../views/DeclrationTab"

Vue.use(Router)

export default new Router({
  routes: [

      {
          path: '/',
          name: 'Login',
          component: ProjectLogin
      },
    {
      path: '/BoughtEquipment',
      name: 'BoughtEquipment',
      component: BoughtEquipment
    },
      {
          path: '/BoughtEquipmentG',
          name: 'BoughtEquipmentG',
          component: BoughtEquipmentG
      },
      {
          path: '/AdministratorAudit',
          name: 'AdministratorAudit',
          component: AdministratorAudit
      },
      {
          path: '/BoughtUserList',
          name: 'BoughtUserList',
          component: BoughtUserList
      },
      {
          path: '/ProcurementProgressP',
          name: 'ProcurementProgressP',
          component: ProcurementProgressP
      },
      {
          path: '/ProcurementProgressG',
          name: 'ProcurementProgressG',
          component: ProcurementProgressG
      },
      {
          path: '/CompleteProject',
          name: 'CompleteProject',
          component: CompleteProject
      },
      {
          path: '/ApplyCationall',
          name: 'ApplyCationall',
          component: ApplyCationall
      },
      {
          path: '/DeclrationTab',
          name: 'DeclrationTab',
          component: DeclrationTab
      }
  ]
})
