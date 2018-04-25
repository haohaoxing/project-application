<!--  -->
<template>
    <!--侧边栏-->

    <div class="sidebar">
        <h1>功能菜单</h1>
        <div class="sidebarOne">
            <div class="sidebarTop">申请者</div>
            <ul class="sidebarBottom">
                <!-- <li><a class="addSidebar" href="javascript:;">我要申请</a></li>
                <li><a href="javascript:;">申请列表</a></li>
                <li><a href="javascript:;">采购提交表</a></li>
                <li><a href="javascript:;">已购设备</a></li> -->
                <li><router-link class="addSidebar" to="/ApplyCationall">我要申请</router-link></li>
                <li><router-link to="/BoughtUserList">申请列表</router-link></li>
                <li><router-link to="/ProcurementProgressP">采购进度</router-link></li>
                <li><router-link to="/BoughtEquipment">已购设备</router-link></li>
            </ul>
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
    this.addSidebar();
  },
  methods: {
    addSidebar(){
       $(".sidebarBottom a").click(function(){
            $(".sidebarBottom a").removeClass("addSidebar");
            $(this).addClass("addSidebar").siblings().removeClass("addSidebar");
         });
    }
  }
}

</script>
<style scoped>
/*侧边栏*/
.sidebar{
    width: 170px;
    height: 100%;
    position: fixed;
    top: 100px;
    left: 0;
    bottom: 0;
    background: url(../../assets/images/common/timg.jpg) repeat center;
}
.sidebar h1{
  /*width:100%;*/
  font-size: 12px;
  color:#fff;
  text-align: center;
  line-height: 25px;
  border:1px solid #235f9e;
  background:#64a8e9 url(../../assets/images/common/bg_2.png) repeat center;
}
.sidebarOne{
  width:100%;
}
.sidebarTop,.sidebarBottom li a{
/*  width:100%;*/
  line-height: 32px;
  border:1px solid #87b4e0;
  font-size:12px;
  text-indent: 30px;
}
.sidebarTop{
  background: #5293d3;
  color:#fff;
}
.sidebarBottom li a {
  display: block;
  border-top:none;
  background:#bfe1fd;
  color: #000;
}
.sidebarBottom .addSidebar{
  background: #a9ecfc;
}
</style>