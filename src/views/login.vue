<template>
    <form class="mui-input-group">
        <div class="mui-input-row">
            <label>用户名</label>
            <input type="text" v-model="loginModel.userName" class="mui-input-clear" placeholder="请输入用户名">
        </div>
        <div class="mui-input-row">
            <label>密码</label>
            <input type="password" v-model="loginModel.password" class="mui-input-password" placeholder="请输入密码">
        </div>
        <div class="mui-button-row">
            <button type="button" class="mui-btn mui-btn-primary" @click="login" >登录</button>
            <button type="button" class="mui-btn mui-btn-danger" >取消</button>
            <span>{{msg}}</span>
        </div>
    </form>
    <footer-nav-component index="login"/>
</template>
<script type="text/ecmascript-6">
    import footerNavComponent from '../components/footer-nav/footer-nav.vue';
    export default{
            data(){
              return {
                  // 登录对象
                  loginModel:{
                    userName:'',
                    password:'',
                  },
                  msg:'',
                  loginUrl:'http://localhost:29888/api/values',
                  loginOutUrl:''
              }
            },
            ready:function () {

            },
            methods:{
                login:function () {
                    let that=this;
                    that.$http.post(that.loginUrl,that.loginModel)
                            .then((response)=>{
                               var body=response.json();
                                that.msg='登录成功';
                                that.userName=body.userName;
                                sessionStorage.setItem('usertoken',that.userName);
                                sessionStorage.setItem('accesstoken','!@#$%^&*()');
                                that.$router.go('/list'); // 跳转
                            });
                }
            },
            components:{
                footerNavComponent
            }

    };

</script>