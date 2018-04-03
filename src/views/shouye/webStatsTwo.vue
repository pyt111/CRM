<template>
	<div class="mian">

		<div class="age">
			<span class="age_one">投资这收益统计</span>
			<router-link :to="{name:'list',params:{totals:user1}}">
			    <span style="margin-right: 10px;" class="badge badge-info">查看</span>
			</router-link>
		</div>
		<hr style="height:1px;border:none;border-top:1px solid #0066CC;" />
		<div style="width:100%;height:300px;margin-top: 20px;" id="webStatsTwo"></div>
        <div>
			<Table :columns="columns1" :data="data1"></Table>
		</div>
	</div>
</template>
<script>
	const echarts = require('echarts');
	

export default {
    name: 'dataSourcePie',
    
    data () {
        return {
            columns1: [{
						title: '奖励分类',
						key: 'type',
						align: 'center'
					},
					{
						title: '数量',
						key: 'num',
						align: 'center'
					},
					{
						title: '占比',
						key: 'proportion',
						align: 'center'
					}
				  ],
				data1: [{
						type: '利息总数',
						num: '3000',
						proportion: '33%',						
					},
					{
						type: '奖励总数',
						num: '3000',
						proportion: '67%',
						
					}
				]
        };
    },
    mounted () {
        this.$nextTick(() => {
            var dataSourcePie = echarts.init(document.getElementById('webStatsTwo'));
            const option = {
                tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        x: 'right',
		        data:['利息金额','奖励金额']
		    },
		    series: [
		        {
		            name:'访问来源',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {value:33, name:'利息金额'},
		                {value:20, name:'奖励金额'},
		                
		            ]
		        }
		    ]
            };
            dataSourcePie.setOption(option);
            window.addEventListener('resize', function () {
                dataSourcePie.resize();
            });
        });
    }
};
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
	
	.list {
		text-align: center;
		margin-top: 20px;
	}
	
	.progress {
		margin-top: 10px;
	}
</style>