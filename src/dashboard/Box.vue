<template>
    <div class="md-layout-item md-medium-size-28 md-small-size-100 box">
                  <div class="box-icon">
                      <md-icon :style="{ 'color':color }">{{ icon }}</md-icon>
                  </div>
                  <div class="divider"></div>
                  <div class="box-desc"> 
                      <div class="title">{{ title }}</div>
                      <md-list>
                            <md-list-item v-for="info in infos" :key="info.index" > 
                             <md-icon>{{ info.icon }}</md-icon>
                              <div> {{ info.text }}</div>
                            </md-list-item>
                              
                      </md-list>
                  </div>
                  
    </div>
</template>

<script>
export default {
    name: 'Box',
    props:{
        title: String,
        infos: null,
        icon: String,
        color: String,
    }
}
</script>

<style scoped>
    .box{
        margin: 10px;
        background: white;
        height: 200px;
        border: 1px solid rgb(233, 233, 233);
        display: flex;
    }
    .divider{
        width: 2px;
        height: 60%;
        margin-top: 10%;
        background: rgb(233, 233, 233);
    }
    .box-icon{
        flex: 2;
        text-align: center;
        margin-top: 80px;
    }
    .box-icon .md-icon{
        font-size: 80px !important;
    }
    .box-desc{
        flex:1;
        margin-top: 30px;
        margin-right: 20px;
    }
    .box-desc .title{
        font-size: 17px;
        margin-bottom: 10px;
    }
    .box-desc .md-list-item div{
        font-size: 12px !important;
        padding-left: 10px;
    }
</style>