<template>
        <table>
            <colgroup>
                <col width="9%">
                <col width="12%">
                <col width="8%">
                <col width="20%">
                <col width="8%">
                <col width="20%">
                <col width="10%">
                <col width="14%">
            </colgroup>
            <tbody>
            <tr>
                <th colspan="8" class="tab_head">

                    项目申报-基本信息
                </th>
            </tr>
            <tr>
                <th>项目名称</th>
                <td colspan="5">
                    <span  style="text-align:left;width:80%"></span>
                </td>
                <th>申报年份</th>
                <td>
                    <input type="date">
                </td>
            </tr>
            <tr>
                <th>负责人</th>
                <td><span style="width: 94%;"></span></td>
                <th>职务</th>
                <td><span style="width: 80%;"></span></td>
                <th>电话</th>
                <td></td>
                <th>E-mail</th>
                <td></td>
            </tr>
            <tr>
                <th>联系人</th>
                <td><span style="width: 94%;"></span></td>
                <th>电话</th>
                <td colspan="5"></td>
            </tr>
            </tbody>
        </table>
</template>

<script>
    export default {
        name: "EssentialInformation",

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
        input{
            height: 16px;
        }
        .tab_head{
            background: url(../../assets/images/H.img/Img01.png) repeat-x;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            overflow: hidden;
        }
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