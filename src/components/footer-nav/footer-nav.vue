<template>
    <div class="nav-footer">
        <div class="col-4" :class="{ 'active': index=='search'}" @click="toPage('search')">
            <b class="item-logo plane"></b>
            <span>机票预订</span>
        </div>
        <div class="col-4" :class="{ 'active': index=='orderDetail'}" @click="toPage('orderDetail')">
            <b class="item-logo hb"></b>
            <span>航班动态</span>
        </div>
        <div class="col-4" :class="{ 'active': index=='login'}" @click="toPage('login')">
            <b class="item-logo zhiji"></b>
            <span>在线值机</span>
        </div>
    </div>
</template>
<style>
    body{
        padding-bottom: 1rem;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'footer-nav',
            }
        },
        props:['index'],
        methods:{
            toPage(str){
                let that=this;
                that.$router.go('/'+str);
            }
        },
        components:{

        }
    }
</script>
