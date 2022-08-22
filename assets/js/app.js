import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'
 

import c_menu from './components/menu.js'
Vue.component('c-menu', c_menu)

import c_footer from './components/footer.js'
Vue.component('c-footer', c_footer)

import c_oferecer from './components/oferecer.js'
Vue.component('c-oferecer', c_oferecer)

import c_sobre from './components/c_sobre.js'
Vue.component('c-sobre', c_sobre)

import c_contacto from './components/c_contacto.js'
Vue.component('c-contacto', c_contacto)

import c_equipe from './components/c_equipe.js'
Vue.component('c-equipe', c_equipe)

import c_testemunho from './components/c_testemunho.js'
Vue.component('c-testemunho', c_testemunho)
 
import page_home from './view/home/home.js'
Vue.component('p-home', page_home)

import page_sobre from './view/sobre/home.js'
Vue.component('p-sobre', page_sobre)
 
import page_equipe from './view/equipa/home.js'
Vue.component('p-equipe', page_equipe)

import page_contacto from './view/contacto/home.js'
Vue.component('p-contacto', page_contacto)

import page_galeria from './view/galeria/home.js'
Vue.component('p-galeria', page_galeria)

Vue.use(Router)

const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/sobre', component: { template: '<p-sobre></p-sobre>' } },
     { path: '/equipe', component: { template: '<p-equipe></p-equipe>' } },
    { path: '/contacto', component: { template: '<p-contacto></p-contacto>' } },
    { path: '/galeria', component: { template: '<p-galeria></p-galeria>' } }
    
]

const router = new Router({ routes })

new Vue({
    router,
    data: {
        jms: "joaquim"
    },

  
}).$mount('#app')

;(async () => { })()