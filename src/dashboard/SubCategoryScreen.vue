<template>
    <div class="container">
        <h1>موضوع مشاوره</h1>
        <span>لطفا موضوع مشاوره خود را از موارد زیر انتخاب کنید</span>
        <br>
        <br>
        <div class="md-layout md-gutter md-alignment-center">
            <SubCategory :subCategory="subCategories[0]" />
            <SubCategory :subCategory="subCategories[0]" />
            <SubCategory :subCategory="subCategories[0]" />
            <SubCategory :subCategory="subCategories[0]" />
        </div>
    </div>
</template>

<script>
import SubCategory from './SubCategory';
export default {
    name: "SubCategoryScreen",
    components:{
        SubCategory,
    },
    data: () => ({
        subCategories : [
            { title: 'مشاوره قبل ازدواج',picture: 'https://tehrannews.ir/wp-content/uploads/2019/07/973436_811.jpg' },
        ]
    }),

}
</script>

<style scoped>
</style>