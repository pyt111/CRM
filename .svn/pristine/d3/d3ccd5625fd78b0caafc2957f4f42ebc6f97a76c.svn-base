<template>
	<div>列表
	   <Cow style="text-align: center;">
	   	<Col :xs="24" :sm="12" :md="12" :lg="12" style="text-align: left;">			   
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
							<div style="margin-top: 10px;" class="footer" v-for="(i,index) in $route.params.totals" :key="i.id">
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
	   </Cow>
	  <p>{{$route.params.totals}}</p>
	</div>
</template>

<script>
</script>

<style scoped>

   .mian {

		background-color: #FFFFFF
	}
	
	.age {
		height: 40px;
		padding: 10px;
		font-weight: 700;
		border-bottom: 2px;
		display: flex;
		font-size: 16px
	}
	.age_one{
		flex: 1;		
	}
	.age_tow{
		font-size: 12px;
		font-weight: 100;
			color: #7D7D7D;
	}
	.footer{

		display: flex;
		padding: 10px;
	
	}
	.footer_left{
		flex: 1;
		color: #000000;
		font-weight: 700;
	}
	.footer_right{

		line-height: 40px;
		color: #D4E0E5;
	}
</style>