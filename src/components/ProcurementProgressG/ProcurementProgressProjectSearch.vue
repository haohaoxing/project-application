<template>
    <table>
        <tbody>
        <tr>
            <td >
                <form method="post" action="#">
                    计划编号：<input type="text" id="inputSearch">
                    项目负责人：<input type="text">
                    年份：<input type="date" style="width: 100px">
                    <input type="button" value="搜索" style="width: 60px;height: 23px;" @click="dimSearch" id="btnSearch">
                </form>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import "../../assets/js/jquery-1.8.3.min.js";
    import "../../assets/js/xcConfirm"
    export default {
        name: "ProcurementProgressProjectSearch",
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
    };
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
        margin-bottom: 5px;
        tbody{
            display: table-row-group;
            vertical-align: middle;
            border-color: inherit;
            input{
                height: 16px;
            }
            .tab_head{
                background: url(../../assets/images/purchasedEquipment/tab_head_bg.jpg) repeat-x;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                overflow: hidden;
                line-height: 25px;
                img{
                    padding:0 8px;
                }
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
                padding-left: 5px;
                form{
                    text-align: center;
                    input{
                        width: 120px;
                        margin-right: 20px;
                        text-align: center;
                    }
                }
            }
        }
    }

</style>