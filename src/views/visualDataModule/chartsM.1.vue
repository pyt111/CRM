<template>
	<Row>

		<Col :span="24">
		<chart :options='option' autoResize></chart>
		</Col>

	</Row>

</template>


<script>
// import { timeList } from "api/list/allApi.js";

export default {
  data() {
    return {
      option: {
        title: {
          text: "Beijing AQI",
          left: "center",
          top: "10"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          data: []
        },
        yAxis: {
          splitLine: {
            show: false
          }
        },
        toolbox: {
          left: "center",
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: [
          { startValue: "2014-01-01", endValue: "2014-03-02" },
          { type: "inside" }
        ],
        visualMap: {
          top: 10,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: 50,
              color: "#096"
            },
            {
              gt: 50,
              lte: 100,
              color: "#ffde33"
            },
            {
              gt: 100,
              lte: 150,
              color: "#ff9933"
            },
            {
              gt: 150,
              lte: 200,
              color: "#cc0033"
            },
            {
              gt: 200,
              lte: 300,
              color: "#660099"
            },
            {
              gt: 300,
              color: "#7e0023"
            }
          ],
          outOfRange: {
            color: "#999"
          }
        },
        series: {
          name: "BJ AQI",
          type: "line",
          data: [],
          markLine: {
            silent: true,
            data: [
              { yAxis: 50 },
              { yAxis: 100 },
              { yAxis: 150 },
              { yAxis: 200 },
              { yAxis: 300 }
            ]
          }
        }
      }
    };
  },
  methods: {
    mycharts(data) {
      this.option.xAxis.data = data.map(function(times) {
        return times[0];
      });
      this.option.series.data = data.map(function(dat) {
        return dat[1];
      });
    }
  },
  mounted() {},
  created() {
    timeList().then(res => {
      // console.log(res.data.lineTime)
      this.mycharts(res.data.lineTime);
    });
  }
};
</script>
<style lang="scss" scoped>
.echarts {
  height: 800px;
  width: 100%;
  border-radius: 25px;
  background-color: #ffffffba !important;
}
</style>

