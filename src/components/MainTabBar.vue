<template>
    <Tabbar>
        <TabBarItem path="/about" activeColor="#1296db">
            <template v-slot:itemimg >
                <img src="~assets/img/tabbar/profile.svg" alt="">
            </template>

            <template v-slot:itemimgactive >
                <img src="~assets/img/tabbar/profile_active.svg" alt="">
            </template>

            <template v-slot:itemtxt >
                <div>这一天</div>
            </template>

        </TabBarItem>
        <TabBarItem path="/video"  activeColor="#1296db">

            <template v-slot:itemimg >
                <img src="~assets/img/tabbar/video.svg" alt="">
            </template>

            <template v-slot:itemimgactive >
                <img slot="itemImgActive" src="~assets/img/tabbar/video_active.svg" alt="">
            </template>

            <template v-slot:itemtxt >
                <div slot="itemTxt">视频</div>
            </template>

        </TabBarItem>
        <TabBarItem path="/photo" activeColor="#1296db">
            <template v-slot:itemimg >
                <img src="~assets/img/tabbar/photos.svg" alt="">
            </template>

            <template v-slot:itemimgactive >
                <img slot="itemImgActive" src="~assets/img/tabbar/photos_active.svg" alt="">
            </template>

            <template v-slot:itemtxt >
                <div slot="itemTxt">图集</div>
            </template>

        </TabBarItem>
        <TabBarItem path="/home" activeColor="#1296db">

            <template v-slot:itemimg >
                <img src="~assets/img/tabbar/home.svg" alt="">
            </template>

            <template v-slot:itemimgactive >
                <img slot="itemImgActive" src="~assets/img/tabbar/home_active.svg" alt="">
            </template>

            <template v-slot:itemtxt >
                <div slot="itemTxt">首页</div>
            </template>

        </TabBarItem>
    </Tabbar>
</template>

<script>
    import Tabbar from "./tabbar/Tabbar";
    import TabBarItem from "./tabbar/TabBarItem";

    export default {
        name: "MainTabBar",
        components:{
            Tabbar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>