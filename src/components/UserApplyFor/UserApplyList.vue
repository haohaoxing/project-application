<template>
    <!--项目列表-->
    <div class="projectList">
        <table width="100%" height="25" border="0" cellspacing="0"  bordercolor="#a2dffe" >
            <tr>
                <td class="rojectSearchImg1" width="1%"></td>
                <td class="rojectSearchImg2" width="1.5%"><img src="../../assets/images/Z.img/tz.gif"/></td>
                <td class="rojectSearchImg2" width="96.5%"><span>项目搜索</span></td>
                <td class="rojectSearchImg3" width="1%"></td>
            </tr>
        </table>
        <div class="List">
            <table width="100%" cellspacing="0" cellpadding="3">
                <thead>
                    <tr >
                        <td align="center" bgcolor="#EFFBFE">ID</td>
                        <td align="center" bgcolor="#EFFBFE">项目名称</td>
                        <td align="center" bgcolor="#EFFBFE">项目类型</td>
                        <td align="center" bgcolor="#EFFBFE">申请经费(万)</td>
                        <td align="center" bgcolor="#EFFBFE">提交时间</td>
                        <td align="center" bgcolor="#EFFBFE">状态</td>
                        <td align="center" bgcolor="#EFFBFE">管理操作</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(u,index) in UserApplyItem">
                        <td align="center" bgcolor="#EFFBFE">{{u.id}}</td>
                        <td align="center" bgcolor="#EFFBFE">{{u.projectName}}</td>
                        <td align="center" bgcolor="#EFFBFE">{{u.projectType}}</td>
                        <td align="center" bgcolor="#EFFBFE">{{u.expenditure}}</td>
                        <td align="center" bgcolor="#EFFBFE">{{u.presentTime}}</td>
                        <td align="center" bgcolor="#EFFBFE">{{u.state}}</td>
                        <td align="center" bgcolor="#EFFBFE"><a href="javascript:;">申报信息</a></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td align="center" bgcolor="#EFFBFE"></td>
                        <td colspan="7" bgcolor="#EFFBFE">
                            <div style="margin-left: 1%;">
                                <p>
                                    <span><</span>
                                    <span>1</span>
                                    <span>></span>
                                    跳到第<input type="text" style="width: 33px;" value="1"/>页</p>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>

    </div>
</template>

<script>
    export default {
        name: "UserApplyList",
        props:["UserApplyItem"]
    }
</script>

<style scoped>
    .section .content .rojectSearchImg1 {
        background: url("../../assets/images/Z.img/b1.jpg") no-repeat;
        background-size: 100% 100%; }
    .section .content .rojectSearchImg2 {
        background: url("../../assets/images/Z.img/b2.jpg") repeat-x; }
    .section .content .rojectSearchImg3 {
        background: url("../../assets/images/Z.img/b3.jpg") no-repeat;
        background-size: 100% 100%; }
    .section .content .projectList {
        margin-top: 1%; }

    .section .content .projectList .List {
        border-top: 1px solid #fff;
        box-sizing: border-box; }

    .section .content .projectList .List table {
        border-collapse: collapse; }
    .section .content .projectList .List table thead{
        font-weight: 600;
    }

    .section .content .projectList .List td {
        padding: 3px 0;
        height: 25px;
        border: 1px solid #a2dffe; }

    .section .content .projectList .List td span {
        cursor: pointer; }

</style>