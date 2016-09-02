<template>
    <div class="mui-content search">
        <div class="slwy-panel panel-border panel-search">
            <div class="panel-title no-border">
                <div class="title-left active">{{ msg }}</div>
                <div class="title-right">往返</div>
            </div>
            <div class="panel-content">
                <div class="panel-item fromCity">
                    <span class="item-left">出发城市</span>
                    <span class="item-right col-7">
                    <div class="col-12">
                        <select name="" id="a" class="input no-border">
                            <option value="">请选择</option>
                            <option value="">广州</option>
                            <option value="">深圳</option>
                            <option value="">东莞</option>
                        </select>
                    </div>
                </span>
                </div>
                <div class="panel-item toCity">
                    <span class="item-left">到达城市</span>
                    <span class="item-right col-7">
                    <div class="col-12">
                        <select name="" id="b" class="input no-border">
                            <option value="">请选择</option>
                            <option value="">广州</option>
                            <option value="">深圳</option>
                            <option value="">东莞</option>
                        </select>
                    </div>
                </span>
                </div>
                <div class="right-icon"></div>
                <div class="panel-item">
                    <span class="item-left">出发日期</span>
                    <span class="item-right">
                    <input type="text" readonly="readonly" @click="initDate(1)" v-model="start" class="input no-border"/>
                </span>
                </div>
                <div class="panel-item">
                    <span class="item-left">到达日期</span>
                    <span class="item-right">
                    <input type="text" readonly="readonly" @click="initDate(2)" v-model="end" class="input no-border"/>
                </span>
                </div>
                <div class="panel-item">
                    <span class="item-left">选择舱位</span>
                    <span class="item-right">不限</span>
                </div>
                <a href="javascript:" class="btn btn-normal" id="search">查询</a>
            </div>
        </div>
    </div>
    <footer-nav-component index="search"/>
</template>
<style>

</style>
<script>
    import dPickerComponent from '../components/date-picker/date-picker.vue';
    import footerNavComponent from '../components/footer-nav/footer-nav.vue';
    export default{
        data(){
            return{
                msg:'hello',
                start:'2015-10-10',
                end:'2015-10-11',
            }
        },
        ready(){
            mui.init();
        },
        methods:{
            initDate:function(type){
                let that=this;
                let param={
                    value:type==1?that.start:that.end,
                    type:"date",
                    beginYear:2010,
                    endYear:2020
                };
                let picker = new mui.DtPicker(param);
                picker.show((rs) => {
                    picker.dispose();
                    if(type==2&&that.start>rs.value){
                        mui.toast('结束日期不能小于开始日期');
                        return;
                    }
                    if(type==1&&that.end<rs.value){
                        mui.toast('开始日期不能大于结束日期');
                        return;
                    }
                    type==1?(that.start =  rs.value):(that.end =  rs.value);
                });
            }
        },
        components:{
            dPickerComponent,
            footerNavComponent
        }
    }
</script>
