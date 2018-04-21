<!--  -->
<template>
  <div>
       <!--右侧按钮-->
        <div class="headerBtn">
            <a class="addClassStyle" href="javascript:;">重新登录</a>
            <a href="javascript:;">密码修改</a>
            <a class="AnQuanOut" href="javascript:;">安全退出</a>
            <a href="javascript:;">操作指南</a>
        </div>
        <!-- 退出弹出框 -->
        <div class="Qout">
            <h1>你确定要退出吗？</h1>
            <a href="javascript:;">确定</a>
            <a class="QuXiao" href="javascript:;">取消</a>
        </div>
  </div>
</template>

<script>
import "../../assets/js/jquery-1.8.3.min.js";


export default {
  data () {
    return {
    };
  },

  components: {},
    mounted(){
        this.DianJi();
    },
  methods: {
    DianJi(){
        $(".headerBtn a").click(function(){
            $(".headerBtn a").removeClass("addClassStyle");
            $(this).addClass("addClassStyle").siblings().removeClass("addClassStyle");
        });
        $('.AnQuanOut').click(function(){
            $(".Qout").animate({"top":"0px"},600);
        });
            $('.QuXiao').click(function(){
            $(".Qout").animate({"top":"-100px"},600);
        });
    }
  }
}


</script>
<style scoped>
    .headerBtn{
            position:absolute;
            right:0;
            top:0;
            height:69px;
        }
        .headerBtn a{
            margin-top:42px;
            display: block;
            float:left;
            width:86px;
            text-align: center;
            line-height: 25px;
            font-size: 12px;
            color:#00658f;
            border-radius: 5px;
            border:1px solid #159fe0;
            background: #39c4ee;
        }
        .headerBtn .addClassStyle{
            background: #a4eafd;
        }
        /*退出弹出框*/
        .Qout{
            position:absolute;
            left:728px;
            top:-100px;
            width:200px;
            height:100px;
            border-radius: 10px;
            background: rgba(84,149,123,.8);
        }
        .Qout h1{
            font-size: 20px;
            line-height: 50px;
            color:#000;
            text-align: center;
        }
        .Qout a{
            display: block;
            color:#333;
            float: left;
            width:50px;
            text-align: center;
            line-height: 38px;
            margin-left:30px;
            border:1px solid #93e8ff;
            border-radius: 8px;
            background: #97e8ff;
        }
</style>