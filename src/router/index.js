import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/index.vue'
import design from '../components/design/index.vue'
import team from '../components/team/index.vue'
import person from '../components/person/Person.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/design/index',
      name: 'design',
      component: design
    }, {
      path: '/team/index',
      name: 'team',
      component: team
    }, {
      path: '/Person/:id',
      name: 'person',
      component: person
    }
  ]
})
