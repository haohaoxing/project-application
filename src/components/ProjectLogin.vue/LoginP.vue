<!--  -->
<template>
  <div>
      <form class="loginContent" id="PuTongForm">
        <h1>用户登录</h1>
        <p>
            <label>用户名</label>
            <input id="userName" type="text">
        </p>
        <p>
            <label>密码</label>
            <input id="userPass" type="text">
        </p>
        <p id="cuoTit_userCheck" style="display: none;color:red;font-size:12px;text-indent: 30px"></p>
        <p>
            <label>验证码</label>
            <input id="checkMa" type="text">
            <span id="checkMa_box"></span>
        </p>
        <p id="cuoTit_checkMa" style="display: none;color:red;font-size:12px;text-indent: 30px"></p>
        <p>
            <input class="sub" id="sub1" type="submit"/>
        </p>
        <p class="tab">
            <a id="TabG" href="javascript:;">切换到管理员界面</a>
        </p>
    </form>
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

  methods: {}
}

</script>
<style scoped>
    
.loginContent{
	width:100%;
	padding:39px 0 40px 90px;
	border:9px solid #91b7de;
	background: #185089;
}
.loginContent h1{
	font-size:22px;
	line-height: 28px;
	color:#888;
}
.loginContent p{
	line-height: 28px;
}
.loginContent p label{
	color:#fff;
	font-size: 12px;
	text-align: right;
	display: inline-block;
	width:66px;
}
/*验证码*/
#checkMa{
	width:50px;
}
#checkMa_box{
	display: inline-block;
	width:50px;
	line-height:20px;
	font-size: 12px;
	text-align: center;
	background:pink;
}
/*表单提交*/
.sub{
	width:60px;
	height:55px;
	border:1px solid #185089;
	text-indent: -100000px;
	margin-left:250px;
	background: url(../../assets/images/common/submit.png) no-repeat center;
}
/*切换到管理员界面*/
.tab{
	float:right;
	font-size: 12px;
	margin-right:10px;
}
.tab a{
	color:#fff;
}
</style>