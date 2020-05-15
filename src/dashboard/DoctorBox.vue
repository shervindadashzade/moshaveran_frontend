<template>
    <div class="md-layout-item doctor-box md-medium-size-30 md-small-size-45 md-xsmall-size-100">
        <div class="online">انلاین</div>
        <md-ripple>
            <center>
                <md-avatar>
                    <img src="https://lh3.googleusercontent.com/proxy/wBLJq9cVL6zFMPPbDK45TnF5Q_OuwsvlU70Qh4wpzmKritruqQI0T3hePbn41T-wVNoqdANpFJVXpyZ-Uwn78MkSRglB9qf2aOfOQAhJ1-BvJ_ZjVdo" alt="">
                </md-avatar>
                <h3>دکتر امید توکلی</h3>
                <div class="StartRating">
                <StarRating v-model="rate" padding="2" :rounded-corners="true" :show-rating="false" star-size="25" :read-only="true" />
                </div>
                <md-divider></md-divider>
                <div class="md-subheading">تخصص ها</div>
                <div class="experts">مشاوره تحصیلی ، افسردگی ، اضطراب ، ترس ، ترک اعتیاد</div>
                <div class="buttons">
                    <md-button class="md-raised md-primary">
                        شروع مشاوره
                    </md-button>
                    <md-button class="md-raised md-accent">
                        تعیین وقت
                    </md-button>
                </div>
            </center>
        </md-ripple>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating';
export default {
    name: 'DoctorBox',
    data:() => ({
        rate:4,
    }),
    components: {
        StarRating,
    }
}
</script>

<style scoped>
    .online{
        background: rgb(50, 207, 50);
        position: absolute;
        left: 5px;
        top: 7px;
        border-radius: 20px;
        color: white;
        padding: 5px;
    }
    .doctor-box{
        position: relative;
        margin: 10px;
        cursor: pointer;
        padding: 0px !important;
        background: white;
        box-shadow: -2px 0px 26px -12px rgba(0,0,0,0.75);
        border-radius: 20px;
    }
    .md-avatar{
        transform: scale(2.5);
        margin-top: 55px;
    }
    h3{
        margin-top: 40px;
        font-weight: normal;
    }
    .StartRating{
        margin-top: 10x;
        width: 240px;
        margin-bottom: 15px;
    }
    .md-subheading{
        padding: 13px;
    }
    .experts{
        font-weight: normal;
        color: rgb(90, 90, 90);
        padding: 0px 20px 20px 20px;
    }
    .buttons{
        padding-bottom: 20px;
    }
</style>