<template>
<div class="box">
    <table class="table-top">
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
                    <input class="UpUser" type="text"  style="text-align:left;width:80%" v-model="projectnName"><span>*</span>
                </td>
                <th>申报年份</th>
                <td>
                    <input type="date" v-model="date">
                </td>
            </tr>
            <tr>
                <th>负责人</th>
                <td><input type="text" style="width: 90%;" v-model="charge"><span>*</span></td>
                <th>职务</th>
                <td><input type="text" style="width: 80%;"></td>
                <th>电话</th>
                <td><input type="text" v-model="phone"><span>*</span></td>
                <th>E-mail</th>
                <td><input type="text" v-model="mail"></td>
            </tr>
            <tr>
                <th>联系人</th>
                <td><input type="text" style="width: 94%;"></td>
                <th>电话</th>
                <td colspan="5"><input type="text"></td>
            </tr>
            </tbody>
        </table>
        <table class="table-bottom">
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
            <td colspan="2" style="text-align:center;"><button @click="sub" style="height: 26px; width: 60px" class="St">提交</button></td>
        </tr>
        </tbody>
    </table>
</div>
        
</template>

<script>
    import "../../assets/js/jquery-1.8.3.min.js";
    import "../../assets/js/xcConfirm"
    export default {
        name: "EssentialInformation",
        data(){
            return{
                projectnName:"",
                date:"",
                charge:"",
                phone:"",
                mail:"",
                applyList:[]
            }
        },
        updated(){
        },
        mounted(){
           
        },
        methods: {
            sub() {
                if (this.projectnName === "" || this.date === "" || this.charge === "" || this.mail === "" || this.phone === "") {
                    var txt=  "您输入的内容不能为空";
                    window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.confirm);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import url(../../assets/css/xcConfirm.css);
    .box{
        border: none;
        background: none;
    }
.table-top{
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
        span{
               color: red;
               font-size: 16px;
               vertical-align: middle;
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
 .table-bottom{
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