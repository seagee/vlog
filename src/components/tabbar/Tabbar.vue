<template>
    <div id="Tabbar">
        <slot></slot>

    </div>


    <router-view v-slot="{ Component }">
<!--        <keep-alive exclude="About,Photo">-->
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>

</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped>


    @media screen and (max-width: 960px){
        #Tabbar {
            display: flex;
            /*padding: 30px;*/
            background-color: #F5F5F5;
            box-shadow: 0 1px 1px rgba(100,100,100,0.2);
        }

    }
    @media screen and (min-width: 960px){
        #Tabbar {
            display: flex;
            /*padding: 30px;*/
            justify-content: center;
            background-color: #F5F5F5;
            box-shadow: 0 1px 1px rgba(100,100,100,0.2);
        }

    }


</style>