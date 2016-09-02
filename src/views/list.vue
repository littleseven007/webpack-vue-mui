<template>
    <div>{{msg}}</div>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell" v-for="item in datalist">
            <a class="mui-navigate-right">{{item}}</a>
        </li>

    </ul>

</template>
<script type="text/ecmascript-6">

        export default {
            data(){
                return{
                    datalist:[],
                    msg:null
                }
            },
            ready () {
                let that=this;
                let url='http://localhost:29888/api/Values';
              //  that.$http.get(url).then(function (data) {
                //    console.log(data);
                //})
                let data={};
                that.$http.get(url,data).then((response)=>{
                    that.$set('datalist',response.data);
                    that.$set('msg','加載完成');
                }); // 采用 es6写法，也可以用常用写法function(data){}
            }
    };

</script>