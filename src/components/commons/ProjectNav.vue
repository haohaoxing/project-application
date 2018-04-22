<!--  -->
<template>
     <!--导航部分-->
    <div class="nav">
        <div class="nav_left"></div>
        <div class="nav_content">
            <a href="#">个人信息</a>
            <a href="#">申报项目管理</a>
            <a href="#">申报导航</a>
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
/*导航*/
  .nav{
    width:100%;
    height:30px;
    background:#5293d5;
  }
  .nav div{
    height:30px;
    float:left;
  }
  .nav_left{
    width:2%;
  }
  .nav_content{
    width:98%;
  }
  .nav_content a{
    display: block;
    float:left;
    width:80px;
    line-height:28px;
    text-align: center;
    border:1px solid #5293d5;
    color:#fff;
    font-size:12px;
  }
  .nav_content a:hover{
    background:#59acff;
    border:1px solid #18518f;
  }
</style>