<!--  -->
<template>
  <div>
      <div class="section">
		<div class="section_content">
			<img src="../../assets/images/common/1.gif"/>
            <div>
                <login-p></login-p>
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
import LoginP from "../components/ProjectLogin/LoginP.vue"
export default {
  data () {
    return {
    };
  },

  components: {
      LoginP
  },

  methods: {}
}

</script>
<style scoped>
    
.section{
	width:100%;
	height:506px;
	background: url(../../assets/images/common/bg_1.png) repeat ;
}
.section_content{
	width:460px;
	margin:0 auto;
}
.section_content img{
	width:100%;
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