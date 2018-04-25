<template>
    <div class="expenditure"></div>
</template>

<script>
    export default {
        name: "ExpenditureCharts",
        mounted(){
            this.expCharts()
        },
        methods:{
            expCharts(){
                let myChart = this.$echarts.init(document.querySelector('.expenditure'))

                myChart.setOption({
                    title:{
                       text:'经费统计图'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    toolbox: {
                        feature: {
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    legend: {
                        data:['申请经费','实际花费','平均']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            name:'2018年每月经费统计',
                            nameLocation:'center',
                            nameGap:'25',
                            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '申请',
                            min: 0,
                            max: 250,
                            interval: 50,
                            axisLabel: {
                                formatter: '{value} 万元'
                            }
                        },
                        {
                            type: 'value',
                            name: '实际',
                            min: 0,
                            max: 250,
                            interval: 50,
                            axisLabel: {
                                formatter: '{value} 万元'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'申请经费',
                            type:'bar',
                            data:[22.8, 38.4, 58.9, 97.3, 86.4, 113.2, 135.6, 162.2, 107.9, 120.0, 89.5, 65.3]
                        },
                        {
                            name:'实际花费',
                            type:'bar',
                            data:[22.2, 37.6, 58.6, 97.0, 79.2, 115, 132, 160.0, 103, 122.3, 87.5,64]
                        },
                        {
                            name:'平均',
                            type:'line',
                            yAxisIndex: 1,
                            data:[22.5, 38, 58.7, 97.1, 82.8, 114, 133.8, 161.1, 105.4, 121, 88.5, 64.7]
                        }
                    ]
                })
            }
        }
    }
</script>

<style scoped>
.expenditure{
    width: 600px;
    height: 320px;
    border: 1px solid #5bc0de;
    border-radius:4px;
    margin: 20px auto;
}
</style>