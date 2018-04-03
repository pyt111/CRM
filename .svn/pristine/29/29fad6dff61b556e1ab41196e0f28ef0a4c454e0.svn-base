<template>
	<div id="">
		<Button @click="getUser">获取数据</Button>
	<Table :loading="loading"  :columns="columns1" :data="data1"></Table>
		<div class="text_align margin_top">
			 <Page show-total :total="tots" @on-change='onChangePage' @on-page-size-change='pageSizeChange' placement="top" show-sizer  show-elevator></Page>
		</div>
	</div>
	
</template>

<script>
	import { userList,userCount } from 'api/user/tableList.js';
	import { time1,time2,tableList} from 'static/bil/formatting';
	export default {
		data() {
			return {
				loading:false,
				columns1:[
					  	{title:'用户账号',key:'userName',align:'center'},
						{title:'真是姓名',key:'trueName',align:'center'},
						{title:'创建时间',key:'createTime',align:'center'},
						{title:'注册途径',key:'user_ek1',align:'center'},
						{title:'身份证号码',key:'cardId',align:'center'}
				],
				data1:[],
				page: 1, //默认第一页
				tots:0,//总计多少条  默认0
				pageSize:10//每页显示多少条  默认10条
			}
		},
		created(){
			this.getUser() //打开页面后执行
		},
		methods:{
			getUser() {
				let userData = {
					pageSize:this.pageSize
				}
				userCount(userData).then(response => {
//					console.log(response)
					if(response.data.count > 0) {//当后台返回页数大于0时开始执行获取列表函数
						this.tots = response.data.num
						this.getUserList()
					}
				})
			},
			getUserList() {
				this.loading = true;
				let datas;
				let keys=[];
				let userListData = { //向后台请求的参数
					page:this.page,//向后台请求第几页
					pageSize:this.pageSize //每页几条
				}
				userList(userListData).then(response => {
					if(response.data) { //关闭loading
						this.loading = false; 
					}
					datas = response.data
					for(let x in this.columns1) {
						keys.push(this.columns1[x].key)
					}
//					console.log(tableList(datas,keys))
					this.data1 = tableList(datas,keys)
				})
			},
			onChangePage(page) {
				this.page = page
				
				this.getUserList(page)//选择第几页
			},
			pageSizeChange(pagesize) {
//				console.log(pagesize)
				this.pageSize = pagesize
				this.getUser()//每页显示条数
			}
			
		}
	}
</script>

<style scopd>
	.text_align{
		text-align: right;
	}
	.margin_top{
		margin-top: 10px;
	}
</style>