<template>
    <div>
        <table>
            <colgroup>
                <col width="8%">
                <col width="12%">
                <col width="8%">
                <col width="8%">
                <col width="12%">
                <col width="8%">
                <col width="8%">
                <col width="10%">
                <col width="10%">
                <col width="8%">
            </colgroup>
            <tbody>
            <tr>
                <th  class="tab_head" style="text-align:center;" colspan="11">
                    购买清单
                </th>
            </tr>
            <tr style="height: 32px;background:#fff9df;">
                <th>计划编号</th>
                <th>设备名称</th>
                <th>型号</th>
                <th>数量</th>
                <th>设备来源</th>
                <th>计划经费</th>
                <th>支付总额</th>
                <th>到货时间</th>
                <th>验收</th>
                <th>转档案</th>
            </tr>
            <tr v-for="(p,index) in purchList">
                <td>{{p.number}}</td>
                <td>{{p.equName}}</td>
                <td>{{p.model}}</td>
                <td>{{p.quantity}}</td>
                <td>{{p.equipment}}</td>
                <td>{{p.planExp}}</td>
                <td>{{p.rental}}</td>
                <td>{{p.aog}}</td>
                <td>{{p.accept}}</td>
                <td>{{p.equName}}</td>
            </tr>
            <tr>
                <td colspan="11" style="padding-right: 20px;text-align:left;" >
                   总计：设备{{num}}台 &nbsp;&nbsp;&nbsp;&nbsp;
                    计划经费：{{planMoney}}  元 &nbsp;&nbsp;&nbsp;&nbsp;
                    支付总额：{{applyMoney}}  元
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ProcurementProgressApplyList",
        components:{
        },
        props:["purchList","num","planMoney","applyMoney"],

    }
</script>

<style scoped lang="scss">
    table{
        width: 99%;
        margin: 0 auto;
        border-collapse: collapse;
        border-spacing: 0;
        border: 1px solid #aedef4;
        font-size: 12px;
        margin-bottom: 5px;
        tbody{
            display: table-row-group;
            vertical-align: middle;
            border-color: inherit;
        input{
            height: 16px;
        }
        .tab_head{
            background:#d6f2fd;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            overflow: hidden;
            line-height: 25px;
        }
        th,td{
            border:  1px solid #aedef4;
            height: 25px;
            }
            th{
                text-align: center;
            }
            td{
                text-align: center;
                padding-left: 5px
            }
        }
    }
</style>