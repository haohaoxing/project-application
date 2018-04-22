<template>
    <table>
        <colgroup>
            <col width="9%">
            <col width="30%">
            <col width="60%">
        </colgroup>
        <tbody>
        <tr>
            <th rowspan="2">申请经费</th>
            <th colspan="2">申请学校经费</th>
           
        </tr>
        <tr>
            <td style="text-align:center;">金额 <input type="text" style="width:30%;">(万)</td>
            <td style="text-align:center;">项目编号 <input type="text" style="width:15%;">         金额 <input type="text" style="width:15%;">(万)</td>
        </tr>
        <tr>
            <th colspan="3" style="height: 33px;text-align:left;">学校投入经费分配:</th>
        </tr>
        <tr>
            <th >购置设备：</th>
            <td colspan="2"><input type="text">（万）</td>
        </tr>
        <tr>
            <th >购置家具：</th>
            <td colspan="2"><input type="text">（万）</td>
        </tr>
        <tr>
            <th >环境改造：</th>
            <td colspan="2"><input type="text">（万）</td>
        </tr>
        <tr>
            <th >附件1</th>
            <td colspan="2" style="height: 30px;"><input type="file" style="height: 20px;"></td>
        </tr>
        <tr>
            <th ></th>
            <td colspan="2" style="text-align:center;"><button style="height: 26px; width: 60px">提交</button></td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "ApplyForExpenditure"
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
        tbody{
            display: table-row-group;
            vertical-align: middle;
            border-color: inherit;
            th,td{
                border:  1px solid #aedef4;
                height: 25px;
            }
            th{
                text-align: center;
                background: #fff9df;
            }
            td{
                text-align: left;
                padding-left: 5px
            }
        }
    }


</style>