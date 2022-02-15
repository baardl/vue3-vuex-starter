import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage'
import LoginPage from "../components/Login";
import PostList from "../components/PostList";
import NotFound from "../components/NotFound";
import About from "@/components/About";
import Todos from "@/todo/Todos";
import Tfm2Recs from "@/tfm2rec/Tfm2Recs";


export const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/posts', component: PostList},
    {path: '/about', component: About},
    {path: '/todos', component: Todos},
    {path: '/tfm2recs', component: Tfm2Recs},

    // otherwise redirect to home
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
// if you omit the last `*`, the `/` character in params will be encoded when resolving or pushing
    { path: '/:pathMatch(.*)', name: 'bad-not-found', component: NotFound }],

})



router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/posts', '/about', '/todos', '/tfm2recs'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})
