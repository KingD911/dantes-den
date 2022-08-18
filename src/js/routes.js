import {createRouter, createWebHistory} from 'vue-router'
import TheHome from '../components/TheHome.vue'
import TheRating from '../components/TheRatings.vue'
import TheHottest from '../pages/TheHot.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home', component: TheHome
        },
        {
            path: '/', component: TheHome
        },
        {
            path: '/rate', component: TheRating
        },
        {
            path: '/hot', component: TheHottest
        }
    ]
})

export default router;