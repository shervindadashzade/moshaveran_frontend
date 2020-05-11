<template>
    <div class="bg">
        <div class="box">
            <div class="illustraion"></div>
            <div class="stepper-container">
                <div class="info">
                <h2 style="color:#009d84;margin-botton:25px">به سایت مشاوران خوش آمدید</h2>
                <span>برای ورود مراحل ساده زیر را طی کنید با ما همراه باشید</span>
                </div>
                <Stepper></Stepper>
                </div>
        </div>
    </div>    
</template>

<script>
import Stepper from './Stepper';
export default {
    name : 'LoginScreen',
    components : {
        Stepper,
    }
}
</script>

<style scoped>
    .bg{
        width: 100vw;
        height: 100vh;
        background: rgb(241, 241, 241);
    }
    .box{
        border-radius: 10px;
        width: 700px;
        background: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 20px;

        display: flex;
        flex-direction: row-reverse;
    }
    .illustraion{
        flex: 1;
        background: url('../assets/login-illustration.jpg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .stepper-container{
        flex: 1;
        padding-left: 20px;
    }
    .info{
        margin-bottom: 30px;
    }

    @media only screen and (max-width: 710px) {
        .box{
            width: 100%;
            height: 100%;
        }
        .illustraion{
            display: none;
        }
    }

</style>
