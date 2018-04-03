<template>
	<div class="mian">

		<div class="age">
			<span class="age_one">月度业绩排名</span>
			<!-- params:{totals:user1}:to="{name:'业绩管理'}" -->
			<router-link :to="{name:'业绩管理'}">
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
	// import axios from 'axios';
	export default {
		
		data() {
			return {
				loading:false,
				selItem:[],
				columns1: [
				{   
					title:'排名',
					key: 'uuID',
					align: 'center',
				},{
										
					title: '员工姓名',
					key: 'name',
					align: 'center',
					color:'red'
					
				}, {
					title: '员工业绩(元)',
					key: 'userID',
					align: 'center'
				}, {
					title: '员工等级',
					key: 'level',
                    align: 'center'
				}, {
					title: '员工上级',
					key: 'ladder',
					align: 'center',
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
			this.$post('/static/json/loanRecords')
			.then(reponse=>{
				this.loading = false;
				// console.log(reponse);
				var res = reponse.data.total
				console.log(res);
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
	.table .ivu-table-small th{
		background-color:red
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

