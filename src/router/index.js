import { createRouter, createWebHistory } from 'vue-router';
import Tugas from '../views/transaksi/tugas.vue';

import tugas4 from '../views/Tugas4/tugas4.vue'
import daftar from '../views/Tugas4/daftar.vue';


const routes = [
    // {
    //     path : '/tugas2',
    //     name : 'transaksi.tugas2',
    //     component:()=> import('../views/transaksi/tugas2.vue')
    // },
    {
        path : '/tugas',
        name : 'transaksi.tugas',
        component:Tugas
    },
    {
        path : '/daftar',
        name : 'Tugas4.daftar',
        component:daftar
    },
    {
        path : '/tugas4',
        name : 'Tugas4.tugas4',
        component:tugas4
    },
    // {
    //     path : '/tugas4',
    //     name : 'transaksi.tugas4',
    //     component:()=> import('../views/transaksi/tugas4.vue')
    // }
];
const router = createRouter({
    history : createWebHistory(),
    routes
})
export default router;