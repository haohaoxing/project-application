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
            <span id="checkMa_box" @click="sjCheckMa()"></span>
        </p>
        <p id="cuoTit_checkMa" style="display: none;color:red;font-size:12px;text-indent: 30px"></p>
        <p>
            <input class="sub" id="sub1" @click="TiJiao()" type="submit"/>
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
	mounted(){
        this.sjCheckMa(),
        this.checked()
    },

  components: {
  },

  methods: {
    //随机验证码
	  sjCheckMa(){
		let res="";
		while(res.length<4){
			let t=parseInt(Math.random()*123);
			if((t>=48&&t<=57)||(t>=97&&t<=122)||(t>=65&&t<=90)){
				res=res+String.fromCharCode(t);
			}
		}
		document.getElementById("checkMa_box").innerHTML=res;
    },
    checked(){
            //账户名只能使用数字字母下划线，且数字不能开头，长度在6-15之间
            //或者是手机号
            var checkFlag = false;
            document.getElementById("userName").onblur = checkUserName; 
            function checkUserName(){
                //1.属性		
                let regUser = /^[a-zA-Z_]\w{5,14}$/; 
                let regUserPhone =  /^1(3|4|5|7|8|9)\d{9}$/;  
                let userName = document.getElementById("userName").value;
                //2.方法
                if(userName!=""){
                    if((regUser.test(userName)) || ( regUserPhone.test(userName))){
                        document.getElementById("cuoTit_userCheck").style.display = "none";
                        //checkFlag=true;
                        return true;
                    }else{
                        document.getElementById("cuoTit_userCheck").style.display = "block";
                        document.getElementById("cuoTit_userCheck").innerHTML = "用户名/密码错误";
                        //checkFlag=false;
                        return false;
                    }
                }else{
                    document.getElementById("cuoTit_userCheck").style.display = "block";
                    document.getElementById("cuoTit_userCheck").innerHTML = "用户名不能为空";
                    return false;
                };		
            };

            //密码，可以是数字，字母，下划线，长度在6-15之间
            document.getElementById("userPass").onblur =function checkUserPass(){
                //1、属性
                let regUser = /^[0-9a-zA-Z_]\w{5,14}$/; 
                let userPass = document.getElementById("userPass").value;
                //2、方法
                if(userPass!=""){
                    if(regUser.test(userPass)){
                        document.getElementById("cuoTit_userCheck").style.display = "none";
                       
                        return true;
                    }else{
                        document.getElementById("cuoTit_userCheck").style.display = "block";
                        document.getElementById("cuoTit_userCheck").innerHTML = "用户名/密码错误";
                        //checkFlag=false;
                        return false;
                    }
                }else{
                    document.getElementById("cuoTit_userCheck").style.display = "block";
                    document.getElementById("cuoTit_userCheck").innerHTML = "密码不能为空";
                    return false;
                };	
            };

            //验证码	判断内容和随机产生的东西是否一致
            document.getElementById("checkMa").onblur = checkUseMa;

            function checkUseMa(){
                //1.属性	
                let checkMa=document.getElementById("checkMa").value;	
                let checkMa_box=document.getElementById("checkMa_box").innerHTML;
                //2.方法
                if(checkMa==checkMa_box){
                    document.getElementById("cuoTit_checkMa").style.display = "none";
                    return true;
                }else{
                    document.getElementById("cuoTit_checkMa").style.display = "block";
                    document.getElementById("cuoTit_checkMa").innerHTML = "验证码有误";
                    return false;
                }
            };

            

            //表单提交条件
            $("form").submit( function () {	
                if(checkUserName() && checkUserPass() && checkUseMa()  && checkFlag){
                    return true; 
                }else{
                    return false;
                }
            });
    },
    TiJiao(){
            if($("#userName").val()=="admin"&&$("#userPass").val()=="123456"){
                location.href="http://localhost:8080/#/ApplyCationall";
            }else{
                alert("用户名/密码错误");
            }
    }	
  }
}

</script>
<style scoped>
 @import url(../../assets/css/login.css);
</style>