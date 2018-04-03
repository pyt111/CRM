<template>
    
    <Col :span="24">
        <div id="myCharts">
            
        </div>
    </Col>
</template>

<script>
// import { treeMap } from "api/list/allApi.js";
require("echarts/lib/chart/treemap");
let echarts = require("echarts/lib/echarts");

export default {
  data() {
    let formatUtil = echarts.format;
    return {
      option: {
        title: {
          text: "矩形树图",
          left: "center",
          top: "20"
        },
        tooltip: {
          formatter: function(info) {
            //    console.log(info);
            let value = info.value;
            let treePathInfo = info.treePathInfo;
            let name = info.data.name;
            var treePath = [];

            for (let i = 1; i < treePathInfo.length; i++) {
              treePath.push(treePathInfo[i].name);
            }
            // console.log(treePath);
            return [
              '<div class="tooltip-title">' +
                formatUtil.encodeHTML(treePath.join("/")) +
                "</div>",
              "Disk Usage: " + formatUtil.addCommas(value) + " KB"
            ].join("");
          }
        },
        series: [
          {
            name: "DU",
            type: "treemap",
            visibleMin: 3000,
            label: {
              normal: {
                show: true,
                position: "insideTopLeft",
                rotate: "0", //标签字体旋转 正负90°
                formatter: "{a}:{b}:{c}"
              }
            },
            itemStyle: {
              normal: {
                borderColor: "#fff"
              }
            },
            data: [],
            levels: []
          }
        ]
      }
    };
  },
  methods: {
    mycharts(data) {
      this.option.series[0].data = data;
      let mycharts = echarts.init(document.getElementById("myCharts"));

      this.levels = this.getLevelOption();
      mycharts.setOption(this.option);
      window.onresize = mycharts.resize;
    },
    getLevelOption() {
      return [
        {
          itemStyle: {
            normal: {
              borderWidth: 0,
              gapWidth: 5
            }
          }
        },
        {
          itemStyle: {
            normal: {
              gapWidth: 1
            }
          }
        },
        {
          colorSaturation: [0.35, 0.5],
          itemStyle: {
            normal: {
              gapWidth: 1,
              borderColorSaturation: 0.6
            }
          }
        }
      ];
    }
  },
  mounted() {
    treeMap().then(res => {
      //   console.log(res.data.treeMaps);

      this.mycharts(res.data.treeMaps);
    });
  }
};
</script>

<style scoped>
#myCharts {
  height: 600px;
  width: 100%;
  border-radius: 25px;
  background-color: #ffffffba !important;
}
</style>