<template>
    <div class="page-container">
        <md-app>
            
            <md-app-toolbar class="md-transparent" md-elevation="0">
                <md-button @click="toggleMenu" v-if="!menuVisible" class="md-icon-button">
                    <md-icon >menu</md-icon>
                </md-button>
                <span class="md-title">مشاوران</span>
                <div class="md-toolbar-section-end">
                    <md-button>خروج <md-icon class="logout-icon">logout</md-icon></md-button>
                </div>
            </md-app-toolbar>

            <md-app-drawer class="md-right" :md-active.sync="menuVisible" md-persistent="mini">
                <md-toolbar class="md-transparent" md-elevation="0">
                <span>گزینه ها</span>
                <div class="md-toolbar-section-end">
                    <md-button class="md-icon-button md-dense" @click="toggleMenu">
                    <md-icon>keyboard_arrow_left</md-icon>
                    </md-button>
                </div>
                </md-toolbar>

                <md-list>
                    <md-list-item @click="console.log('hi')">
                        <md-icon class="active">home</md-icon>
                        <span class="md-list-item-text">خانه</span>
                    </md-list-item>
                </md-list>

                <md-list>
                    <md-list-item @click="console.log('hi')">
                        <md-icon>settings</md-icon>
                        <span class="md-list-item-text">تنظیمات</span>
                    </md-list-item>
                </md-list>

            </md-app-drawer>  
            
            <md-app-content>
                <router-view></router-view>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
export default {
    name: 'DashboardScreen',
    data: () => ({
        menuVisible: false,
    }),
    methods:{
        toggleMenu(){
            this.menuVisible = !this.menuVisible;
        }
    },
}
</script>

<style scoped>
    .md-app-content{
        background: rgb(250, 250, 250) !important;
    }
    .logout-icon{
        color: crimson !important;
    }
    .active{
        color: crimson !important;
    }
</style>