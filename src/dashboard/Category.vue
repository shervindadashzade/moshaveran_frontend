<template>
    <div :style="background" class="md-layout-item md-medium-size-28 md-small-size-45 md-xsmall-size-100 box">
        <md-ripple>
        <div style="text-align:center"><md-icon>{{ category.icon }}</md-icon></div>
        <h2>{{ category.title }}</h2>
        </md-ripple>
    </div>
</template>

<script>
export default {
    name: 'Category',   
    props:{
        category:Object,
    },
    computed:{
        background(){
            let style = 'background: linear-gradient(45deg, '+this.category.color1+' 0%,'+this.category.color2+' 100%);';
            console.log(style);
            return style;
        }
    },
}
</script>

<style scoped>
    .md-layout-item{
        padding: 0px !important;
    }
    .box{
        cursor: pointer;
        margin: 10px;
        height: 200px;
        border-radius: 15px;
        color: white;
        transition: 0.3s;
    }
    .box:hover{
        transform: scale(1.03);
    }
    .md-icon{
        color: white !important;
        font-size: 80px !important;
        text-align: center;
        margin-top: 50px;
    }
    .box h2{
        text-align: center;
        margin-top: 50px;
    }
</style>