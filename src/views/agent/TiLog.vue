<template>
	<div class="zhan_mian">
		<div ref="mian" >
			<Row>
				<Col :span="6" >    
					<span>结算状态：</span>
					<Select v-model="checkState" size="small" style="width: 100px" @on-change="optionChange">
                         <Option option  value="全部" v-for="item in checkStates":value="item.value" :key="item.value" >{{ item.label }}</Option>
                    </Select>				
				</Col>
                <Col :span="12">  	
					<Button type="info" size="small" icon="ios-search" @click="check">搜索</Button>																				
				</Col>
			</Row>
			<Row class="table" >		
				<Col :span="24">
					<Table  :columns="columns1"  :data="data1" ref='table' @on-selection-change='selChange'></Table>
					<div style="position:absolute;top:0px;width:100%;height:100%;display: flex;
									align-items: center;
									justify-content: center;background: rgba(210, 216, 222, 0.5);" v-if="loading">
						<Spin size="large"></Spin>
						<h6 style="color:#2d8cf0;margin-top:10px;">正在获取数据...</h6>
					</div>
				</Col>
				<Col :span="8" style="margin-top: 10px;"  class="page">	
                    <p >共{{total}}记录，每页显示{{pageSize}}条，共{{Math.ceil(total/pageSize)}}页</p>		
                </Col>
                <Col :span="16" class="pageP" style="text-align: right;margin-top: 10px;" >		  
				<!-- @on-change="setInitPage" -->
					<Page :total="total" 
					    :current="pageNum" 
						show-sizer show-elevator 
						:page-size-opts="array"
						:page-size="pageSize"
						@on-change="changepage"
						@on-page-size-change="pageChange" >
					</Page>
                </Col>
			</Row>
		</div>
	</div>
</template>


<script>
	// import axios from 'axios';
	export default {
		data() {
			return {
                loading:false,
                branch:'',
				addr:'',
				checkStates:[
					{value: '',label: '全部'},
                    {value: '3',label: '已结算'},
                    {value: '1',label: '未结算'},
                    {value: '2',label: '等待支付'},
                    {value: '-1',label: '支付失败'}
				],
				state:'',
				pageNum:1,
				pageSize:12,
                valueDate:'',
				selItem:[],
				checkState:'',
                array:[12,14,18],
                // 初始化信息总条数
				total:0, 
				columns1: [
				{
					title: '用户名',
					key: 'userName',
					align: 'center'
				},{
					title: '手机号',
					key: 'userPhone',
					align: 'center'
				}, {
					title: '结算状态',
					key: 'state',
					align: 'center',
                    sortable: true
				},{
					title: '操作记录',
					key: 'channelName',
					align: 'center',
                    sortable: true
				}, {
					title: '提现金额',
					key: 'payMoney',
					align: 'center',
                    sortable: true,
					className:'demo-table-info-column'
				},{
					title: '到账金额',
					key: 'withdrawMoney',
					align: 'center',
                    sortable: true,
					className:'demo-table-info-column'
				}, {
					title: '手续费',
					key: 'payFee',
					align: 'center',
                    sortable: true
				},{
					title: '操作时间',
					key: 'time',
					align: 'center',
					width:'150px',
                    sortable: true
				}],
				// page_data1: [],
				data1:[],
				page:1　　　　　　　　
			}
		},
		methods: {
			optionChange(events) {
				console.log(events);
				 this.state = events;
				 this.pageNum = 1;//选择状态后初始化为第一页面
				 this.baseData()
			},
			selChange(sel){
                    this.selItem = sel;
			},
			check(){
				if(this.pageNum != 1){
					this.pageNum = 1;
				}
				this.baseData()
			},
			baseData(){
                // var params = new URLSearchParams()
				// params.append('agentId', 'e555d1ef-f415-417e-878c-edeed4fcd387')
				// params.append('pageNum', this.pageNum)
				// params.append('phone', this.phone)
				// params.append('pageSize', this.pageSize)
				// console.log(this.$store.getters.uid);
					let userId = '';
					let data = {
						agentId:this.$store.getters.uid,
						pageNum:this.pageNum,
						state:this.state,
						pageSize:this.pageSize
					}
                    this.loading = true;			
					// this.post(process.env.BASE_API+'/agent/UserManage/v1/withdrawMoneyDetail',
					// data
					// )
					 this.$store.dispatch('x_TXMX',data).then(res=>{
						this.loading = false;
						this.data1 = res.result.list;
						this.total = res.result.total
						//this.$Message.success(reponse.message)
					})
					.catch(error=>{
						this.$Message.error(error.message)
						//alert('网络错误')
					})
			},
			changepage(index){
				this.pageNum = index
				this.baseData()
			},
			pageChange(index){
				this.pageSize = index
				this.baseData()
			},
			handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
						this.$Message.success('Success!');
                    } else {
						this.$Message.error('Fail!');
                    }
                })
			},
		},
		mounted(){	
				this.baseData()
		}

	}
</script>

<style scoped>
    
   .page{
       height: 40px;
	   
   }
   .page p{
       border-left: 3px solid #2db7f5;
       height: 20px;
       margin-top: 10px;
       padding-left: 10px;
   }
  
	/* 头部 */
	.table{
		margin-top: 30px;
	}
	.search{
		float: left;
	}
	.cursor{
		cursor: pointer;
	}
	.check{
		float: left;
		margin-left: 20px;
	}
    .delete{
		margin-left: 20px;
	}
	.zhan_mian{
		border-top: 3px solid #48A2FE; 
		background-color: #ffffff;
		padding: 20px;
		border-radius: 5px;
	}
</style>
<style>
body,
	html {
	width: 100%;
	height: 100%;
	background-color: #EDEEF2;
	}
   .pageP .ivu-select-dropdown {
    width: inherit;
    max-height: 200px;
    overflow: auto;
    margin: 5px 0;
    padding: 5px 0;
    background-color: #ffffff;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    position: absolute;
    z-index: 900;
	top:-110px !important
}
.auditmanage_shezhi{
		font-size:16px
	}

	.auditmanage_shezhi:hover{
		color: #FE8320
	}
	.ivu-table td.demo-table-info-column{    
        color: #2db7f5;
    }
</style>

