<template>
  <div id="app">
      <router-view></router-view>
      <!--<bought-equipment></bought-equipment>-->
      <!--<bought-user-list></bought-user-list>-->
  </div>
</template>

<script>
    // import BoughtEquipment from "./views/BoughtEquipment"
    // import BoughtUserList from "./views/BoughtUserList"
export default {

    name: 'App',
    components:{
        // BoughtEquipment
        // BoughtUserList
    }
}

</script>

<style>

#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, fieldset, button, input, textarea, th, td {
    margin: 0;
    padding: 0; }

body, button, input, select, textarea {
    font: 12px/1 "微软雅黑", Helvetica, Arial, "\5b8b\4f53", sans-serif; }

html, body {
    height: 100%; }

h1 {
    font-size: 18px; }

h2 {
    font-size: 16px; }

h3 {
    font-size: 14px; }

h4, h5, h6 {
    font-size: 100%; }

ul, ol {
    list-style: none; }

a {
    text-decoration: none;
    color: #000; }

q:before, q:after {
    content: ''; }

img {
    border: none; }

button, input, select, textarea {
    font-size: 100%; }

table {
    border-spacing: 0; }

hr {
    border: none;
    height: 1px; }

.clear:after {
    display: block;
    clear: both;
    overflow: hidden;
    content: "";
    height: 0;
    visibility: hidden; }


</style>
