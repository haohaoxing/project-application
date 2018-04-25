<!--  -->
<template>
  <div>
		<div class="section">
			<div class="section_content">
				<img src="../assets/images/common/1.gif"/>
						<div class="box" >
							<div class="tab">
								<a id="TabP" @click="changeTab(1)" href="javascript:;">切换到管理员界面</a>
								<a id="TabG" @click="changeTab(2)" href="javascript:;">切换到申请者界面</a>
							</div>
							<div :is="tabname"></div>
						</div>
			</div>
		</div>
		<div class="footer">
			<p>版权所有：山东大学实验室与设备管理处</p>
			<p>山东省济南市山大南路27号 山东大学中心校区鲁能大厦 邮编:250100</p>
		</div>
  </div>
</template>

<script>
import "../assets/js/jquery-1.8.3.min.js";
import LoginP from "../components/ProjectLogin/LoginP"
import LoginG from "../components/ProjectLogin/LoginG"
export default {
  data () {
    return {
			tab:1,
			tabname:"LoginP"
    };
  },

  components: {
			LoginP,
			LoginG
	},

  methods: {
		changeTab(index){
			if(index==1){
				this.tab = 1;
				this.tabname = "LoginG";
				$("#TabP").css({"display":"none"});
				$("#TabG").css({"display":"block"});
			}else{
					this.tab = 2;
					this.tabname = "LoginP";
				$("#TabP").css({"display":"block"});
				$("#TabG").css({"display":"none"});
			}
		}
	
	}
}

</script>
<style scoped>

.section{
	width:100%;
	height:506px;
	background: url(../assets/images/common/bg_1.png) repeat ;
}
.section_content{
	width:460px;
	margin:0 auto;
}
.section_content img{
	width:100%;
}
.box{
	width:100%;
	border:9px solid #91b7de;
	background: #185089;
}

/*切换到管理员界面*/
.tab{
	line-height: 50px;
	padding-left:20px;
	font-size: 12px;
}
.tab a{
	color:#fff;
}
#TabG{
	display:none;
}

.footer{
	width:100%;
	height:84px;
	background:#1f5b9a ;
	text-align: center;
	font-size:12px;
	color:#5593ce;
}
.footer p{
	line-height: 28px;
}
</style>