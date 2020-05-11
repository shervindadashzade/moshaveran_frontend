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
</style>
