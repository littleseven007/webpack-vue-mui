/**
 * Created by aresn on 16/8/22.
 */

const routers = {
    '/index': {
        component (resolve) {
            require(['../views/index.vue'], resolve);
        }
    },
    'list':{
        component(resolve){
            require(['../views/list.vue'],resolve);
        }
    },
    'login':{
        component(resolve){
            require(['../views/login.vue'],resolve);
        }
    },
    'search':{
        component(resolve){
            require(['../views/search.vue'],resolve);
        }
    },
    'orderDetail':{
        component(resolve){
            require(['../views/orderDetail.vue'],resolve);
        }
    },
    'vue':{
        component(resolve){
            require(['../views/testvue.vue'],resolve);
        }
    }
};
export default routers;