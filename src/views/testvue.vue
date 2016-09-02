<template>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames | json }}</span>
    <br>
    <select v-model="selected">
        <option selected value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
    </select>
    <span>Selected: {{ selected  }}</span>
</template>
<style scoped>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue',
                checkedNames:[],
                selected:'1'
            }
        },
        components:{

        }
    }
</script>
