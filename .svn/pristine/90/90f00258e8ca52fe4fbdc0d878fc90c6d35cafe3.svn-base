<template>
	<div class="mian">

		<div class="age">
			<span class="age_one">操作日志</span>
			<!-- {name:'list',params:{totals:user1}} -->
			<router-link :to="{name:'操作日志'}">
				<Button style="margin-top: -10px;" type="primary" shape="circle">MORE>></Button>
			</router-link>
		</div>
		<hr style="height:1px;border:none;border-top:1px solid #ccc;" />
		<Row>
	        <Row class="table" id="table">		
				<Col :span="24">
					<Table size='small' :row-class-name="rowClassName" :columns="columns1" :data="data1" ref='table' @on-selection-change='selChange'></Table>
					<div style="position:absolute;top:0px;width:100%;height:100%;display: flex;
									align-items: center;
									justify-content: center;background: rgba(210, 216, 222, 0.5);" v-if="loading">
						<Spin size="large"></Spin>
						<h6 style="color:#2d8cf0;margin-top:10px;">正在获取数据...</h6>
					</div>
				</Col>
			</Row>
	    </Row>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		
		data() {
			return {
				loading:false,
				selItem:[],
				columns1: [
				{
										
					title: '用户名',
					key: 'name',
					align: 'center',
					color:'red'
					
				}, {
					title: '手机号',
					key: 'number',
					align: 'center'
				}, {
					title: '操作记录',
					key: 'addr',
					align: 'center',
				}, {
					title: '登录IP',
					key: 'branch',
					align: 'center'
				}, {
					title: '操作时间',
					key: 'level',
                    align: 'center'
				}],
				page_data1: [],
				data1:[],
				page:1　　　　　　　　
			}
		},
		mounted() {
			
		},
		methods: {
			rowClassName (row, index) {
                if (index%2 == 0) {
                    return 'demo-table-info-row';
                } 
                return '';
            },
			selChange(sel){
                    this.selItem = sel;
					console.log(sel)
			}
		},
		mounted(){			
			this.loading = true;			
			axios.get('http://192.168.1.24:9009/static/json/loanRecords.json')
			.then(reponse=>{
				this.loading = false;
				var res = reponse.data.total
				this.data1 = res;
			})
			.catch(error=>{
				// //alert('网络错误')
			})
			
		}

	}
</script>

<style scoped>
	.mian {
		background-color: #FFFFFF;
		padding: 10px;
	}
	.table{
		margin-top: 10px;
	}
	.age {
		height: 40px;
		padding: 10px;
		font-weight: bold;
		border-bottom: 2px;
		display: flex;
		
	}
	.age_one{
		flex: 1;		
	}
	.age_tow{
		font-size: 12px;
		color: #7D7D7D;
	}
	.col{
		text-align: center;
		margin-top: 70px;
	}
	.col img{		
		margin-top: -5px;
	}
	.name{
		height: 40px !important;
		font-size: 20px;
		font-weight: 600;
		line-height: 30px;

	}
	.touzi_p1{
		float: left;
		width: 40%;
		text-align: right;
		height: 40px;
		line-height: 40px;
		font-size: 14px
	}
	.touzi_p2{
		float: left;
		height: 40px;
		line-height: 40px;
		color: #6D9ECE;
		font-size: 20px;
		width: 40%;
		text-align: right;
	}
	.touzi_p3{
		float: left;
		text-align: right;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		margin-left: 3px;
	}
    
    
</style>
<style>
    .mian .ivu-table .demo-table-info-row td{
        background-color: #F1F6FE;
    }
	#table .ivu-table-small th{
		background-color:#40BCF8;
		color:#FFFFFF
	}
</style>

