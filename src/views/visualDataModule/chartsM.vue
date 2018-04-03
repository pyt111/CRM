<template>
	<Row>

		<Col :span="24">
		<!--<chart :options='option'></chart>-->
		<div id="myCharts">
			
		</div>
		</Col>

	</Row>

</template>


<script>
	import { echartsTimer } from 'api/list/allApi.js';
	let echarts = require('echarts/lib/echarts');
	require('echarts/lib/chart/line');
	require('echarts/lib/component/legend');
	require("echarts/lib/component/dataZoom");
	require("echarts/lib/component/markLine");
	export default {

		data() {
			return {
				option: {
					baseOption:{
						title: {
						text:'Beijing AQI',
						left:'center',
						top:'10'
					},
					tooltip:{
						trigger:'axis'
					},
					xAxis:{
						data:[]
					},
					yAxis:{
						  splitLine: {
							show: false
						}
					},
					 toolbox: {
						left: 'center',
						feature: {
							dataZoom: {
								yAxisIndex: 'none'
							},
							restore: {},
							saveAsImage: {}
						}
					},
					dataZoom:[
						{startValue:'2014-01-01',endValue:'2014-03-02'},
						{type:'inside'}
					],
					visualMap: {
						top: 10,
						right: 10,
						pieces: [{
							gt: 0,
							lte: 50,
							color: '#096'
						}, {
							gt: 50,
							lte: 100,
							color: '#ffde33'
						}, {
							gt: 100,
							lte: 150,
							color: '#ff9933'
						}, {
							gt: 150,
							lte: 200,
							color: '#cc0033'
						}, {
							gt: 200,
							lte: 300,
							color: '#660099'
						}, {
							gt: 300,
							color: '#7e0023'
						}],
						outOfRange: {
							color: '#999'
						}
					},
					series:{
						name:'BJ AQI',
						type:'line',
						data:[],
						markLine:{
							silent: true,
							data:[
								{yAxis:50},
								{yAxis:100},
								{yAxis:150},
								{yAxis:200},
								{yAxis:300}
							]
						}
					}
					},
					media:[
						{
							query:{
								minWidth:'300',
								maxWidth:'600'
							},
							option:{
								
							}
						}
					]
				}
				
			}
		},
		methods: {
			mycharts(data) {
				// console.log(data);
				let mychart = echarts.init(document.getElementById('myCharts'));
				this.option.baseOption.xAxis.data = data.map(function (times) {
					return times[0]
				});
				this.option.baseOption.series.data = data.map(function (dat) {
					return dat[1]
				});
				 mychart.setOption(this.option);
				 window.onresize = mychart.resize;
			}
			
			 
		},
		mounted() {
			echartsTimer().then(res => {
				console.log(res)
				this.mycharts(res.data.lineTime)
			})
			
			
		},
		
	}
</script>
<style lang="scss" scoped>
	#myCharts {
		height: 800px;
		width: 100%;
		border-radius: 25px;
		background-color: #ffffffba !important;
	}
</style>

