<!--  -->
<template>
    <!--侧边栏-->
    <div class="sidebar">
        <h1>功能菜单</h1>
        <div class="sidebarOne">
            <div class="sidebarTop">实验室专项</div>
            <ul class="sidebarBottom">
                <li><a href="">我要申请</a></li>
                <li><a href="">申请列表</a></li>
                <li><a href="">购置申请表</a></li>
                <li><a href="">采购进度</a></li>
                <li><a href="">已购设备</a></li>
                <li><a href="">完成项目</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
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
/*侧边栏*/
.sidebar{
    width: 170px;
    height: 100%;
    position: fixed;
    top: 100px;
    left: 0;
    bottom: 0;
    background: #f8f8f8;
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
</style>