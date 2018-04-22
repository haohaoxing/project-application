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
                <td colspan="8" class="tab_head">
                    <img src="../../assets/images/H.img/tz.gif" alt="">
                    项目申报-基本信息
                </td>
            </tr>
            <tr>
                <th>项目名称</th>
                <td colspan="5">
                    <input type="text"  style="text-align:left;width:80%">
                </td>
                <th>申报年份</th>
                <td>
                    <input type="date">
                </td>
            </tr>
            <tr>
                <th>负责人</th>
                <td><input type="text" style="width: 94%;"></td>
                <th>职务</th>
                <td><input type="text" style="width: 80%;"></td>
                <th>电话</th>
                <td><input type="text"></td>
                <th>E-mail</th>
                <td><input type="text"></td>
            </tr>
            <tr>
                <th>联系人</th>
                <td><input type="text" style="width: 94%;"></td>
                <th>电话</th>
                <td colspan="5"><input type="text"></td>
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
            color: #333;
            font-weight: 700;
            text-align: left;
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