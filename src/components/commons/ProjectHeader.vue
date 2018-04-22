<!--  -->
<template>
    <div class="headerTop">
        <!--左侧logo-->
        <div class="logo"></div>
        <!--右侧按钮-->
        <project-header-da></project-header-da>
    </div>
</template>

<script>
import ProjectHeaderDa from "./ProjectHeaderDa"
export default {
  data () {
    return {
    };
  },

  components: {
    ProjectHeaderDa
  },

  methods: {}
}

</script>
<style scoped>
 /*头部公共样式*/
   .header{
    position:fixed;
    left:0;
    top:0;
    width:100%;
  }
  .headerTop{
    width:100%;
    background:url(../../assets/images/common/bg_1.gif) repeat-x center;
  }
  .header .logo{
      width:320px;
      height:69px;
      background:url(../../assets/images/common/tb.gif) no-repeat center;
  }
</style>