<template>
    <div class="productDetail">
        <div class="slwy-panel" id="order">
            <div class="panel-title">
                <div class="title-left">订单信息</div>
                <div class="title-right price">
                    <span>订单金额:￥</span>
                    <span class="num">540</span>
                    <b class="icon"></b>
                </div>
            </div>
            <div class="panel-content">
                <div class="panel-item">
                    <span class="item-left">订单编号</span>
                    <span class="item-right">16566565965569565</span>
                </div>
                <div class="panel-item">
                    <span class="item-left">订单状态</span>
                    <span class="item-right">出票失败</span>
                </div>
                <div class="panel-item">
                    <span class="item-left">失败原因</span>
                    <span class="item-right">该舱位机票价格变动</span>
                </div>
            </div>
        </div>
        <div class="slwy-panel voyage">
            <div class="panel-title">
                航班信息
            </div>
            <div class="panel-content">
                <div class="panel-item">
                    2016年7月16日 上海-成都 （单程）
                </div>
                <div class="panel-item">
                    <span class="feiji-icon"></span>吉祥航班HO1269 空客A320  经济舱
                </div>
            </div>
        </div>
        <div class="slwy-panel time">
            <div class="panel-title">
                <div class="col-4 time-left">
                    <span>06:25</span><span>双流国际机场T1</span>
                </div>
                <div class="col-4 time-center"><b></b></div>
                <div class="col-4 time-right">
                    <span>08:40</span><span>首都国际机场T3</span>
                </div>
            </div>
        </div>
        <div class="slwy-panel ticketsPrice">
            <div class="panel-title">
                票价 <span>￥880</span>
            </div>
        </div>
        <div class="slwy-panel passenger">
            <div class="panel-title">
                <div class="title-left">乘机人信息</div>
                <div class="title-right">第一位乘机人</div>
            </div>
            <div class="panel-content">
                <div class="panel-item">
                    <span class="item-left">姓<b class="indent"></b>名</span>
                    <span class="item-right">罗中皓</span>
                </div>
                <div class="panel-item">
                    <span class="item-left">乘客类型</span>
                    <span class="item-right">成人</span>
                </div>
                <div class="panel-item">
                    <span class="item-left">证件号码</span>
                    <span class="item-right">身份证 6581516599899636</span>
                </div>
                <div class="panel-item">
                    <span class="item-left">票<b class="indent"></b>号</span>
                    <span class="item-right">023-25656596</span>
                </div>
            </div>
        </div>
        <div class="slwy-panel contact">
            <div class="panel-title">
                联系方式
            </div>
            <div class="panel-content">
                <div class="panel-item">
                    <span class="item-left">姓<b class="indent"></b>名</span>
                    <span class="item-right">罗中皓</span>
                </div>
                <div class="panel-item">
                    <span class="item-left">手机号码</span>
                    <span class="item-right">18381334786</span>
                </div>
                <div class="panel-item">
                    <span class="item-left">电子邮箱</span>
                    <span class="item-right">305844021@qq.com</span>
                </div>
            </div>
        </div>
        <div class="slwy-panel distribution">
            <div class="panel-title">
                配送信息
            </div>
            <div class="panel-content">
                <div class="panel-item">
                    <span class="item-left">收件人</span>
                    <span class="item-right">罗中皓</span>
                </div>
                <div class="panel-item">
                    <span class="item-left">手机号码</span>
                    <span class="item-right">18381334786</span>
                </div>
                <div class="panel-item address">
                    <span class="item-left">地<b class="indent"></b>址</span>
                    <span class="item-right">四川省成都市武侯区天赋大道1700环球中心E3-1606</span>
                </div>
            </div>
        </div>
        <a href="javascript:" class="btn btn-normal" id="back">返回</a>
    </div>
    <footer-nav-component index="orderDetail"/>
</template>
<style lang="sass" scoped>

</style>
<script>
    import footerNavComponent from '../components/footer-nav/footer-nav.vue';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            footerNavComponent
        }
    }
</script>
