<template>
    <div class="md-layout-item box md-medium-size-25 md-small-size-40 md-xsmall-100">
        <md-ripple>
            <img :src="subCategory.picture" alt="">
            <h3>{{ subCategory.title }}</h3>
        </md-ripple>
    </div>
</template>

<script>
export default {
    name: 'SubCategory',
    props:{
        subCategory: Object,
    }
}
</script>

<style scoped>
    .box{
        cursor: pointer;
        margin: 10px;
        background: white;
        border: 1px solid rgb(228, 227, 227);
        display: flex;
        padding: 0px !important;
        border-radius: 10px;
        transition: 0.3s;
    }
    .box:hover{
        opacity: 0.8;
    }
    .md-ripple{
        width: 100%;
    }
    img{
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
    h3{
        text-align: center;
        margin-top: 10px;
        padding: 20px;
        font-weight: normal;
        font-size: 1em;
    }
</style>