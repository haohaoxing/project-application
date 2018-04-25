<template>
    <div class="projectCharts"></div>
</template>

<script>
    export default {
        name: "ProjectCharts",
        mounted(){
            this.projectCharts()
        },
        methods:{
            projectCharts(){
                let myChart = this.$echarts.init(document.querySelector('.projectCharts'));

               myChart.setOption({
                   title :{
                       text:'项目分类统计表'
                   },
                   tooltip: {
                       trigger: 'item',
                       formatter: "{a} <br/>{b}: {c} ({d}%)"
                   },
                   legend: {
                       orient: 'horizontal',
                       x: 'right',
                       itemGap:5,
                       itemWidth:15,
                       itemHeight:8,
                       data:['邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
                   },
                   series: [
                       {
                           name:'项目分类',
                           type:'pie',
                           selectedMode: 'single',
                           radius: [0, '25%'],

                           label: {
                               normal: {
                                   position: 'inner'
                               }
                           },
                           labelLine: {
                               normal: {
                                   show: false
                               }
                           },
                           data:[
                               {value:335, name:'系级项目', selected:true},
                               {value:679, name:'院级项目'},
                               {value:1123, name:'校级项目'}
                           ]
                       },
                       {
                           name:'项目分类',
                           type:'pie',
                           radius: ['35%', '45%'],
                           label: {
                               normal: {
                                   formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                                   backgroundColor: '#eee',
                                   borderColor: '#aaa',
                                   borderWidth: 1,
                                   borderRadius: 4,
                                   rich: {
                                       a: {
                                           color: '#999',
                                           lineHeight: 18,
                                           align: 'center'
                                       },
                                       hr: {
                                           borderColor: '#aaa',
                                           width: '60%',
                                           borderWidth: 0.5,
                                           height: 0
                                       },
                                       b: {
                                           fontSize: 14,
                                           lineHeight: 18
                                       },
                                       per: {
                                           color: '#eee',
                                           backgroundColor: '#334455',
                                           padding: [2, 4],
                                           borderRadius: 2
                                       }
                                   }
                               }
                           },
                           data:[
                               {value:27, name:'国家级项目'},
                               {value:15, name:'部委级项目'},
                               {value:32, name:'省级项目'},
                               {value:19, name:'市级项目'},
                               {value:22, name:'国际合作项目'}
                           ]
                       }
                   ]
               })
            }
        }
    }
</script>

<style scoped>
.projectCharts{
    display: inline-block;
    margin-left: 20px;
    margin-top: 20px;
    width: 500px;
    height: 300px;
    border: 1px solid #5bc0de;
    border-radius:4px;
}
</style>