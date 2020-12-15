import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const Home = () => import('views/home/Home')
const Catagory = () => import('views/catagory/Catagory')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

const routes = [
  {
    path: '/home',
    component : Home
  },
  {
    path: '/catagory',
    component : Catagory
  },
  {
    path: '/cart',
    component : Cart
  },
  {
    path: '/profile',
    component : Profile
  }
]
export default new Router({
  routes,
  mode: 'history'
})

