<template>
	<div>      
		
		<Row :gutter="16" style="margin-top: 20px;">
			<Col :xs="24" :sm="8" :md="8" :lg="8">			   
			   <div class="state-overview">
					<Col span="24">	
					    <div class="mian">

							<div class="age">
								<span class="age_one">充值待付款
								    <span class="age_tow">金额合计:{{totals}}元</span>
								</span>
								
								<router-link :to="{name:'list',params:{totals:user1}}">
								    <span style="margin-right: 10px;" class="badge badge-info">317</span>
								</router-link>
							</div>
							<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
							<div style="margin-top: 10px;" class="footer" v-for="(i,index) in user1" :key="i.id" v-if="index<3">
								<div class="footer_left">
									<img src="../../../static/img/board/b5.png"/>
									<span>{{i.name}}充值{{i.money}}元失败</span>
								</div>
								<div class="footer_right">
									发送时间：{{i.time}}
								</div>
							</div>
					
						</div>	
					</Col>					
				</div>               
			</Col>
			<Col :xs="24" :sm="8" :md="8" :lg="8">			   
			   <div class="state-overview">
					<Col span="24">	
					    <div class="mian">

							<div class="age">
								<span class="age_one">提现待审核
								   <span class="age_tow">金额合计:{{totals}}元</span>
								</span>
								<span style="margin-right: 10px;" class="badge badge-info">317</span>
							</div>
							<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
							<div style="margin-top: 10px;" class="footer" v-for="(i,index) in user1" v-if="index<3">
								<div class="footer_left">
									<img src="../../../static/img/board/b3.png"/>
									<span>{{i.name}}充值{{i.money}}元失败</span>
								</div>
								<div class="footer_right">
									发送时间：{{i.time}}
								</div>
							</div>
					
						</div>	
					</Col>					
				</div>               
			</Col>
			<Col :xs="24" :sm="8" :md="8" :lg="8">			   
			   <div class="state-overview">
					<Col span="24">	
					    <div class="mian">

							<div class="age">
								<span class="age_one">提现待支付
								   <span class="age_tow">金额合计:{{totals}}元</span>
								</span>
								<span style="margin-right: 10px;" class="badge badge-info">317</span>
							</div>
							<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
							<div style="margin-top: 10px;" class="footer" v-for="(i,index) in user1" v-if="index<3">
								<div class="footer_left">
									<img src="../../../static/img/board/b4.png"/>
									<span>{{i.name}}充值{{i.money}}元失败</span>
								</div>
								<div class="footer_right">
									发送时间：{{i.time}}
								</div>
							</div>
					
						</div>	
					</Col>					
				</div>               
			</Col>

		</Row>
		<Row :gutter="16" >
			<Col :xs="24" :sm="8" :md="8" :lg="8">			   
			   <div class="state-overview">
					<Col span="24">	
					    <div class="mian">

							<div class="age">
								<span class="age_one">换卡待审核
								    <span class="age_tow">金额合计:{{totals}}元</span>
								</span>
								<span style="margin-right: 10px;" class="badge badge-info">317</span>
							</div>
							<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
							<div style="margin-top: 10px;" class="footer" v-for="(i,index) in user1" v-if="index<3">
								<div class="footer_left">
									<img src="../../../static/img/board/b1.png"/>
									<span>{{i.name}}充值{{i.money}}元失败</span>
								</div>
								<div class="footer_right">
									发送时间：{{i.time}}
								</div>
							</div>
					
						</div>	
					</Col>					
				</div>               
			</Col>
			<Col :xs="24" :sm="8" :md="8" :lg="8">			   
			   <div class="state-overview">
					<Col span="24">	
					    <div class="mian">

							<div class="age">
								<span class="age_one">高端定制待审核
								   <span class="age_tow">金额合计:{{totals}}元</span>
								</span>
								<span style="margin-right: 10px;" class="badge badge-info">317</span>
							</div>
							<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
							<div style="margin-top: 10px;" class="footer" v-for="(i,index) in user1" v-if="index<3">
								<div class="footer_left">
									<img src="../../../static/img/board/b6.png"/>
									<span>{{i.name}}充值{{i.money}}元失败</span>
								</div>
								<div class="footer_right">
									发送时间：{{i.time}}
								</div>
							</div>
					
						</div>	
					</Col>					
				</div>               
			</Col>
			<Col :xs="24" :sm="8" :md="8" :lg="8">			   
			   <div class="state-overview">
					<Col span="24">	
					    <div class="mian">

							<div class="age">
								<span class="age_one">理财师待审核
								    <span class="age_tow">金额合计:{{totals}}元</span>
								</span>
								<span style="margin-right: 10px;" class="badge badge-info">317</span>
							</div>
							<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
							<div style="margin-top: 10px;" class="footer" v-for="(i,index) in user1" v-if="index<3">
								<div class="footer_left">
									<img src="../../../static/img/board/b2.png"/>
									<span>{{i.name}}充值{{i.money}}元失败</span>
								</div>
								<div class="footer_right">
									发送时间：{{i.time}}
								</div>
							</div>
					
						</div>	
					</Col>					
				</div>               
			</Col>

		</Row>
		

		
	</div>
