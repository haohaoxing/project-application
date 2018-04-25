<template>
    <div class="rojectSearch">
        <table width="100%" height="25" border="0" cellspacing="0"  bordercolor="#a2dffe" >
            <tr>
                <td width="1%" class="rojectSearchImg1" > </td>
                <td width="98%" class="rojectSearchImg2" ><img src="../../assets/images/Z.img/tz.gif"/><span>项目搜索</span></td>
                <td width="1%" class="rojectSearchImg3" ></td>
            </tr>
        </table>
        <div class="Search">
            <form action="">
                <table width="50%" align="center">
                    <tr>
                        <td>项目名称：</td>
                        <td><input type="text"  id="inputSearch"/></td>
                        <td>年份：</td>
                        <td>
                            <select name="" id="">
                                <option value="2019">2019</option>
                                <option value="2019">2019</option>
                                <option value="2019">2019</option>
                                <option value="2019">2019</option>
                            </select>
                        </td>
                        <td><input type="button" @click="dimSearch" value="搜索" id="btnSearch"/></td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
</template>

<script>
    import "../../assets/js/jquery-1.8.3.min.js";
    import "../../assets/js/xcConfirm"
    export default {
        name: "UserApplySearch",

        methods:{
            dimSearch(){
                var inputSearch = document.querySelector("#inputSearch");
                var btnSearch = document.querySelector("#btnSearch");
                if (inputSearch.value == ""){
                    var txt=  "您输入的内容不能为空";
                    window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.confirm);
                }
            },
        },
    }
</script>

<style scoped>
    @import url(../../assets/css/xcConfirm.css);
    .section .content .rojectSearchImg1 {
        background: url("../../assets/images/Z.img/b1.jpg") no-repeat;
        background-size: 100% 100%; }
    .section .content .rojectSearchImg2 {
        background: url("../../assets/images/Z.img/b2.jpg") repeat-x; }
    .section .content .rojectSearchImg3 {
        background: url("../../assets/images/Z.img/b3.jpg") no-repeat;
        background-size: 100% 100%; }
    .section .content .rojectSearch {
        width: 100%;
        line-height: 25px;
        margin-top: 1%;}
    .section .content .rojectSearch img {
        vertical-align: middle; }
    .section .content .rojectSearch span {
        vertical-align: middle; }
    .section .content .Search table{
       margin: 0 auto;width: 50%;}
    .section .content .rojectSearch .Search {
        border: 1px solid #a2dffe;
        border-top-color: #fff;
        background: #e2f7fe; }
    .popup{
        width: 270px;
        height: 140px;
    }
</style>