<template>
    <div class="container">
        <div class="md-layout box">
            <div class="md-layout-item md-medium-size-30 md-small-size-100" style="margin-bottom:20px">
                <h1>روش مشاوره</h1>
                <span>روش مشاوره خود را انتخاب کنید.</span>
            </div>
            <div class="md-layout-item md-layout md-alignment-center md-medium-size-45 md-small-size-100" style="margin-top:30px;">
                <div class="md-layout-item">
                    <md-button class="md-icon-button">
                        <md-icon>phone</md-icon>
                    </md-button>
                    <h4>مشاوره تلفنی</h4>
                </div>

                <div class="md-layout-item">
                    <md-button class="md-icon-button">
                        <md-icon>chat</md-icon>
                    </md-button>
                    <h4>مشاوره از طریق چت</h4>
                </div>
                
            </div>
            <div class="md-layout-item md-medium-size-25 md-small-size-100">
                <center>
                    <md-list>
                        <md-list-item>
                        <md-icon>monetization_on</md-icon>
                        قیمت هر دقیقه 1200 تومان
                        </md-list-item>
                    </md-list>
                </center>
            </div>
        </div>
        <div class="box">
            <h1>انتخاب مشاور</h1>
            <span>مشاور مورد نظر را انتخاب کنید.</span>
            <br>
            <br>
            <br>
            <div class="md-layout md-gutter md-alignment-center">
                <DoctorBox />
                <DoctorBox />
                <DoctorBox />
                <DoctorBox />
            </div>
        </div>
    </div>
</template>

<script>
import DoctorBox from './DoctorBox';
export default {
    name:'SelectDoctoreScreen',
    components:{
        DoctorBox,
    }
}
</script>

<style scoped>
    .box{
        padding: 20px;
        background: white;
        border: 1px solid rgb(228, 227, 227);
        margin-bottom: 20px;
    }
    .md-icon-button{
        border: solid 1px crimson;
        transform: scale(2);
        margin-right: 20px;
    }
    .md-icon{
        color: crimson !important;
    }
    h4{
        margin-top: 30px;
    }
    .md-layout center{
        margin-top: 20px;
    }
    .md-list{
        background: none !important;
    }
</style>