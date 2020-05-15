<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  @import 'style/font.css';
  .md-stepper-label{
      margin-right: 10px;
  }
  .md-field label{
    right: 0;
    margin-right: 10px;
  }
  .md-app{
    height: 100vh;
  }
  .md-list-item-content>.md-icon:first-child{
    margin-right: 0 !important;
  }
  .md-app-scroller{
   padding: 0px !important;      
  }
  .md-list-item-text{
    margin-right: 12px;
  }
  .md-drawer{
    width: 226px !important;
  }
  .container{
    margin-right: 80px;
  }
</style>
