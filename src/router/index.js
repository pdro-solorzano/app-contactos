import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Contacts from '../views/Contacts.vue';
import EditContact from '../views/EditContact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    component: Contacts,
    meta: { isProtected: true }
  },
  {
    path: '/Contacts/:id',
    name: 'EditContact',
    component: EditContact,
    meta: { isProtected: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  let isProtected = to.matched.some( item => item.meta.isProtected )

  if(isProtected && store.state.token === null) {
    next('/');
  } else {
    next();
  }
});

export default router