</template>

<script>
	import axios from 'axios';
	const end = new Date();
    const start = new Date();
    export default {
        data () {
            return {
                options1:['今天','最近7天','最近一个月','全部'],
                value2: [start,end],
                today:[1,0,0,0],
                user1:[],
                totals:''
            }
        },
        methods:{
        	change(){
        		var Div = event.currentTarget;
        		var text = Div.children[0].innerHTML
        		console.log(text)
        		var shortcuts=[
                        {
                            text: '今天',
                            value () {
                            	const end = new Date();
    							const start = new Date();
                                return [start, end];
                            }
                        },
                        {
                            text: '最近7天',
                            value () {
                                const end = new Date();
    							const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近一个月',
                            value () {
                                const end = new Date();
    							const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '全部',
                            value () {
                                const end = new Date();
    							const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
        		if (text=='今天'){
        			this.value2 = shortcuts[0].value();
        			this.today=[1,0,0,0]
        		}else if (text=='最近7天'){
        			this.value2 = shortcuts[1].value();
        			this.today=[0,1,0,0]
        		}else if (text=='最近一个月'){
        			this.value2 = shortcuts[2].value();
        			this.today=[0,0,1,0]
        		}else if (text=='全部'){
        			this.value2 = shortcuts[3].value();
        			this.today=[0,0,0,1]
        		}
        	},
        	check(){
				this.$Modal.info({
					content: "起始日期："+this.value2   
               })
			},
        },
		created(){			
			this.loading = true;
			let _this = this;
			let sm = true;
			axios.get('http://192.168.1.24:9009/static/dataManage.json')
			.then(reponse=>{
				console.log(reponse)
				this.loading = false;
	            this.user1 = reponse.data.total;
	            this.totals = reponse.data.totals
	            
			})
			.catch(error=>{
				//alert('网络错误')
			})
			
		}

    }
</script>

<style scoped>
	.search{
		display: block;
		width: 100%;
		padding: 8px;
		background-color: #FFFFFF;
	}
	.top{
		float: left;
	}
	.header{
		float: left;		
	}
	.header_span{
        display: block;
        width: 80px;
        float: left;	    
		margin-left: 10px;
	}
	.today {
		background: #3DB1F3;
		color: #FFFFFF;
	}
	/*下面部分*/
	.mian {

		background-color: #FFFFFF
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
	.footer{

		display: flex;
		padding: 10px;
	
	}
	.footer_left{
		flex: 1;
		
	}
	.footer_right{

		line-height: 40px;
		color: #D4E0E5;
	}
	.state-overview .ivu-col {
		margin-bottom: 20px
	}
	
	.state-overview .state-value .value {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 5px
	}
	
	.state-overview .state-value .title {
		font-size: 14px
	}
</style>