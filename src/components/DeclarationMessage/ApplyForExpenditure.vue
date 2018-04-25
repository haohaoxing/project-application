<template>
    <table>
        <colgroup>
            <col width="9%">
            <col width="30%">
            <col width="60%">
        </colgroup>
        <tbody v-for="i in list">
        <tr>
            <th rowspan="2">申请经费</th>
            <th colspan="2">申请学校经费</th>
           
        </tr>
        <tr>
            <td style="text-align:left;">金额:{{i.fet}}(万) </td>
            <td style="text-align:left;">项目编号:{{i.pronum}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金额:{{i.fet}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(万)</td>
        </tr>
        <tr>
            <th colspan="3" style=" height: 33px;text-align:left;">学校投入经费分配:</th>
        </tr>
        <tr>
            <th >购置设备：</th>
            <td colspan="2">{{i.equipment}}(万)</td>
        </tr>
        <tr>
            <th >购置家具：</th>
            <td colspan="2">{{i.furniture}}(万)</td>
        </tr>
        <tr>
            <th >环境改造：</th>
            <td colspan="2">{{i.Environmental}}(万)</td>
        </tr>
        <tr>
            <th >附件1</th>
            <td colspan="2" style="height: 30px;">{{i.add}}</td>
        </tr>
        <tr>
            <th ></th>
            <td colspan="2" style="text-align:center;"><button @click="touch" style="height: 22px; width: 100px" class="past">审核通过</button><button style="height: 22px; width: 100px" class="ant">审核未通过</button></td>
        </tr>
        </tbody>
        <div class="put"> 
            <p id="past">审核通过</p>
            <a class="sure">确定</a>
        </div>
    </table>
</template>

<script>
    import "../../assets/js/jquery-1.8.3.min.js";
    import "../../assets/js/xcConfirm"
    export default {
         name: "ApplyForExpenditure",
         props:["list"],

         methods:{
             touch(){
                  var txt=  "确认审核？";
                  window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.confirm);
             },
         }
    }
</script>

<style scoped lang="scss">
    @import url(../../assets/css/xcConfirm.css);
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
                padding-left: 5px;
                button{
                    font-size: 14px;
                    padding-left: 4px;
                }
                .ant{
                    margin-left:20px;
                }
            }
            
        }
        .put{
        width: 400px;
        height: 100px;
        border: 2px solid #ccc;
        color:#1982ea;
        text-align: center;
        margin-top:20px;
        margin-left:20px;
        position: fixed;
        left:480px;
        top:-150px;
        background:#bfe1fd;
        border-radius: 10px;
       
        p{
            width: 400px;
            height: 60px;
            line-height:60px;
            font-size: 18px;  
        }
        a{
            width: 30px;
            height: 30px;
            background: #9bace2;
            padding: 4px 10px;
            margin: 0 auto;
            line-height: 40px;
            font-size:14px;
            color: #666;
            text-align: center;
            cursor: pointer;
        }
    }       
}



</style>