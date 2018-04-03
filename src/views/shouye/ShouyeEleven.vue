<template>
	<div >
		<div class="chart1">
			<p class="name">投资统计</p>
			<hr style="height:1px;border:none;border-top:1px solid #ccc;" />			
			<chart :options="option" class="echarts" id="chart" @click='aaaa'> </chart>
			
		</div>
		

	</div>
</template>

<script>
	var colors = ['#40A9FF', '#d14a61', '#675bba','red'];
	
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				color:colors,
				option: {
					tooltip: {
						trigger: 'axis',
						// axisPointer: {
						// 	type: 'cross',
						// 	crossStyle: {
						// 		color: '#999'
						// 	}
						// }
					},
					
					legend: {
						data:['上海','山东','其他','合计']
					},
					xAxis: [
						{
							type: 'category',
							data: ['2017-01','2017-02','2017-03','2017-04','2017-05','2017-06','2017-07','2017-08','2017-09','2017-10','2017-11','2017-12'],
							axisPointer: {
								type: 'shadow'
							},
							nameTextStyle: {
							color: '#c3c3c3',							
						},
						}
					],
					yAxis: [
						{
							type: 'value',
							min: 0,
							max: 1200,
							interval: 200,
							axisLabel: {
								formatter: '{value} 元'
							}
						},
						{   
							show:false, 
							
						}
					],
					series: [
						{
							name:'上海',
							type:'bar',
							data:[245, 444, 577, 333.2, 88.6, 444.7, 410.6, 545.2, 454.6, 124.0, 458.4, 322.3],
							itemStyle: {
				                normal: {
				                	color: '#40A9FF'
				                	}
				            },
						},
						{
							name:'山东',
							type:'bar',
							data:[111, 444.9, 424.0, 525.4, 452.7, 533.7, 777.6, 232.2, 543.7, 453.8, 453.0, 20.3],
							itemStyle: {
				                normal: {
				                	color: '#FFA340'
				                	}
				            },
						},
						{
							name:'其他',
							type:'bar',
							data:[444.6, 44.9, 559.0, 55.4, 278.7, 52.7, 55.6, 55.2, 444.7, 554.8,546.0,112.3],
							itemStyle: {
				                normal: {
				                	color: '#67E0E3'
				                	}
				            },
						},
						{
							name:'合计',
							type:'line',
							yAxisIndex: 1,
							data:[888.0, 999.2, 999.3, 888.5, 666.3, 888.2, 1000.3, 555.4, 888.0, 999.5, 999.0, 898.2],
							itemStyle: {
				                normal: {
				                	color: '#F7C7C7'
				                	}
				            },
						}
					]
				},
			}
		},
		methods:{
			aaaa(params){
				console.log(params)
			}
		}
			
	}
</script>
<style scoped>
	#chart{
		width: 100%;
		height: 495px;
		
	}
	.chart1{
		width: 100%;
		background-color: #FFFFFF;
		padding: 10px;
	}
	.name{
		height: 40px;
		padding: 10px;
		font-weight: 700;
		
	}
</style>