<template>
  <div>
    <md-steppers :md-active-step.sync="active" md-vertical md-linear>
      <md-step id="first" md-label="وارد کردن شماره" :md-editable="false" :md-done.sync="first">
        <p>لطفا شماره خود را وارد کنید.</p>
        <md-field>
        <label>شماره تلفن</label>
        <md-input ></md-input>
        </md-field>
        <md-button class="md-raised md-primary" @click="setDone('first','second')">تایید</md-button>
      </md-step>
      <md-step id="second" md-label="تایید شماره" :md-editable="false" :md-done.sync="second">
          <p>لطفا کد پیامک شده به شماره خود را وارد کنید</p>
          <md-field>
          <label>کد</label>
          <md-input ></md-input>
          </md-field>
          <md-button class="md-raised md-primary">تایید</md-button>
          <md-button class="md-raised md-accent" @click="setDone('second','first')">شماره اشتباه است ؟</md-button>
      </md-step>

    </md-steppers>
  </div>
</template>

<script>
  export default {
    name: 'Stepper',
    data: () => ({
      active: 'first',
      first: false,
      second: false,
    }),
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
    }
  }
</script>

<style lang="scss" scoped>
  
</style>