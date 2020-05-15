<template>
  <div>
    <md-steppers :md-active-step.sync="active" md-vertical md-linear>
      <md-step id="first" md-label="وارد کردن شماره" :md-editable="false" :md-done.sync="first">
        <p>لطفا شماره خود را وارد کنید.</p>
        <md-field>
        <label>شماره تلفن</label>
        <md-input v-model="phone" ></md-input>
        </md-field>
        <md-button class="md-raised md-primary" @click="sendSMS()" :disabled="$v.phone.$invalid" >تایید</md-button>
      </md-step>
      <md-step id="second" md-label="تایید شماره" :md-editable="false" :md-done.sync="second">
          <p>لطفا کد پیامک شده به شماره {{ phone }} را وارد کنید</p>
          <md-field :class="errorClass">
          <label>کد</label>
          <md-input v-model="code" ></md-input>
          <span class="md-error" v-if="codeError">کد وارد شده اشتباه است</span>
          </md-field>
          <md-button class="md-raised md-primary" @click="verifySMS()" :disabled="$v.code.$invalid">تایید</md-button>
          <md-button class="md-raised md-accent" @click="setDone('second','first')">شماره اشتباه است ؟</md-button>
      </md-step>

    </md-steppers>
  </div>
</template>

<script>
  import smsService from '../services/sms.service';
  import { validationMixin } from 'vuelidate';
  import {
    required,
    minLength,
    numeric
  } from 'vuelidate/lib/validators';

  export default {
    name: 'Stepper',
    mixins: [validationMixin],
    data: () => ({
      active: 'first',
      first: false,
      second: false,
      phone : null,
      code : null,
      codeError: false,
    }),
    computed:{
      errorClass(){
        return {
          'md-invalid' : this.codeError
        }
      }
    },
    methods: {
      setDone (id, index) {
        this[id] = true

        if (index) {
          this.active = index
          if(index == 'first'){
            this[id] = false;
            this[index] = false;
            }
        }
      },
      sendSMS(){
        smsService.send_sms(this.phone)
        .then(() => this.setDone('first','second') )
        .catch(res => console.log(res));
      },
      verifySMS(){
        this.codeError = false;
        smsService.verify_sms(this.phone,this.code,'USER')
        .then(res =>{
          console.log(res.data);
          this.setDone('second') 
        })
        .catch(()=> this.codeError = true);
      }

    },
    validations: {
        phone:{
          required,
          minLength: minLength(11),
          numeric
        },
        code : {
          required,
          minLength: minLength(6)
        }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>