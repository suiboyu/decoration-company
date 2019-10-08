import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/index.vue'
import design from '../components/design/index.vue'
import team from '../components/team/index.vue'
import person from '../components/person/Person.vue'
import free from '../components/free/index.vue'
import quoted from '../components/quoted/index.vue'
import about from '../components/about/index.vue'
import contact from '../components/contact/index.vue'
import building from '../components/building/index.vue'

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
    }, {
      path: '/free/index',
      name: 'free',
      component: free
    }, {
      path: '/quoted/index',
      name: 'quoted',
      component: quoted
    }, {
      path: '/about/index',
      name: 'about',
      component: about
    }, {
      path: '/contact/index',
      name: 'contact',
      component: contact
    }, {
      path: '/building/index',
      name: 'building',
      component: building
    }
  ]
})
