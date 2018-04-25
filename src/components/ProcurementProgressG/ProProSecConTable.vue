<template>
    <div>
        <procurement-progress-project-search></procurement-progress-project-search>
        <procurement-progress-apply-list :purchList = "purchasingList" :num="totalNum" :planMoney ="totalPlanMoney" :applyMoney ="totalApplyMoney"></procurement-progress-apply-list>
    </div>
</template>

<script>
    import ProcurementProgressProjectSearch from "./ProcurementProgressProjectSearch";
    import ProcurementProgressApplyList from "./ProcurementProgressApplyList";
    import ProcurementProgressApi from "../../apis/ProcurementProgressApi";
    export default {
        name: "PurEquSecConTable",
        components:{
            ProcurementProgressProjectSearch,
            ProcurementProgressApplyList
        },
        data(){
            return {
                //已购买设备总件数
                totalNum:0,
                //计划经费总额
                totalPlanMoney:0,
                //支付总额
                totalApplyMoney:0,
                //已购设备列表
                purchasingList:[]
            }
        },
        methods:{
            calculate(data){
                data.forEach((item,index)=>{
                    this.totalNum += item.quantity;
                    this.totalPlanMoney += item.planExp;
                    this.totalApplyMoney += item.rental;
                })
            }
        },
        created(){
            ProcurementProgressApi.getPurchasingList((data)=>{
                this.calculate( data);
                this.purchasingList = data;
            })
        },
    }
</script>

<style scoped>

</style>