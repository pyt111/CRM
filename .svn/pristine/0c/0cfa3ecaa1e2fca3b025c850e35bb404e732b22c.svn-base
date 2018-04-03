<template>
	<div class="zhan_mian">
		<div ref="mian" >
			<Row>
                <Col :span="4" >    
					<span>手机号：</span>
					<Input v-model="Input" placeholder="请输入..." style="width: 100px" size="small"></Input>				
				</Col>
				<Col :span="5" >  
                    <span>维护员区域：</span>
                    <Select v-model="addr" clearable size="small" style="width:100px">
                        <Option value="全部">全部</Option>
                        <Option value="山东">山东</Option>
                        <Option value="上海">上海</Option>
                    </Select>																					
				</Col>
                <Col :span="8">  
                    <span>时间搜索：</span>
                    <DatePicker type="daterange" 
					:v-model="options1" 
					:options="options2" 
					size="small" 
					placement="bottom-start" 
					placeholder="请选择日期" 
					style="width: 200px"
					format="yyyy/MM/dd"
					@on-change="dataChange"></DatePicker>																					
				</Col>
                <Col :span="2"> 
					<Button type="info" size="small" icon="ios-search" @click="check('formInline')">搜索</Button>						
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
                    <p >共{{dataCount}}记录，每页显示{{pageSize}}条，共{{Math.ceil(dataCount/pageSize)}}页</p>		
                </Col>
                <Col :span="16" class="pageP" style="text-align: right;margin-top: 10px;" >		  
				<!-- @on-change="setInitPage" -->
					<Page :total="dataCount" 
					    :current="1" 
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
	import axios from 'axios';
	export default {
		
		data() {
			return {
                loading:false,
                branch:'',
				addr:'',
				options1:'',
				Input:'',
				pageSize:12,
                valueDate:'',
				selItem:[],
				ajaxHistoryData:[],
                array:[12,14,18],
                // 初始化信息总条数
				dataCount:0,
				options2: {
                    shortcuts: [
                        {
                            text: '周',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '季',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        },
                        {
                            text: '年',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 360);
                                return [start, end];
                            }
                        }
                    ]
                },
				columns1: [
				{
					title: '姓名',
					key: 'name',
					align: 'center'
				}, {
					title: '手机号',
					key: 'number',
					align: 'center',
				}, {
					title: '客户上级',
					key: 'addr',
                    align: 'center',
                    sortable: true
				}, {
					title: '等级',
					key: 'level',
                    align: 'center',
                    sortable: true
				}, {
					title: '冻结金额',
					key: 'branch',
                    align: 'center',
                    sortable: true
				}, {
					title: '投资笔数',
					key: 'ladder',
                    align: 'center',
                    sortable: true
				},{
					title: '维护员',
					key: 'way',
                    align: 'center',
                    sortable: true,
				},{
					title: '部门',
					key: 'way',
                    align: 'center',
                    sortable: true,
				},{
					title: '员工上级',
					key: 'way',
                    align: 'center',
                    sortable: true
				},{
					title: '分类',
					key: 'way',
					align: 'center',
				},{
					title: '提成',
					key: 'way',
					align: 'center',
                    sortable: true
				},{
					title: '注册时间',
					key: 'way',
					align: 'center',
				},{
					title: '备注',
					key: 'way',
					align: 'center',
				},{
					title: '操作',
					key: 'action',
					width: 150,
					align:'center',
					render: (h, params) => {
						return h('div',[
								 h('Dropdown',{
									 placement:'bottom-end',
									 style:{
										 align:'left'
									 }
								 },[
									 h('i',{
										 
										 class:{
											'auditmanage_shezhi':true,
											'icon':true,
											'ivu-icon':true,
											'ivu-icon-gear-b':true
										 }
									 }),
                                     h('DropdownMenu',{
										  slot:"list"
									 },[
										h('DropdownItem',{
											 nativeOn:{
												 click:()=>{
													 this.first(params)
												 }
											 }
										 },[
											 h('Icon',{
												 props:{
                                                    type:'android-locate'
												 },
												 style:{
													 marginRight:'5px',
													 color:'#69BEE9'
												 }
											 }),
											 h('span','投资跟踪')
											 
										 ]),
										 
									 ])
								 ])
						])
					}
				}],
				data1:[],
				page:1　　　　　　　　
			}
		},
		mounted() {
			
		},
		methods: {
			selChange(sel){
                    this.selItem = sel;
			},
			check(){
				console.log(this.Input)
				console.log(this.addr)
				console.log(this.options1)
			},
			dataChange(event){
				console.log(event)
				this.options1 = event
			},
			Axios(){
                 this.loading = true;			
					axios.get('http://192.168.1.24:9009/static/json/loanmanage.json')
					.then(reponse=>{
						this.loading = false;
						var res = reponse.data.total
						this.data1 = res;
						this.ajaxHistoryData = this.data1
						this.dataCount = this.data1.length
						// 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
						if(this.data1 < this.pageSize){
							this.data1 = this.ajaxHistoryData;
						}else{
							this.data1 = this.ajaxHistoryData.slice(0,this.pageSize);
						}
					})
					.catch(error=>{
						//alert('网络错误')
					})
			},
			changepage(index){
                var _start = ( index - 1 ) * this.pageSize;
                var _end = index * this.pageSize;
                this.data1 = this.ajaxHistoryData.slice(_start,_end);
			},
			pageChange(index){
                this.Axios()
				this.pageSize = index;
                var _start = ( index - 1 ) * this.pageSize;
                var _end = index * this.pageSize;
                this.historyData = this.ajaxHistoryData.slice(_start,_end);
			},
			first(params){
				// console.log(params.row.number)
				var namberId = params.row.number
				this.$router.push({name:'投资跟踪',params:{number:namberId}})
			}
		},
		mounted(){			
			this.Axios()
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
</style>

