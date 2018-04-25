<template>
    <div class="statistics"></div>
</template>

<script>
    export default {
        name: "ProjectApplicationStatisticsTable",
        mounted(){
            this.drawLine()
        },
        methods:{
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.querySelector('.statistics'))
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '项目申报统计'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} "
                    },

                    xAxis: {

                        data: ["2018.1","2018.2","2018.3","2018.4","2018.5","2018.6"]
                    },
                    yAxis: {
                        name:'2018年每月项目统计',
                        nameLocation:'center',
                        nameGap:'25',
                        nameRotate:'270'
                    },
                    series: [{
                        name: '申报项目数量',
                        type: 'line',
                        data: [12, 20, 36, 22, 15, 20]
                    }]
                });
            }
        }
    }
</script>

<style scoped>
    .statistics{
        display: inline-block;
        margin-left: 10px;
        margin-top: 20px;
        width: 500px;
        height: 300px;
        border: 1px solid #5bc0de;
        border-radius:4px;
    }
</style>