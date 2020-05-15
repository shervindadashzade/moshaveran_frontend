<template>
  <div class="container">
      <div class=" md-layout md-gutter md-alignment-center">
          <Box title="اطلاعات کاربری" :infos="account_info" icon="account_circle" color="#FEA444" />
          <Box title="سابقه مشاوره"  :infos="history_info" icon="update" color="#f9708a"/>
          <Box title="آمار مشاوران" :infos="chart_info" icon="bar_chart" color="#9bc94b" />
      </div>
      <br>
      
      <div class="md-headline">دسته بندی ها</div>
      <div class="sub-heading">برای شروع مشاوره یکی از دسته های زیر را انتخاب کنید.</div>
      <br>
      <div class="md-layout md-gutter md-alignment-center">
          <Category :category="categories[0]" />
          <Category :category="categories[1]" />
          <Category :category="categories[2]" />
          <Category :category="categories[3]" />
      </div>
  </div>
</template>

<script>
import Box from './Box';
import Category from './Category';
export default {
    name:'HomeScreen',
    components:{
        Box,
        Category,
    },
    data: () => ({
        account_info:[
            { icon:'phone', text:'شماره : 09362119480' },
            { icon:'attach_money', text:'موجودی : 10000 ریال'},
        ],
        chart_info:[
            { icon: 'supervised_user_circle', text:'تعداد کل مشاوران : 121'},
            { icon: 'supervised_user_circle', text:'مشاوران آنلاین : 70'}
        ],
        history_info:[
            { icon:'av_timer', text:'زمان کل : 1 ساعت'},
            { icon:'voicemail', text:'با 3 مشاور مختلف'}
        ],
        categories:[
            { icon:'emoji_people', title: 'مشاوره روانشناسی', color1: "#5b942d",color2: "#24d445" },
            { icon:'healing', title: 'مشاوره پزشکی', color1: "#029fca",color2: "#02cba9" },
            { icon:'book', title: 'مشاوره درسی', color1: "#ff903f",color2: "#f6bc2a" },
            { icon:'gavel', title: 'مشاوره حقوقی', color1: "#e12945",color2: "#e911a0" },
        ]
    }),
}
</script>

<style lang="scss" scoped>
</style>