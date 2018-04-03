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
			<Row>
				<Col :span="2" style="margin-top:20px;">					
					<div class="search" style="width:60px">
						<Button  @click="modal1 = true">     
							<Icon type="document-text" color="#2db7f5"></Icon>
							<span>报备</span>
						</Button> 
					</div>																
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
			<!-- 模块框 -->
			
			<!-- 2未注册用户报备 -->
			<Modal v-model="modal1" width="360" :styles="{top: '200px'}" :mask-closable="false">
				<p slot="header" style="color:#2db7f5">
					<span>报备</span>
				</p>
				<Form  label-position="top" ref="formCustom" :model="formCustom" :rules="ruleCustom">
					<div>
						<Row :gutter="16">
							<Col span="24">
								<FormItem label="商户手机号：" prop="one">
									<Input size="small" v-model="formCustom.one"></Input>
								</FormItem>
							</Col>
							<Col span="12">
								<FormItem label="登录密码：" prop="two">
								    <Select v-model="formCustom.two" size="small" >
										<Option  value="手动填写" select>手动填写</Option>
										<Option  value="系统生成">系统生成</Option>
									</Select>
								</FormItem>
							</Col>
							<Col span="12">
								<FormItem label="密码">
									<Input size="small" v-model="formCustom.seven"></Input>
								</FormItem>
							</Col>
							<Col span="12">
								<FormItem label="验证码" prop="three">
									<Input size="small" v-model="formCustom.three"></Input>
								</FormItem>
							</Col>
							<Col span="12">
								<FormItem label=" ">
									<Button type="info" v-show="Code" @click="authCode">发送验证码</Button>
								    <Button  v-show="!Code">{{count}}s后重新发送</Button>
								</FormItem>
							</Col>
							<Col span="24">
								<FormItem label="商户实名" prop="five">
									<Input size="small" v-model="formCustom.five"></Input>
								</FormItem>
							</Col>
							<Col span="24">
								<FormItem label="身份证号" prop="six">
									<Input size="small" v-model="formCustom.six"></Input>
								</FormItem>
							</Col>
						</Row>
						<Row style="text-align:center;margin-bottom:-30px">
							<Col span="24" >
								<FormItem>
									<Button type="primary" @click="handleSubmit('formCustom')">确定</Button>
									<Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">取消</Button>
								</FormItem>
							</Col>
						</Row>
					</div>
				</Form>
					<div slot="footer" style="display:none">
					</div>
			</Modal>
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
				modal1:false,
				formCustom: {
                    one: '',
					two: '手动填写',
					three:'',
					four:'',
					five:'',
					six:'',
					seven:''
				},
				Code:true,
				count:'',
				timer: null,
				pageSize:12,
                valueDate:'',
				selItem:[],
				ajaxHistoryData:[],
                array:[12,14,18],
                // 初始化信息总条数
				dataCount:0, 
				ruleCustom: {
                    one: [
						{  required: true, message: '输入框不能为空', trigger: 'blur'},
						{ type: 'string',pattern:/^0?1[3|4|5|8][0-9]\d{8}$/, message:'请输入正确的手机号', trigger:'blur'},
					],
					two: [ 
                        {  required: true, message: '输入框不能为空', trigger: 'blur'},
						{ type: 'string',pattern:/^[a-zA-Z0-9]{6,10}$/, message:'只能输入', trigger:'blur'},
					
					],
					three: [
                        {  required: true, message: '输入框不能为空', trigger: 'blur'}
					],
					five: [
                        {  required: true, message: '输入框不能为空', trigger: 'blur'}
					],
					six: [
						{ required: true, message: '输入框不能为空', trigger: 'blur' },
						{ type: 'string',pattern:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message:'请输入正确的身份证号', trigger:'blur'},
                    ],
				},
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
					align: 'center',
                    sortable: true
				}, {
					title: '手机号',
					key: 'number',
					align: 'center',
                    sortable: true
				},{
					title: '客户等级',
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
					title: '注册时间',
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
													 this.first(params.index)
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
											 h('span','分润跟踪')
										 ]),
									 ])
								 ])
								
						])
					}
				}],
				// page_data1: [],
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
			modal1_ok () {
				this.modal1= false
            },
            modal1_no () {
                this.modal1=false;
			},
			first(index){
				// console.log(this.data1[index].number)
				this.$router.push({
					 name: '分润跟踪', 
					 params: { userId: this.data1[index].number }
				})
			},
			authCode(){
				const TIME_COUNT = 59;
				if (!this.timer) {
					this.count = TIME_COUNT;
					this.Code = false;
					this.timer = setInterval(() => {
						if (this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
						}else {
							this.Code = true;
							clearInterval(this.timer);
							this.timer = null;
						}
					}, 1000)
				}
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
			handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
						this.$Message.success('Success!');
                    } else {
						this.$Message.error('Fail!');
                    }
                })
			},
            handleReset (name) {
				this.modal1=false
                this.$refs[name].resetFields();
            }
		},
		created(){			
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
	.modal1_zhu{
        border-radius:5px;
		height:30px;
		line-height:30px;
		background-color:#40A9FF;
		color:#ffffff
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

