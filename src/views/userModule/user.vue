<template>
    <div>
        <search-top :tableArr="inputs"></search-top>
        <basics-table :baseC="baseConfig" :apiNameConfig="apiName" :apiPortConfig="apiPort"></basics-table>
    </div>
</template>

<script>
// import { userList, userCount } from "api/list/allApi.js";
import SearchTop from "components/customTemplate/search/InputList";//input搜索框组件
import BasicsTable from "components/customTemplate/table/BasicsTable";//table+page组件
export default {
    name: "user",
    components: {SearchTop, BasicsTable },
    data() {
        return {
             starVal:'',
            endVal:'',
            userNameVal:'',
            phoneVal:'',
            baseConfig: {
                //向子组件传值 basicsTable配置
                loading: false,
                columns: [//列表头部需要的数据名称--title,与后台对应接受的参数名--key,列表项显示是位置--align;
                    { title: "用户账号", key: "userName", align: "center" },
                    { title: "真实姓名", key: "trueName", align: "center" },
                    { title: "创建时间", key: "createTime", align: "center" },
                    { title: "注册途径", key: "user_ek1", align: "center" },
                    { title: "身份证号码", key: "cardId", align: "center" }
                ],
                data: [],
                page: 1, //默认第一页
                tots: 0, //总计多少条  默认0
                putData: {
                    pageSize: 10 //每页显示多少条  默认10条
                }
            },
            apiName: {//需要调用的接口方法名称
                count: "count",
                list: "list"
            },
            apiPort:{
				countPort:'/asd/table/userCount',
                listPort:'/table/userList',
                jsons:'userList'
			},
            //向子组件传值 inputList配置
            inputs: [
				{kind:'date',id:'star',name:'开始时间:',placeholder:"开始时间",type:'date',colSize:{xs:12,sm:6,md:6,lg:5},val:''},
				{kind:'date',id:'end',name:'结束时间:',placeholder:"结束时间",type:'date',colSize:{xs:12,sm:6,md:6,lg:5},val:''},
				{kind:'textInput',id:'userName',name:'用户名称:',placeholder:"请输入用户名称",colSize:{xs:24,sm:6,md:6,lg:5},val:''},
				{kind:'textInput',id:'phone',name:'手机号码:',placeholder:"请输入手机号码",colSize:{xs:24,sm:6,md:6,lg:5},val:''},
				{kind:'textInput',id:'phone2',name:'手机号码2:',placeholder:"请输入手机号码2",colSize:{xs:24,sm:6,md:6,lg:5},val:''},
            ]
           
        };
    }
};
</script>

<style scoped>
    .ivu-input{
        widows: 1000px;
    }
</style>