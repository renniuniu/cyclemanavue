<template>
  <div>
    <div class="div" ref="chart2"></div>
    <div class="div" ref="chart"></div>
  </div>
</template>
<script>
// import axios from 'axios';
// import $config from '@/common/config.js';
// import * as echarts from 'echarts'; // 基于准备好的dom，初始化echarts实例
export default {
  data() {
    return {
      getSetOption: {
        //折线图
        title: {
          text: '零件仓库容量',
        },
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        yAxis: {
          type: 'value',
          max: 1,
        },
        // legend: {
        //   data: [0.1, 02, 3],
        // },
        xAxis: {
          type: 'category',
          data: ['车架', '车把', '后轮'],
        },
        series: [
          {
            name: null,
            type: 'bar',
            stack: '零件库存占比',
            data: [0.2, 0.1, 0.3],
          },
        ],
      },
      getSetOption2: {
        //折线图
        title: {
          text: '自行车仓库容量',
        },
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        yAxis: {
          type: 'value',
          max: 1,
        },

        legend: {
          data: [
            {
              name: '系列1',
              // 强制设置图形为圆。
              icon: 'circle',
              // 设置文本为红色
              textStyle: {
                color: 'red',
              },
            },
          ],
        },

        xAxis: {
          type: 'category',
          data: ['自行车1', '自行车2', '自行车3'],
        },
        series: [
          {
            name: null,
            type: 'bar',
            stack: '库存占比',
            data: [0.2, 0.5, 1],
          },
        ],
      },
      getPieOption: {
        //饼图
        title: {
          text: null,
        },
        tooltip: {
          tooltip: 'item',
          formatter: '{a} <br/> {b} : {c} ({d}%)',
        },
        series: [
          {
            type: 'pie',
            radius: '55%',
            data: [].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: 'angle',
          },
        ],
      },
    };
  },
  methods: {
    inechart2() {
      const chart2 = this.$refs.chart2;
      const productmyChart = this.$echarts.init(chart2);
      productmyChart.setOption(this.getSetOption2);
      // axios({
      //   method: 'post',
      //   data: {},
      //   url: $config.baseURL + '/home/getProuct',
      // }).then((res) => {
      //   const results = res.data.r,
      //     legends = results.map((item) => ({
      //       name: item.channelName,
      //       data: item.dateStatisticals,
      //     }));
      //   this.inechart.setOption({
      //     title: {
      //       text: '订单统计',
      //     },
      //     legend: {
      //       data: legends.map((item) => item.name),
      //     },
      //     xAxis: {
      //       data: legends[0].data.map((item) => item.date),
      //     },
      //     series: legends.map((item) => {
      //       return {
      //         type: 'line',
      //         name: item.name,
      //         data: item.data.map((item) => item.count),
      //       };
      //     }),
      //   });
      // });
      window.addEventListener('resize', function() {
        productmyChart.resize();
      });
    },
    inechart() {
      // debugger;
      const chart = this.$refs.chart;

      if (chart) {
        const myChart = this.$echarts.init(chart);

        // const option = {
        //   title: {
        //     text: "仓库图表"
        //   },
        //   tooltip: {},
        //   xAxis: {
        //     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        //   },
        //   yAxis: {},
        //   series: [
        //     {
        //       name: "库存",
        //       type: "bar",
        //       data:
        //     }
        //   ]
        // };
        myChart.setOption(this.getSetOption);

        //   axios({
        //     method: 'get',
        //     data: {},
        //     url: $config.baseURL + '/home/getPart',
        //   }).then((res) => {
        //     const results = res.data.r,
        //       legends = results.map((item) => ({
        //         name: item.channelName,
        //         data: item.dateStatisticals,
        //       }));
        //     this.inechart.setOption({
        //       title: {
        //         text: '订单统计',
        //       },
        //       legend: {
        //         data: legends.map((item) => item.name),
        //       },
        //       xAxis: {
        //         data: legends[0].data.map((item) => item.date),
        //       },
        //       series: legends.map((item) => {
        //         return {
        //           type: 'line',
        //           name: item.name,
        //           data: item.data.map((item) => item.count),
        //         };
        //       }),
        //     });
        //   });
      }

      // var myChart = echarts.init(document.querySelector("div"));
      // 绘制图表
    },
  },
  mounted() {
    console.log('1');
    this.inechart();
    this.inechart2();
  },
};
</script>
<style lang="less" scoped>
.div {
  height: 50%;
  width: 80%;
}
</style>
